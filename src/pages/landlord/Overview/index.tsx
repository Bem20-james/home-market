import { Box, Typography } from "@mui/material";
import {
  StatCard,
  DataTable,
  UpcomingInspections,
} from "../../../components/dashboard";
import { columns, properties, requests } from "./data";
import {
  VpnKeyOutlined,
  ApartmentRounded,
  PaymentOutlined,
  EventNoteRounded,
} from "@mui/icons-material";
import { IdentityVerification } from "../../../components/dashboard";

const LandlordOverview = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Landlord Overview
      </Typography>
      <Typography variant="body1">
        Welcome to the tenant overview page. Here you can find a summary of your
        account and activities.
      </Typography>

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          p: { xs: 2, sm: 3, lg: 4 },
        }}
      >
        <Box
          sx={{
            maxWidth: 1152,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
            }}
          >
            <StatCard
              icon={ApartmentRounded}
              tone="blue"
              label="Total listings"
              value={24}
              badge="+12%"
            />
            <StatCard
              icon={VpnKeyOutlined}
              tone="amber"
              label="Active rentals"
              value={18}
              badge="Steady"
            />
            <StatCard
              icon={EventNoteRounded}
              tone="rose"
              label="Pending inspections"
              value={5}
              badge="3 urgent"
            />
            <StatCard
              icon={PaymentOutlined}
              tone="emerald"
              label="Total revenue"
              value="$12,450"
              badge="+8%"
            />
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: 3,
              alignItems: "start",
              gridTemplateColumns: { xs: "1fr", lg: "minmax(0,1fr) 360px" },
            }}
          >
            <DataTable
              title="My properties"
              action={{ label: "View all", onClick: () => {} }}
              columns={columns}
              rows={properties}
              emptyMessage="You haven't listed any properties yet."
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <UpcomingInspections
                requests={requests}
                onAccept={() => {}}
                onDecline={() => {}}
              />
              <IdentityVerification boost="40%" onStart={() => {}} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandlordOverview;
