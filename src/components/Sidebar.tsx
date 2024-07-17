// src/Sidebar.tsx
import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import '../App.css'
const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const handleToggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div style={{
            width: collapsed ? '50px' : '200px',
            backgroundColor: '#212121',
            height: '100vh',
            padding: '10px',
            transition: 'width 0.3s',
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {!collapsed && (
                        <ListItem component={Link} to="/" style={{ display: 'inline-block' }}>
                            <Typography style={{ fontSize: '16px', color: 'white' }}>G3 Innovations</Typography>
                        </ListItem>
                    )}
                    <IconButton onClick={handleToggle} style={{ color: 'white', marginRight: '10px' }}>
                        {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
            </div>
            <List style={{ width: '100%' }} className='sidebar'>
                <ListItem component={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
                    {!collapsed ? <>
                        <HomeIcon style={{ marginRight: '10px', color: 'white' }} />
                        <ListItemText primary="Home" primaryTypographyProps={{ style: { color: 'white' } }} /></> :
                        <HomeIcon style={{ color: 'white' }} />
                    }
                </ListItem>
                <ListItem component={Link} to="/services" className={location.pathname === '/services' ? 'active' : ''}>
                    {!collapsed ? <>
                        <AcUnitOutlinedIcon style={{ marginRight: '10px', color: 'white' }} />
                        <ListItemText primary="Services" primaryTypographyProps={{ style: { color: 'white' } }} /></> :
                        <AcUnitOutlinedIcon style={{ color: 'white' }} />}
                </ListItem>
                <ListItem component={Link} to="/revenue" className={location.pathname === '/revenue' ? 'active' : ''}>
                    {!collapsed ? <>
                        <MonetizationOnOutlinedIcon style={{ marginRight: '10px', color: 'white' }} />
                        <ListItemText primary="Revenue" primaryTypographyProps={{ style: { color: 'white' } }} /></> :
                        <MonetizationOnOutlinedIcon style={{ color: 'white' }} />}
                </ListItem>
                <ListItem component={Link} to="/sales" className={location.pathname === '/sales' ? 'active' : ''}>
                    {!collapsed ? <>
                        <TrendingDownOutlinedIcon style={{ marginRight: '10px', color: 'white' }} />
                        <ListItemText primary="Sales" primaryTypographyProps={{ style: { color: 'white' } }} /></> :
                        <TrendingDownOutlinedIcon style={{ color: 'white' }} />}
                </ListItem>
                <ListItem component={Link} to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>
                    {!collapsed ? <>
                        <SettingsIcon style={{ marginRight: '10px', color: 'white' }} />
                        <ListItemText primary="Settings" primaryTypographyProps={{ style: { color: 'white' } }} /></> :
                        <SettingsIcon style={{ color: 'white' }} />}
                </ListItem>
                <ListItem component={Link} to="/locations" className={location.pathname === '/locations' ? 'active' : ''}>
                    {!collapsed ? <>
                        <PlaceOutlinedIcon style={{ marginRight: '10px', color: 'white' }} />
                        <ListItemText primary="Locations" primaryTypographyProps={{ style: { color: 'white' } }} /></> :
                        <PlaceOutlinedIcon style={{ color: 'white' }} />}
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;
