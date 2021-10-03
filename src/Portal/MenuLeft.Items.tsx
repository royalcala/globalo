import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MenuContext } from './MenuLeft'
import { Link as RouterLink } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';

export function CollapseMenu({ pl, Icon,label,children }:{
    pl: number,
    Icon:React.ElementType,
    label: string,
    children?: JSX.Element[] | JSX.Element
}) {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <ListItemButton onClick={() => {
                setOpen(!open);
            }}
                sx={{ pl }}
            >
                <ListItemIcon>
                    <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {children}
                </List>
            </Collapse>
        </>
    )
}

export function LinkButton({
    Icon, pl, route, text
}: {
    Icon: React.ElementType,
    pl: number,
    route: string,
    text: string
}
) {
    const menuContext = React.useContext(MenuContext);
    return (
        <ListItemButton sx={{ pl: pl }} component={RouterLink} to={route}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText
                primary={text}
                onClick={() => {
                    menuContext.toggleDrawer(false)
                }}
            />
        </ListItemButton>
    )
}

