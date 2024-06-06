import './main-page.css';

import { IconButton, Link, Rating, Typography } from "@mui/material";

import { Header } from "../../components/header/header";
import { TelegramIcon, VKIcon, InstagramIcon, TwitterIcon } from '../../icons/icons';


export const MainPage = () => {
    return (
        <div className="main-page">
            <Header />
            <div className="main-page-content">
                <div className="rating-component">
                    <Typography variant="h5">Rate our application</Typography>
                    <Rating sx={{ fontSize: '2.8rem' }} defaultValue={0} precision={1} />
                </div>
                <div className='contacts-bar'>
                    <IconButton target='https://t.me/StarryRider' href='https://t.me/StarryRider' size="medium">
                        <TelegramIcon style={{ fontSize: "2.5rem" }} />
                    </IconButton>
                    <IconButton target='https://vk.com/egorchick24' href='https://vk.com/egorchick24' size="medium">
                        <VKIcon style={{ fontSize: "2.5rem" }} />
                    </IconButton>
                    <IconButton size="medium">
                        <InstagramIcon style={{ fontSize: "2.5rem" }} />
                    </IconButton>
                    <IconButton size="medium">
                        <TwitterIcon style={{ fontSize: "2.5rem" }} />
                    </IconButton>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: '75%' }}>
                    <div style={{ position: 'absolute', fontSize: '70px', top: '-52px', fontFamily: 'Monospace' }}>
                        Help in finding new friends
                    </div>
                    <img style={{ position: 'relative', zIndex: '1', width: '560px' }} src="images/home-page-cat.webp" alt="home cat" />
                </div>
            </div>
        </div>

    );
}