import { Box, Button, Grid, Link, Typography } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { CustomButton } from "../../../components/public";
import { COLORS, Palette } from "../../../config/colors";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftPanel from "./LeftPanel";
import PasswordStep from "./PasswordStep";
import PersonalInfoStep from "./PersonalInfoStep";
import RoleDetailsStep from "./RoleDetails";
import RoleStep from "./RoleStep";
import StepProgress from "./StepProgress";
import VerifyEmailStep from "./EmailVerificationStep";

import { INITIAL_FORM_DATA, ROLE_STEP, STEPS_BY_ROLE } from "./steps";
import type {
  FormErrors,
  RegisterFormData,
  StepProps,
} from "../../../types/authTypes";
import { validateStep } from "./validations";

const BUTTON_LABELS = {
  role: "Continue",
  personal: "Continue",
  details: "Continue",
  password: "Create account",
  verify: "Verify email",
} as const;

const RegisterPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0); // 0 = role selection
  const [data, setData] = useState<RegisterFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});

  // Role step is always first; the rest depends on the selected role
  const steps = useMemo(
    () => [ROLE_STEP, ...(data.role ? STEPS_BY_ROLE[data.role] : [])],
    [data.role],
  );
  const current = steps[activeStep];
  const isRoleStep = activeStep === 0;
  const isVerifyStep = current.id === "verify";

  const handleChange: StepProps["onChange"] = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleNext = () => {
    const stepErrors = validateStep(current.id, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    if (current.id === "password") {
      // TODO: call your register endpoint here. The API should create the
      // account and send the 6-digit code to data.email.
    }

    if (isVerifyStep) {
      // TODO: call your verify-email endpoint with data.email + data.otp
      navigate("/auth/login");
      return;
    }

    setActiveStep((s) => s + 1);
  };

  const handleBack = () => {
    setErrors({});
    setActiveStep((s) => Math.max(0, s - 1));
  };

  const stepProps = { data, errors, onChange: handleChange };

  const renderStep = () => {
    switch (current.id) {
      case "role":
        return <RoleStep {...stepProps} />;
      case "personal":
        return <PersonalInfoStep {...stepProps} />;
      case "details":
        return <RoleDetailsStep {...stepProps} />;
      case "password":
        return <PasswordStep {...stepProps} />;
      case "verify":
        return (
          <VerifyEmailStep
            {...stepProps}
            onResend={() => {
              /* TODO: call resend-code endpoint */
            }}
          />
        );
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        overflow: "hidden",
        bgcolor: COLORS.neutral,
        boxShadow: "0 4px 40px rgba(0,0,0,0.07)",
      }}
    >
      <Grid container sx={{ height: "100%", flex: 1 }}>
        <LeftPanel />

        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            px: { xs: 4, sm: 6, md: 8 },
            py: { xs: 4, md: 3 },
            overflowY: "auto",
          }}
        >
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
            sx={{
              width: "100%",
              maxWidth: "380px",
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Box
              onClick={() => navigate("/")}
              sx={{ cursor: "pointer", marginLeft: "-30px", mb: "-20px" }}
            >
              <Box
                component="img"
                src={"/logo.png"}
                sx={{ width: { xs: 140, sm: 100, md: 200 }, height: "auto" }}
              />
            </Box>

            {!isRoleStep && (
              <StepProgress
                current={activeStep}
                total={steps.length - 1}
                label={current.label}
              />
            )}

            <Typography
              sx={{
                color: "#0D0D0D",
                fontSize: { xs: "26px", md: "30px" },
                fontWeight: 700,
                letterSpacing: "-0.4px",
                mb: "6px",
              }}
            >
              {current.title}
            </Typography>
            <Typography sx={{ color: "#999", fontSize: "14px", mb: "28px" }}>
              {current.subtitle}
            </Typography>

            <Box sx={{ mb: "20px" }}>{renderStep()}</Box>

            <Box sx={{ display: "flex", gap: 1.5, mt: 3 }}>
              {!isRoleStep && !isVerifyStep && (
                <Button
                  onClick={handleBack}
                  startIcon={<ArrowBackRoundedIcon />}
                  sx={{
                    textTransform: "none",
                    color: "#555",
                    borderRadius: "10px",
                    px: 2,
                  }}
                >
                  Back
                </Button>
              )}
              <CustomButton
                shape="rounded"
                fullWidth
                variant={"primary"}
                size="md"
                onClick={handleNext}
                sx={{ whiteSpace: "nowrap" }}
              >
                {BUTTON_LABELS[current.id]}
              </CustomButton>
            </Box>

            <Box sx={{ textAlign: "center", mt: "20px" }}>
              <Typography
                component="span"
                sx={{ color: "#AAAAAA", fontSize: "13.5px" }}
              >
                Already have an account?&nbsp;
              </Typography>
              <Link
                href="/auth/login"
                underline="none"
                sx={{
                  color: Palette.primary.main,
                  fontSize: "13.5px",
                  fontWeight: 600,
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Login
              </Link>
            </Box>
          </Box>

          <Box sx={{ height: 56 }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterPage;
