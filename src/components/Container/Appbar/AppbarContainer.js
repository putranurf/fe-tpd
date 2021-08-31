import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import GlobalStyles from "../../../styles/useStyles";
import UserIcon from '@material-ui/icons/AccountCircle';
import { useTheme } from "@material-ui/core/styles";


function AppbarContainer() {
  const globalClasses = GlobalStyles();  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="fixed" className={globalClasses.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={globalClasses.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={globalClasses.title}
        >
          Responsive drawer
        </Typography>
        <IconButton color="inherit">
          <UserIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default AppbarContainer;
