import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";
import { seedMockAuth } from "./devMockAuth.ts";

const queryClient = new QueryClient();
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
          // remove the onBeforeLift Block after API Integration
          onBeforeLift={() => {
            const alreadyLoggedIn = store.getState().auth.accessToken;

            if (!alreadyLoggedIn) {
              seedMockAuth(store.dispatch);
            }
          }}
        >
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </StrictMode>,
  );
}
