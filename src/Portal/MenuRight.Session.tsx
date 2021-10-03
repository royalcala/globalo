import React from 'react';
import { Auth } from 'aws-amplify';
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
// import FacebookIcon from '@mui/icons-material/Facebook';
import PersonIcon from '@mui/icons-material/Person';
import { GlobalContext } from '../App';
import { useHistory } from 'react-router-dom';

export default function MenuSession() {
    let history = useHistory();
    const globalContext = React.useContext(GlobalContext)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const isMenuOpen = Boolean(anchorEl);
    const handleMenuClose = () => {
        setAnchorEl(null);
        // handleMobileMenuClose();
    };

    const menuId = 'primary-search-account-menu';
    if (globalContext.user)
        return (
            <>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    id={menuId}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={async () => {
                        await Auth.signOut();
                        history.push("/login");
                        handleMenuClose()
                    }}>Cerrar Sesion</MenuItem>
                </Menu>
            </>
        )
    else
        return (
            <Button
                color="inherit"
                startIcon={<PersonIcon />}
                onClick={() => {
                    //@ts-ignore
                    // Auth.federatedSignIn({ provider: 'Facebook' })
                    // Auth.federatedSignIn()
                    history.push("/login");
                }}>
                Login
            </Button>
        )

}