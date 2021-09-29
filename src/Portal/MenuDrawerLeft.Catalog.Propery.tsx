import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {LinkButton} from './MenuDrawerLeft.List'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
export default function Menu() {
    const [open, setOpen] = React.useState(false);    
    return (
        <>
            <ListItemButton onClick={() => {
                setOpen(!open);
            }}
                sx={{ pl: 4 }}
            >
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Propiedades" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <LinkButton
                    Icon={AddCircleIcon}
                    pl={6}
                    route="/catalogs/property/new"
                    text="Nueva Propiedad"                    
                    />
                    <LinkButton
                    Icon={FormatListBulletedIcon}
                    pl={6}
                    route="/catalogs/property/list"
                    text="Lista Propiedades"                    
                    />
                </List>
            </Collapse>
        </>
    )
}