import { Box, Container, Typography, alpha, Collapse } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { Palette, COLORS } from "../../config/colors";
import { useState } from "react";
import { FAQS } from "./data";
import { FontFamily } from "../../config/fonts";

const C = {
  brand: Palette.primary.main,
  brandDark: Palette.primary.dark ?? "#2D7A39",
  paleGreen: "#EAF7E1",
};

const FAQItem = ({
  faq,
  open,
  onToggle,
  index,
}: {
  faq: (typeof FAQS)[0];
  open: boolean;
  onToggle: () => void;
  index: number;
}) => {
  const accentColor = C.brand;

  return (
    <Box
      onClick={onToggle}
      sx={{
        borderRadius: "16px",
        bgcolor: open ? COLORS.white : COLORS.white,
        border: `1.5px solid ${open ? alpha(accentColor, 0.3) : alpha(COLORS.ink, 0.07)}`,
        boxShadow: open
          ? `0 8px 32px ${alpha(accentColor, 0.1)}`
          : "0 1px 4px rgba(0,0,0,0.04)",
        cursor: "pointer",
        overflow: "hidden",
        transition:
          "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease",
        "&:hover": {
          borderColor: alpha(accentColor, 0.35),
          transform: open ? "none" : "translateY(-1px)",
          boxShadow: open
            ? `0 8px 32px ${alpha(accentColor, 0.1)}`
            : `0 6px 20px ${alpha(accentColor, 0.1)}`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: { xs: "18px 20px", md: "20px 28px" },
        }}
      >
        {/* Index number */}
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 700,
            color: open ? accentColor : alpha(COLORS.textMuted, 0.5),
            minWidth: 22,
            transition: "color 0.3s ease",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </Typography>

        {/* Category pill */}
        <Box
          sx={{
            display: { xs: "none", sm: "inline-flex" },
            alignItems: "center",
            borderRadius: "20px",
            px: "10px",
            py: "3px",
            bgcolor: open ? alpha(accentColor, 0.1) : alpha(COLORS.ink, 0.05),
            transition: "background 0.3s ease",
          }}
        >
          <Typography
            sx={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.05em",
              fontFamily: FontFamily.secondary,
              color: open ? accentColor : COLORS.textMuted,
              transition: "color 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            {faq.category}
          </Typography>
        </Box>

        <Typography
          sx={{
            flex: 1,
            fontSize: { xs: 15, md: 16 },
            fontWeight: 700,
            fontFamily: FontFamily.default,
            color: open ? COLORS.ink : COLORS.ink,
            letterSpacing: "-0.01em",
            lineHeight: 1.35,
            pr: 1,
          }}
        >
          {faq.question}
        </Typography>

        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: open ? accentColor : alpha(COLORS.ink, 0.06),
            color: open ? COLORS.white : COLORS.textMuted,
            transition:
              "background 0.3s ease, color 0.3s ease, transform 0.35s ease",
            transform: open ? "rotate(0deg)" : "rotate(0deg)",
          }}
        >
          {open ? (
            <RemoveRoundedIcon sx={{ fontSize: 17 }} />
          ) : (
            <AddRoundedIcon sx={{ fontSize: 17 }} />
          )}
        </Box>
      </Box>

      {/* Accordion body */}
      <Collapse in={open} timeout={340}>
        <Box
          sx={{
            px: { xs: "20px", md: "28px" },
            pb: "22px",
            // Left accent bar
            borderLeft: `3px solid ${accentColor}`,
            ml: { xs: "20px", md: "28px" },
            mr: { xs: "20px", md: "28px" },
            mb: "4px",
            pl: "18px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 14, md: 14.5 },
              lineHeight: 1.78,
              color: COLORS.textMuted,
            }}
          >
            {faq.answer}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <Box
      component="section"
      sx={{ bgcolor: COLORS.light, py: { xs: 5, md: 8 } }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 7 } }}>
          <Typography
            sx={{
              fontSize: 10.5,
              fontWeight: 700,
              fontFamily: FontFamily.secondary,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: COLORS.default,
              mb: 1.5,
            }}
          >
            Got questions?
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.85rem", md: "3.5rem" },
              fontFamily: FontFamily.default,
              letterSpacing: "-0.03em",
              color: COLORS.ink,
              mb: 1.25,
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              color: COLORS.textMuted,
              maxWidth: 480,
              mx: "auto",
            }}
          >
            Everything you need to know about how we works.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={i}
              open={openId === faq.id}
              onToggle={() => toggle(faq.id)}
            />
          ))}
        </Box>

        <Box
          sx={{
            mt: 6,
            textAlign: "center",
            bgcolor: COLORS.white,
            borderRadius: "16px",
            p: "22px 28px",
            border: `1.5px solid ${alpha(C.brand, 0.15)}`,
            boxShadow: `0 2px 12px ${alpha(C.brandDark, 0.06)}`,
          }}
        >
          <Typography sx={{ fontSize: 14.5, color: COLORS.textMuted }}>
            Still have questions?{" "}
            <Box
              component="a"
              href="/support"
              sx={{
                color: C.brandDark,
                fontWeight: 700,
                textDecoration: "none",
                borderBottom: `1.5px solid ${alpha(C.brandDark, 0.35)}`,
                pb: "1px",
                "&:hover": { borderColor: C.brandDark },
                transition: "border-color 0.2s ease",
              }}
            >
              Chat with our support team
            </Box>{" "}
            — we typically reply in under 2 hours.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;
