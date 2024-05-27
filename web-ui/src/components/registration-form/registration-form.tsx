import { Typography, FormControl, FormLabel, Input, Link } from "@mui/material";
import { GoogleSvgIcon } from "../../icons/google-svg-icon";

export const RegistrationForm = () => {
    return (
        <div className='form-registration-component' style={{ display: 'flex', flex: 1, }}>
            <Typography variant='h4'>Login into the cat universe</Typography>

            <button className='google-login-button'>Login using Google <GoogleSvgIcon /> </button>

            <FormControl sx={{ width: '450px' }}>
                <FormLabel sx={{ fontSize: '18px' }}>Name</FormLabel>
                <Input
                    name="name"
                    placeholder="Enter your name"
                />
            </FormControl>
            <FormControl sx={{ width: '450px' }}>
                <FormLabel sx={{ fontSize: '18px' }}>Password</FormLabel>
                <Input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </FormControl>

            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
                <Link href='http://localhost:3000/catalog'>
                    <button className='registration-button'>Login</button>
                </Link>

                <div style={{ display: 'flex', gap: '5px' }}>
                    <Typography>First time here?</Typography>
                    <Link sx={{ cursor: 'pointer' }} underline="none">
                        <Typography sx={{ fontWeight: 'bold', color: 'black' }}>Register</Typography>
                    </Link>
                </div>
            </div>
        </div>
    );
}