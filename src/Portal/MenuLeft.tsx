import React from 'react';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import ListSubheader from '@mui/material/ListSubheader';
import { Menu as MenuSession } from './menuLeft/Session'
type MenuContextType = {
  toggleDrawer: (open: boolean) => void
}
export const MenuContext = React.createContext<MenuContextType>({
  toggleDrawer: (open: boolean) => { }
});

export default function MenuDrawerLeft({ drawer, setDrawer }: { drawer: boolean, setDrawer: Function }) {

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setDrawer(open);
    };
  return (
    <Drawer
      anchor='left'
      open={drawer}
      onClose={toggleDrawer(false)}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
      >
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              globalo.shop
            </ListSubheader>
          }
        >
          <MenuContext.Provider value={{
            toggleDrawer: (open: boolean) => {
              setDrawer(open);
            }
          }}>
            <MenuSession />
          </MenuContext.Provider>
        </List>
      </Box>
    </Drawer>
  );
}
