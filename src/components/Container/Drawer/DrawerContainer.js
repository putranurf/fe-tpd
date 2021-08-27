import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { mainListItems, secondaryListItems } from "../listitems";
import GlobalStyles from "../../../styles/useStyles";

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function DrawerContainer() {
  const classes = useStyles();
  const globalClasses = GlobalStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(open);

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          globalClasses.drawerPaper,
          !open && globalClasses.drawerPaperClose
        ),
      }}
      open={open}
    >
      <div className={globalClasses.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  );
}
export default DrawerContainer;
