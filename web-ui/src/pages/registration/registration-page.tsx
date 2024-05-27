import './registration-page.css';

import { Icon, Typography } from '@mui/material';

import { IoLogoOctocat as LogoCatIcon } from "react-icons/io5";
import { RegistrationForm } from '../../components/registration-form/registration-form';


export const RegistrationPage = () => {
    return (
        <div className='registration-page'>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className='registration-logo-component'>
                    <Icon fontSize='large' sx={{ cursor: 'pointer' }}>
                        <LogoCatIcon />
                    </Icon>
                    <Typography
                        variant="h4"
                    >
                        BUYKOT
                    </Typography>
                </div>

                <RegistrationForm />
            </div>

            <img className='registration-image' src="/images/registration-image.jpg" alt="img" />
        </div>
    );
}