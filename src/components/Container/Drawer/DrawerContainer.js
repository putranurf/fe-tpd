import React from "react";
import Drawer from "@material-ui/core/Drawer";
import GlobalStyles from "../../../styles/useStyles";
import DrawerList from "../../../styles/drawer";
import { useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import PropTypes from 'prop-types';


function DrawerContainer(props) {
   const { window } = props;
  const globalClasses = GlobalStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={globalClasses.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: globalClasses.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {DrawerList}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: globalClasses.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {DrawerList}
        </Drawer>
      </Hidden>
    </nav>
  );
}


DrawerContainer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


export default DrawerContainer;
