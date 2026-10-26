import { Box } from "@mui/material";
import {
  FeaturedListings,
  HeroSection,
  ListingsImageGrid,
  ProcessSteps,
  SolutionsSection,
  StatsBar,
  TestimonialsSection,
} from "../../../components/public";

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

      <Box>
        <ListingsImageGrid />
      </Box>
    </>
  );
};

export default HomePage;
