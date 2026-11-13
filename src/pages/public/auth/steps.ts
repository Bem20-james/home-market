import type { Role, StepId, RegisterFormData } from "../../../types/authTypes";

export interface StepConfig {
  id: StepId;
  label: string;
  title: string;
  subtitle: string;
}

export const ROLE_STEP: StepConfig = {
  id: "role",
  label: "Role",
  title: "Create an Account",
  subtitle: "Tell us how you plan to use the platform.",
};

const PERSONAL: StepConfig = {
  id: "personal",
  label: "About you",
  title: "Tell us about you",
  subtitle: "We'll use this to set up your profile.",
};

const PASSWORD: StepConfig = {
  id: "password",
  label: "Password",
  title: "Secure your account",
  subtitle: "Choose a password you'll remember.",
};

const VERIFY: StepConfig = {
  id: "verify",
  label: "Verify",
  title: "Verify your email",
  subtitle: "Enter the 6-digit code we sent to your inbox.",
};

// Steps AFTER the role selection, per role
export const STEPS_BY_ROLE: Record<Role, StepConfig[]> = {
  tenant: [PERSONAL, PASSWORD, VERIFY],
  landlord: [
    PERSONAL,
    {
      id: "details",
      label: "Your properties",
      title: "About your properties",
      subtitle: "Help tenants know where and what you offer.",
    },
    PASSWORD,
    VERIFY,
  ],
  agent: [
    PERSONAL,
    {
      id: "details",
      label: "Your agency",
      title: "Your agency details",
      subtitle: "We use these to verify your professional profile.",
    },
    PASSWORD,
    VERIFY,
  ],
};

export const INITIAL_FORM_DATA: RegisterFormData = {
  role: null,
  firstName: "",
  lastName: "",
  email: "",
  city: "",
  propertyCount: "",
  agencyName: "",
  licenseNumber: "",
  password: "",
  confirmPassword: "",
  otp: "",
};