import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import Sidebar from "./Sidebar"

function MenuIcon() {
    return null;
}

const Navbar = ()=>{
    return (
            <AppBar position="static">
                <Toolbar>
                    <Sidebar/>
                        Menu
                </Toolbar>
            </AppBar>
    )
}

export default Navbar;
