import './main-page.css';

import { IconButton, Rating, Typography } from "@mui/material";

import { Header } from "../../components/header/header";
import { TelegramIcon, VKIcon, InstagramIcon, TwitterIcon } from '../../icons/icons';


export const MainPage = () => {
    return (
        <div className="main-page">
            <Header />
            <div className="main-page-content">
                <div className="rating-component">
                    <Typography variant="h5">Rate our application</Typography>
                    <Rating sx={{ fontSize: "2.8rem" }} defaultValue={0} precision={0.5} />
                </div>
                <div className='contacts-bar'>
                    <IconButton size="large">
                        <TelegramIcon style={{ fontSize: "2.5rem" }} />
                    </IconButton>
                    <IconButton size="large">
                        <VKIcon style={{ fontSize: "2.5rem" }} />
                    </IconButton>
                    <IconButton size="large">
                        <InstagramIcon style={{ fontSize: "2.5rem" }} />
                    </IconButton>
                    <IconButton size="large">
                        <TwitterIcon style={{ fontSize: "2.5rem" }} />
                    </IconButton>
                </div>
                <img style={{ width: '900px' }} src="images/home-page-cat.webp" alt="home cat" />
            </div>
        </div>

    );
}