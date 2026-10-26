// src/devMockAuth.ts
import type { AppDispatch } from "./store";
import { setCredentials } from "./store/authSlice";

// Toggle roles here to preview each nav (landlord vs tenant)
const MOCK_USER = {
  id: "dev-user-1",
  first_name: "Dev",
  last_name: "Tester",
  username: "test_user",
  email: "dev@example.com",
  role: "tenant" as const, // switch to "tenant" to preview that layout
};

export function seedMockAuth(dispatch: AppDispatch) {
  dispatch(
    setCredentials({
      user: MOCK_USER,
      accessToken: "dev-fake-token",
    }),
  );
}