import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import GlobalStyles from "../../../styles/useStyles";

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function AppbarContainer() {
  // const classes = useStyles();
  const globalClasses = GlobalStyles();
  console.log(useStyles);
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  console.log(open);

  return (
    <AppBar
    position="fixed"
    className={clsx(globalClasses.appBar, {
      [globalClasses.appBarShift]: open,
    })}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(globalClasses.menuButton, {
          [globalClasses.hide]: open,
        })}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap>
        Mini variant drawer
      </Typography>
    </Toolbar>
  </AppBar>
  );
}
export default AppbarContainer;
