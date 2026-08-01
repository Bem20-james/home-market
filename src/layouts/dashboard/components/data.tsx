export const sideNavPaperStyles = ({ width }: { width: number }) => ({
  "& .MuiDrawer-paper": {
    width: width,
    boxSizing: "border-box",
    backgroundColor: "#F9FAFB",
    borderRight: "1px solid #e0e0e0",
    padding: "10px",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "4px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#D2D7D7",
      borderRadius: "10px",
      "&:hover": {
        background: "#9f9f9fff",
      },
    },
  },
});

export const mockNotifications = [
  {
    userIcon: "U",
    title: "New Message",
    message: "You have received a new message.",
  },
  {
    userIcon: "U",
    title: "Payment Received",
    message: "You have received a payment.",
  },
  {
    userIcon: "U",
    title: "Order Shipped",
    message: "Your order has been shipped.",
  },
];
