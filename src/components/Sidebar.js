import {Fragment, useState} from "react";
import {Box, Drawer, IconButton, List, ListItem, ListItemText} from "@mui/material";
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = ()=> {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'shift')) {
            return;
        }
        setDrawerOpen(open)
    };

    return (
        <Fragment>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon/>
            </IconButton>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box ClassName="sidebar">
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemText primary="Inicio"/>
                        </ListItem>
                        <ListItem button component={Link} to="/about">
                            <ListItemText primary="Acerca de"/>
                        </ListItem>
                        <ListItem button component={Link} to="/contact">
                            <ListItemText primary="Contacto"/>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Fragment>
    );
}
export default Sidebar;
