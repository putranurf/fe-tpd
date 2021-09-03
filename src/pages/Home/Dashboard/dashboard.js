import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import GlobalStyles from "../../../styles/useStyles";
import AppbarContainer from '../../../components/Container/Appbar/AppbarContainer';
import DrawerContainer from '../../../components/Container/Drawer/DrawerContainer';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const globalClasses = GlobalStyles()
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={globalClasses.root}>
      <CssBaseline />
      <AppbarContainer/>
      <DrawerContainer/>
      <main className={globalClasses.content}>
        <div className={globalClasses.toolbar} />
        <Typography paragraph>
          tes
        </Typography>
        <Typography paragraph>
          percobaan
        </Typography>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
