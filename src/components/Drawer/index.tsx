import * as React from 'react'
import { Drawer, IconButton, Divider, List, ListItem } from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons';

const DrawerComponent: React.FC = () => {
  return (
    <React.Fragment>
      <Drawer
        variant={'permanent'}
        anchor={'left'}

      >
        <IconButton>
          <ChevronLeft/>
        </IconButton>
        <Divider/>
        <List>
          <ListItem >
            ERIC
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default DrawerComponent;