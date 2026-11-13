import type { FormErrors, RegisterFormData, StepId } from "../../../types/authTypes";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateStep = (
  step: StepId,
  data: RegisterFormData
): FormErrors => {
  const e: FormErrors = {};

  switch (step) {
    case "role":
      if (!data.role) e.role = "Select how you'll use the platform.";
      break;

    case "personal":
      if (!data.firstName.trim()) e.firstName = "Enter your first name.";
      if (!data.lastName.trim()) e.lastName = "Enter your last name.";
      if (!data.email.trim()) e.email = "Enter your email address.";
      else if (!EMAIL_RE.test(data.email)) e.email = "Enter a valid email address.";
      break;

    case "details":
      if (!data.city.trim()) e.city = "Enter your city.";
      if (data.role === "landlord" && !data.propertyCount.trim())
        e.propertyCount = "Enter how many properties you manage.";
      if (data.role === "agent") {
        if (!data.agencyName.trim()) e.agencyName = "Enter your agency name.";
        if (!data.licenseNumber.trim())
          e.licenseNumber = "Enter your license number.";
      }
      break;

    case "password":
      if (data.password.length < 8)
        e.password = "Use at least 8 characters.";
      if (data.confirmPassword !== data.password)
        e.confirmPassword = "Passwords don't match.";
      break;

    case "verify":
      if (!/^\d{6}$/.test(data.otp)) e.otp = "Enter the 6-digit code.";
      break;
  }

  return e;
};