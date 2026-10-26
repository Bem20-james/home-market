export type UserRole = "tenant" | "landlord" | "admin";

export interface User {
  id: string;
  username: string;
  role: UserRole;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  location?: string;
  bio?: string;
  avatarUrl?: string;
  niche?: string[];
  joinedDate?: string;
  socialLinks?: {
    platform: string;
    handle: string;
    followers: number;
    url: string;
  }[];
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}
