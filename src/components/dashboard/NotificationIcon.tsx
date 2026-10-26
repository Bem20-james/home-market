import { Box } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AlarmIcon from "@mui/icons-material/Alarm";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { type NotificationType, typeIconColor } from "../../types/dashboard";

const NotificationIcon = ({
  type,
  size = 16,
}: {
  type: NotificationType;
  size?: number;
}) => {
  const color = typeIconColor[type];
  const icons: Record<NotificationType, React.ReactNode> = {
    campaign_invite: <CampaignOutlinedIcon sx={{ fontSize: size }} />,
    application: <PersonOutlinedIcon sx={{ fontSize: size }} />,
    payment: <AttachMoneyIcon sx={{ fontSize: size }} />,
    approval: <CheckCircleOutlinedIcon sx={{ fontSize: size }} />,
    reminder: <AlarmIcon sx={{ fontSize: size }} />,
    system: <SettingsOutlinedIcon sx={{ fontSize: size }} />,
  };
  return (
    <Box
      sx={{
        width: size + 16,
        height: size + 16,
        borderRadius: "10px",
        background: `${color}18`,
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {icons[type]}
    </Box>
  );
};

export default NotificationIcon;
