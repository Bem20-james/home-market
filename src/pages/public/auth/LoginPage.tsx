import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import { CustomInput, CustomButton } from "../../../components";
import { COLORS, Palette } from "../../../config/colors";
import { useState } from "react";
import LeftPanel from "./LeftPanel";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        overflow: "hidden",
        bgcolor: COLORS.light,
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
          }}
        >
          <Box
            component="form"
            onSubmit={(e) => e.preventDefault()}
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
            <Typography
              sx={{
                color: "#0D0D0D",
                fontSize: { xs: "26px", md: "30px" },
                fontWeight: 700,
                letterSpacing: "-0.4px",
                mb: "6px",
              }}
            >
              Welcome back
            </Typography>
            <Typography sx={{ color: "#999", fontSize: "14px", mb: "28px" }}>
              Please enter your details to access your account.
            </Typography>

            <Stack sx={{ mb: "8px", gap: 2 }}>
              <CustomInput
                fullWidth
                label="Email or Phone Number"
                placeholder="Enter your email or phone"
                type="text"
                startIcon={<MailOutlineRoundedIcon sx={{ color: "#9AA0A6" }} />}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                iconColor={Palette.primary.main}
                variant="outlined"
              />

              <Box>
                <CustomInput
                  fullWidth
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  startIcon={<LockOutlinedIcon sx={{ color: "#9AA0A6" }} />}
                  endIcon={
                    <Box
                      component="span"
                      onClick={() => setShowPassword((prev) => !prev)}
                      sx={{ display: "flex", cursor: "pointer" }}
                    >
                      {showPassword ? (
                        <VisibilityOffRoundedIcon sx={{ color: "#9AA0A6" }} />
                      ) : (
                        <VisibilityRoundedIcon sx={{ color: "#9AA0A6" }} />
                      )}
                    </Box>
                  }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  iconColor={Palette.primary.main}
                  variant="outlined"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "right",
                  justifyContent: "right",
                  mb: "6px",
                }}
              >
                <Link
                  href="/auth/forgot-password"
                  underline="none"
                  sx={{
                    color: Palette.primary.main,
                    fontSize: "12.5px",
                    fontWeight: 500,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>
            </Stack>

            <CustomButton
              type="submit"
              shape="rounded"
              fullWidth
              variant="primary"
            >
              {"Log In"}
            </CustomButton>

            <Divider
              sx={{
                my: "18px",
                "&::before, &::after": { borderColor: "#E6E6E6" },
                color: "#BBBBBB",
                fontSize: "13px",
              }}
            >
              or continue with
            </Divider>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon sx={{ fontSize: 18 }} />}
              sx={{
                color: "#1A1A1A",
                borderColor: "#E0E0E0",
                borderRadius: "10px",
                py: "11px",
                textTransform: "none",
                fontWeight: 400,
                fontSize: "14px",
                bgcolor: "#FFFFFF",
                justifyContent: "center",
                letterSpacing: "0.1px",
                "&:hover": {
                  borderColor: "#C8C8C8",
                  bgcolor: "#FAFAFA",
                },
                boxShadow: "none",
              }}
            >
              Sign in with Google
            </Button>

            <Box sx={{ textAlign: "center", mt: "20px" }}>
              <Typography
                component="span"
                sx={{ color: "#AAAAAA", fontSize: "13.5px" }}
              >
                Don&apos;t have an account?&nbsp;
              </Typography>
              <Link
                href="/auth/onboarding"
                underline="none"
                sx={{
                  color: Palette.primary.main,
                  fontSize: "13.5px",
                  fontWeight: 600,
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Sign Up
              </Link>
            </Box>
          </Box>

          <Box sx={{ height: 56 }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
