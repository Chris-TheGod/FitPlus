import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  return (
    <AppBar>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          FitPlus
        </Typography>
        <FitnessCenterIcon sx={{ display: { xs: "block", sm: "none" } }} />
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
