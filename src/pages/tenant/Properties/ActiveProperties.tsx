import { Box, Typography, Grid } from "@mui/material";
import { StatCard } from "../../../components/dashboard";
import {
  FavoriteOutlined,
  AssignmentOutlined,
  CheckCircleOutlined,
} from "@mui/icons-material";
const ActiveProperties = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Properties
      </Typography>
      <Typography variant="body1">
        Manage your active leases, purchases, occupancy documents, smart access,
        and maintenance requests.
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12 }} data-aos="fade-right" sx={{ gap: 3 }}>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={1}>
              <Grid size={{ xs: 12, md: 3 }} data-aos="fade-right">
                <StatCard
                  icon={CheckCircleOutlined}
                  label="Active Properties"
                  value="5"
                  badge="+2 new"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }} data-aos="fade-right">
                <StatCard
                  icon={FavoriteOutlined}
                  label="Rent Due"
                  value="1"
                  badge="+2 new"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }} data-aos="fade-right">
                <StatCard
                  icon={AssignmentOutlined}
                  label="Inspections"
                  value="8"
                  badge="+2 new"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 3 }} data-aos="fade-right">
                <StatCard
                  icon={AssignmentOutlined}
                  label="Cancelled"
                  value="2"
                  badge="+2 new"
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActiveProperties;
