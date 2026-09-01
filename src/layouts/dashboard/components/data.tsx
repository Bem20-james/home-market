export const sideNavPaperStyles = ({ width }: { width: number }) => ({
  "& .MuiDrawer-paper": {
    width,
    boxSizing: "border-box" as const,
    backgroundColor: "#F9FAFB",
    borderRight: "1px solid #e0e0e0",
    padding: "10px",
    overflowY: "auto" as const,
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

export interface Notification {
  userIcon?: string;
  title: string;
  message: string;
  time?: string;
}

// Single source of truth for mock notifications. NotificationMenu.tsx used
// to define its own separate copy of this - delete that file, this is the
// only one NotificationsMenu.tsx needs now.
export const mockNotifications: Notification[] = [
  {
    userIcon: "U",
    title: "New Message",
    message: "You have received a new message.",
    time: "10:11",
  },
  {
    userIcon: "U",
    title: "Payment Received",
    message: "You have received a payment.",
    time: "10:11",
  },
  {
    userIcon: "U",
    title: "Order Shipped",
    message: "Your order has been shipped.",
    time: "10:11",
  },
];
