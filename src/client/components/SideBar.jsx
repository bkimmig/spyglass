import * as React from 'react';
import {
  Toolbar,
  Drawer,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon
} from '@mui/material';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import BarChartIcon from '@mui/icons-material/BarChart';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import { Link } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';

const drawerWidth = 240;
function SideBar() {
  return (
    <Drawer
      className="sideBar"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          border: 'none',
          bgcolor: '#1a1a1a',
          color: '#fff'
        }
      }}
      variant="permanent"
      anchor="left"
    >
      <AnimatedLogo />
      <Toolbar />
      <List>
        {/* Cluster Metric List Item */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Cluster Metrics" />
            </Link>
          </ListItemButton>
        </ListItem>
        {/* Cost Analysis List Item */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PriceChangeIcon />
            </ListItemIcon>
            <Link to="/cost">
              <ListItemText primary="Cost Analysis" />
            </Link>
          </ListItemButton>
        </ListItem>
        {/* Alerts List Item */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NotificationImportantIcon />
            </ListItemIcon>
            <Link>
              <ListItemText primary="Alerts" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideBar;
