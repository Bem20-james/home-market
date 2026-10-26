import { type AppNotification } from "../../../types/dashboard";

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

// Single source of truth for mock notifications. NotificationMenu.tsx used
// to define its own separate copy of this - delete that file, this is the
// only one NotificationsMenu.tsx needs now.

export const mockNotifications: AppNotification[] = [
  {
    id: "n1",
    type: "campaign_invite",
    title: "New Property Inquiry",
    body: "A prospective buyer has expressed interest in your 3-bedroom apartment in Abuja.",
    timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
    read: false,
    actionPath: "/properties",
    avatarInitials: "BI",
    avatarColor: "#4ade80",
  },
  {
    id: "n2",
    type: "payment",
    title: "Payment Received",
    body: "You have received ₦250,000 for the successful rental of your property.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    read: false,
    actionPath: "/transactions",
    avatarInitials: "PM",
    avatarColor: "#ec4899",
  },
  {
    id: "n3",
    type: "approval",
    title: "Property Listing Approved",
    body: "Your 4-bedroom duplex in Lekki has been verified and is now live on the platform.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    read: false,
    actionPath: "/properties",
    avatarInitials: "PL",
    avatarColor: "#f97316",
  },
  {
    id: "n4",
    type: "reminder",
    title: "Upcoming Property Viewing",
    body: "A viewing for your 2-bedroom apartment in Wuse 2 is scheduled for tomorrow.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    read: true,
    actionPath: "/bookings",
    avatarInitials: "PV",
    avatarColor: "#a78bfa",
  },
  {
    id: "n5",
    type: "campaign_invite",
    title: "New Viewing Request",
    body: "A prospective tenant has requested a viewing of your 3-bedroom flat in Gwarinpa.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 28).toISOString(),
    read: true,
    actionPath: "/bookings",
    avatarInitials: "VR",
    avatarColor: "#60a5fa",
  },
  {
    id: "n6",
    type: "system",
    title: "Complete Your Property Verification",
    body: "Your property verification is incomplete. Submit the required documents to build trust with prospective tenants and buyers.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    read: true,
    actionPath: "/verifications",
    avatarInitials: "SY",
    avatarColor: "#6366f1",
  },
  {
    id: "n7",
    type: "payment",
    title: "Rent Payment Pending",
    body: "The ₦850,000 rental payment for your property is pending. Check your transactions for the latest status.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    read: true,
    actionPath: "/transactions",
    avatarInitials: "PM",
    avatarColor: "#60a5fa",
  },
];
