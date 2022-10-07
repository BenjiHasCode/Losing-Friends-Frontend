import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import IconButton from "@mui/material";
import Typography from "@mui/material/Typography";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { green } from "@mui/material/colors";   // TODO reimplement a400 later
import Search from "./search";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Grid from "@mui/material/Grid";
import authService from '../services/authService';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


function ProfileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
  
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <AccountCircleIcon fontSize="large" sx={{ color: green[50]}} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => {handleClose(); navigate('/profile')}}>Profile</MenuItem>
          <MenuItem onClick={() => handleClose()}>My account TODO IMPLEMENT</MenuItem> 
          <MenuItem onClick={() => {authService.logout(); navigate('/')}}
            >Logout</MenuItem>
        </Menu>
      </div>
    );
}


class NavBar extends React.Component {
    render() {
        if (!this.props.user)   // refactor probably not a good solution
            return;                 // we only want navbar if user is loggedin
                                    // but if they are logged in then we want it everywhere
        
        return (    // layout needs improving
            <React.Fragment>
                <AppBar position="fixed" sx={{backgroundColor: green[500]}}>
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={3}>
                                <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: "bold", fontStyle: 'italic' }}>
                                    <NavLink style={{textDecoration: 'none'}} to='/'>
                                        Losing Friends!
                                    </NavLink>
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Search />
                            </Grid>
                            <Grid item xs={1}>
                                <Button>
                                <Badge badgeContent={4} color="primary">
                                    <MailIcon sx={{ color: green[50]}}/>
                                </Badge>
                                </Button>
                                
                            </Grid>
                            <Grid item xs={1}>
                                <ProfileMenu user={this.props.user}/>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </React.Fragment>
        );
    }
}

export default NavBar;