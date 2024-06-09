import { Typography, FormControl, FormLabel, Input, Link } from "@mui/material";
import { GoogleSvgIcon } from "../../icons/google-svg-icon";

export const LoginForm = () => {
    return (
        <div className='form-registration-component' style={{ display: 'flex', flex: 1, }}>
            <Typography sx={{ fontSize: '22px' }}>Login into the cat universe</Typography>

            <button className='google-login-button'>Login using Google <GoogleSvgIcon /> </button>

            <div style={{ width: "100%", display: "flex", alignItems: 'center' }}>
                <div style={{ borderBottom: "solid #a2a2a2 1px", flex: 3 }}></div>
                <span style={{ color: '#a2a2a2', padding: '10px', fontSize: '14px' }}>OR</span>
                <div style={{ borderBottom: "solid #a2a2a2 1px", flex: 3 }}></div>
            </div>

            <FormControl sx={{ width: '420px' }}>
                <FormLabel sx={{ fontSize: '14px' }}>Name</FormLabel>
                <Input
                    name="name"
                    placeholder="Enter your name"
                />
            </FormControl>
            <FormControl sx={{ width: '420px' }}>
                <FormLabel sx={{ fontSize: '14px' }}>Password</FormLabel>
                <Input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </FormControl>

            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
                <Link underline="none" href='/catalog'>
                    <button className='registration-button'>Login</button>
                </Link>

                <div style={{ display: 'flex', gap: '5px', fontSize: '12px' }}>
                    <Typography sx={{color: '#a8a8a8'}}>First time here?</Typography>
                    <Link sx={{ cursor: 'pointer' }} underline="none">
                        <Typography sx={{ fontWeight: 'bold', color: '#a8a8a8' }}>Register</Typography>
                    </Link>
                </div>
            </div>
        </div>
    );
}