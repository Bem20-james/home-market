import { Box } from "@mui/material";
import {
  FeaturedListings,
  HeroSection,
  ProcessSteps,
  SolutionsSection,
  StatsBar,
  TestimonialsSection,
} from "../../../components";

const HomePage = () => {
  return (
    <>
      <Box>
        <HeroSection />
      </Box>

      <Box>
        <StatsBar />
      </Box>

      <Box>
        <ProcessSteps />
      </Box>

      <Box>
        <FeaturedListings />
      </Box>

      <Box>
        <SolutionsSection />
      </Box>

      <Box>
        <TestimonialsSection />
      </Box>
    </>
  );
};

export default HomePage;
