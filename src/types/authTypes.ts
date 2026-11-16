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


export type Role = "tenant" | "developers" | "agent";

export type StepId = "role" | "personal" | "details" | "password" | "verify";

export interface RegisterFormData {
  role: Role | null;
  // personal
  firstName: string;
  lastName: string;
  email: string;
  // landlord / agent details
  city: string;
  propertyCount: string; // landlord
  agencyName: string; // agent
  licenseNumber: string; // agent
  // password
  password: string;
  confirmPassword: string;
  // verify
  otp: string;
}

export type FormErrors = Partial<Record<keyof RegisterFormData, string>>;

export interface StepProps {
  data: RegisterFormData;
  errors: FormErrors;
  onChange: <K extends keyof RegisterFormData>(
    field: K,
    value: RegisterFormData[K]
  ) => void;
}