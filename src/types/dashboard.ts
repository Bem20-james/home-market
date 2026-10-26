 export type NotificationType =
  | "campaign_invite"
  | "application"
  | "payment"
  | "approval"
  | "system"
  | "reminder";
  
  export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  body: string;
  timestamp: string;
  read: boolean;
  actionPath?: string;
  avatarInitials?: string;
  avatarColor?: string;
}

export const typeIconColor: Record<NotificationType, string> = {
  campaign_invite: "#4ade80",
  application: "#60a5fa",
  payment: "#22c55e",
  approval: "#a78bfa",
  system: "#6366f1",
  reminder: "#f59e0b",
};

