import './header.css';

import { Typography, Icon, TextField, Link } from '@mui/material';
import { IoLogoOctocat as LogoCatIcon } from "react-icons/io5";


export const Header = () => {
    return (
        <div className='header-component'>
            <div className='logo-component'>
                <Icon sx={{ cursor: 'pointer' }}>
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

            <div className='main-nav-bar'>
                <Link href='http://localhost:3000/catalog'>
                    <button className='default-button'>Catalog</button>
                </Link>

                <Link href='http://localhost:3000/catalog'>
                    <button className='default-button'>About us</button>
                </Link>

                <Link href='http://localhost:3000/catalog'>
                    <button className='default-button'>Settings</button>
                </Link>

                <Link href='http://localhost:3000/catalog'>
                    <button className='default-button'>My account</button>
                </Link>

                <Link href='http://localhost:3000/registration'>
                    <button className='default-button'>Log in</button>
                </Link>

            </div>
        </div>
    );
}