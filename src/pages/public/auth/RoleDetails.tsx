import { Stack } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import CustomInput from "../../../components/CustomInput";
import { Palette } from "../../../config/colors";
import FieldError from "../../../components/FieldError";
import { type StepProps } from "../../../types/authTypes";

/** Only shown to landlords and agents. Fields change based on the role. */
const RoleDetailsStep = ({ data, errors, onChange }: StepProps) => (
  <Stack sx={{ gap: 2 }}>
    {data.role === "agent" && (
      <>
        <FieldError error={errors.agencyName}>
          <CustomInput
            fullWidth
            label="Agency name"
            placeholder="Enter your agency name"
            type="text"
            startIcon={<BusinessRoundedIcon sx={{ color: "#9AA0A6" }} />}
            value={data.agencyName}
            onChange={(e) => onChange("agencyName", e.target.value)}
            iconColor={Palette.primary.main}
            variant="outlined"
          />
        </FieldError>
        <FieldError error={errors.licenseNumber}>
          <CustomInput
            fullWidth
            label="License number"
            placeholder="Enter your license number"
            type="text"
            startIcon={<BadgeOutlinedIcon sx={{ color: "#9AA0A6" }} />}
            value={data.licenseNumber}
            onChange={(e) => onChange("licenseNumber", e.target.value)}
            iconColor={Palette.primary.main}
            variant="outlined"
          />
        </FieldError>
      </>
    )}

    {data.role === "developers" && (
      <FieldError error={errors.propertyCount}>
        <CustomInput
          fullWidth
          label="Number of properties"
          placeholder="How many properties do you own?"
          type="number"
          startIcon={<HomeWorkOutlinedIcon sx={{ color: "#9AA0A6" }} />}
          value={data.propertyCount}
          onChange={(e) => onChange("propertyCount", e.target.value)}
          iconColor={Palette.primary.main}
          variant="outlined"
        />
      </FieldError>
    )}

    <FieldError error={errors.city}>
      <CustomInput
        fullWidth
        label={
          data.role === "agent"
            ? "City you operate in"
            : "City of your properties"
        }
        placeholder="e.g. Lagos"
        type="text"
        startIcon={<LocationOnOutlinedIcon sx={{ color: "#9AA0A6" }} />}
        value={data.city}
        onChange={(e) => onChange("city", e.target.value)}
        iconColor={Palette.primary.main}
        variant="outlined"
      />
    </FieldError>
  </Stack>
);

export default RoleDetailsStep;
