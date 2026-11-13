import { Box, Typography } from "@mui/material";

const SettingsPage = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Typography variant="body1">
        Welcome to the Settings page. Here you can find a summary of your
        account and activities.
      </Typography>
    </Box>
  );
};

export default SettingsPage;
