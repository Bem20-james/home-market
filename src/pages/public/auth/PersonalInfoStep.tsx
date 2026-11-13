import { Stack } from "@mui/material";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import CustomInput from "../../../components/CustomInput";
import { Palette } from "../../../config/colors";
import FieldError from "../../../components/FieldError";
import { type StepProps } from "../../../types/authTypes";

const PersonalInfoStep = ({ data, errors, onChange }: StepProps) => (
  <Stack sx={{ gap: 2 }}>
    <FieldError error={errors.firstName}>
      <CustomInput
        fullWidth
        label="First name"
        placeholder="Enter your first name"
        type="text"
        startIcon={<PersonOutlineRoundedIcon sx={{ color: "#9AA0A6" }} />}
        value={data.firstName}
        onChange={(e) => onChange("firstName", e.target.value)}
        iconColor={Palette.primary.main}
        variant="outlined"
      />
    </FieldError>

    <FieldError error={errors.lastName}>
      <CustomInput
        fullWidth
        label="Last name"
        placeholder="Enter your last name"
        type="text"
        startIcon={<PersonOutlineRoundedIcon sx={{ color: "#9AA0A6" }} />}
        value={data.lastName}
        onChange={(e) => onChange("lastName", e.target.value)}
        iconColor={Palette.primary.main}
        variant="outlined"
      />
    </FieldError>

    <FieldError error={errors.email}>
      <CustomInput
        fullWidth
        label="Email"
        placeholder="Enter your email address"
        type="text"
        startIcon={<MailOutlineRoundedIcon sx={{ color: "#9AA0A6" }} />}
        value={data.email}
        onChange={(e) => onChange("email", e.target.value)}
        iconColor={Palette.primary.main}
        variant="outlined"
      />
    </FieldError>
  </Stack>
);

export default PersonalInfoStep;
