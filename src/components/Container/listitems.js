import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import ListIcon from "@material-ui/icons/List";
import PageviewIcon from "@material-ui/icons/Pageview";
import DvrIcon from "@material-ui/icons/Dvr";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Divider from "@material-ui/core/Divider";

export const mainListItems = (
  <div>
     <ListItem>
      <ListItemText primary="Ini Logo Aplikasi" />
    </ListItem>
    <Divider />
    <Divider />
    <Divider />
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Data Pelamar" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PlaylistAddIcon />
      </ListItemIcon>
      <ListItemText primary="Input Sesi Tes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DesktopWindowsIcon />
      </ListItemIcon>
      <ListItemText primary="Soal" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary="Daftar Tes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PageviewIcon />
      </ListItemIcon>
      <ListItemText primary="Hasil Tes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DvrIcon />
      </ListItemIcon>
      <ListItemText primary="Monitoring Progres Ujian" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
