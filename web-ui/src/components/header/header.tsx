import './header.css';

import { Typography, Icon, TextField } from '@mui/material';
import { Navbar } from '../header-navbar/header-navbar';
import { IoLogoOctocat as LogoCatIcon } from "react-icons/io5";


export const Header = () => {
    return (
        <div className='header-component'>
            <div className='logo-component'>
                <Icon sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <LogoCatIcon></LogoCatIcon>
                </Icon>
                <Typography
                    variant="h6"
                    style={{ flexGrow: 1, cursor: 'pointer' }}
                >
                    BUYKOT
                </Typography>
            </div>

            <div className='search-component'>
                <TextField sx={{ width: '400px' }} label="Search" variant="outlined" />
            </div>

            <Navbar />
        </div>
    );
}