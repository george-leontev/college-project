import './registration-page.css';

import { FormControl, FormLabel, Input, Link, Typography } from '@mui/material';


export const RegistrationPage = () => {
    return (
        <div className='registration-page'>
            <div className='form-component'>
                <Typography variant='h4'>Registration</Typography>
                <FormControl sx={{ width: '350px' }}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                </FormControl>
                <FormControl sx={{ width: '350px' }}>
                    <FormLabel>Password</FormLabel>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </FormControl>

                <Link href='http://localhost:3000/catalog'>
                    <button className='registration-button'>Create account</button>
                </Link>
            </div>

        </div>
    );
}