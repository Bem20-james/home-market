import { Box, Link, Typography } from "@mui/material";
import { type ClipboardEvent, type KeyboardEvent, useRef } from "react";
import { Palette } from "../../../config/colors";
import { type StepProps } from "../../../types/authTypes";

const LENGTH = 6;

interface Props extends StepProps {
  onResend?: () => void;
}

const VerifyEmailStep = ({ data, errors, onChange, onResend }: Props) => {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = Array.from({ length: LENGTH }, (_, i) => data.otp[i] ?? "");

  const setOtp = (next: string[]) =>
    onChange("otp", next.join("").slice(0, LENGTH));

  const handleChange = (i: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[i] = digit;
    setOtp(next);
    if (digit && i < LENGTH - 1) refs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !digits[i] && i > 0)
      refs.current[i - 1]?.focus();
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, LENGTH);
    onChange("otp", pasted);
    refs.current[Math.min(pasted.length, LENGTH - 1)]?.focus();
  };

  return (
    <Box>
      <Typography sx={{ color: "#666", fontSize: "13.5px", mb: 2 }}>
        Code sent to <b>{data.email}</b>
      </Typography>

      <Box sx={{ display: "flex", gap: 1, justifyContent: "space-between" }}>
        {digits.map((d, i) => (
          <Box
            key={i}
            component="input"
            ref={(el: HTMLInputElement | null) => {
              refs.current[i] = el;
            }}
            value={d}
            inputMode="numeric"
            autoComplete={i === 0 ? "one-time-code" : "off"}
            aria-label={`Digit ${i + 1}`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(i, e.target.value)
            }
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
              handleKeyDown(i, e)
            }
            onPaste={handlePaste}
            sx={{
              width: "100%",
              minWidth: 0,
              aspectRatio: "1 / 1.15",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: 600,
              borderRadius: "10px",
              border: "1.5px solid",
              borderColor: errors.otp ? "#D32F2F" : "#E0E0E0",
              bgcolor: "#FFFFFF",
              outline: "none",
              "&:focus": { borderColor: Palette.primary.main },
            }}
          />
        ))}
      </Box>

      {errors.otp && (
        <Typography sx={{ color: "#D32F2F", fontSize: "12px", mt: "6px" }}>
          {errors.otp}
        </Typography>
      )}

      <Typography sx={{ color: "#999", fontSize: "13px", mt: 2 }}>
        Didn&apos;t get it?{" "}
        <Link
          component="button"
          type="button"
          underline="none"
          onClick={onResend}
          sx={{
            color: Palette.primary.main,
            fontWeight: 600,
            fontSize: "13px",
            verticalAlign: "baseline",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Resend code
        </Link>
      </Typography>
    </Box>
  );
};

export default VerifyEmailStep;
