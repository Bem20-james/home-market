import { Box, Typography, Grid } from "@mui/material";
import {
  StatCard,
  DataTable,
  RecommendedProperties,
  ActiveRentals,
} from "../../../components/dashboard";
import { columns, inspections, recommended, rental } from "./data";
import {
  FavoriteOutlined,
  AssignmentOutlined,
  CheckCircleOutlined,
} from "@mui/icons-material";
const TenantOverview = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Tenant Overview
      </Typography>
      <Typography variant="body1">
        Welcome to the tenant overview page. Here you can find a summary of your
        account and activities.
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8.5 }} data-aos="fade-right" sx={{ gap: 3 }}>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={1}>
              <Grid size={{ xs: 12, md: 4 }} data-aos="fade-right">
                <StatCard
                  icon={CheckCircleOutlined}
                  label="Active Rentals"
                  value="5"
                  badge="+2 new"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }} data-aos="fade-right">
                <StatCard
                  icon={FavoriteOutlined}
                  label="Saved"
                  value="40"
                  badge="+2 new"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 4 }} data-aos="fade-right">
                <StatCard
                  icon={AssignmentOutlined}
                  label="Inspections"
                  value="2"
                  badge="+2 new"
                />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ mt: 3 }}>
            <DataTable
              title="My inspections"
              action={{ label: "View all", onClick: () => {} }}
              columns={columns}
              rows={inspections}
              emptyMessage="No inspections booked. Book one from a property page."
            />
          </Box>

          <Box sx={{ mt: 3 }}>
            <ActiveRentals rental={rental} onPayRent={() => {}} />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 3.5 }} data-aos="fade-right">
          <Box sx={{ mt: 2 }}>
            <RecommendedProperties
              properties={recommended}
              onSeeMore={() => {}}
              onQuickBook={() => {}}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TenantOverview;
