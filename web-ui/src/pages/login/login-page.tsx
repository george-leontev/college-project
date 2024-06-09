import './login-page.css';

import { Icon, Typography } from '@mui/material';

import { IoLogoOctocat as LogoCatIcon } from "react-icons/io5";
import { LoginForm } from '../../components/login-form/login-form';
import { AppConsts } from '../../utils/app-consts';


export const LoginPage = () => {
    return (
        <div className='registration-page'>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className='registration-logo-component'>
                    <Icon fontSize='medium' sx={{ cursor: 'pointer' }}>
                        <LogoCatIcon />
                    </Icon>
                    <Typography variant="h5">BUYKOT</Typography>
                </div>
                <LoginForm />
            </div>

            <img className='registration-image' src={`${AppConsts.webApiStatic}/images/registration-image.jpg`} alt="img" />
        </div>
    );
}