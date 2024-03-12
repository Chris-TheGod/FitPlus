import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",

  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);

  return (
    <AppBar>
      <StyledToolbar>
        <Box display='flex' alignItems='center' gap='10px'>
          <FitnessCenterIcon />
          <Typography
            variant='h6'
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            FitPlus
          </Typography>
        </Box>
        <Search>
          <InputBase placeholder='search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setUserMenuIsOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setUserMenuIsOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography variant='span'>Chris</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id='positioned-menu'
        open={userMenuIsOpen}
        onClose={(e) => setUserMenuIsOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
