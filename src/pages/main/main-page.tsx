import './main-page.css';

import { IconButton, Rating, Typography } from "@mui/material";

import { SlSocialVkontakte as VKIcon } from "react-icons/sl";
import { PiInstagramLogoLight as InstagramIcon } from "react-icons/pi";
import { LiaTelegramPlane as TelegramIcon } from "react-icons/lia";
import { CiTwitter as TwitterIcon } from "react-icons/ci";

import { Header } from "../../components/header/header";


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
                        <TelegramIcon style={{ fontSize: "2.5rem" }}></TelegramIcon>
                    </IconButton>
                    <IconButton size="large">
                        <VKIcon style={{ fontSize: "2.5rem" }}></VKIcon>
                    </IconButton>
                    <IconButton size="large">
                        <InstagramIcon style={{ fontSize: "2.5rem" }}></InstagramIcon>
                    </IconButton>
                    <IconButton size="large">
                        <TwitterIcon style={{ fontSize: "2.5rem" }}></TwitterIcon>
                    </IconButton>
                </div>
                <img style={{ flex: 1 }} src="images/home-cat.jpg" alt="home cat" />
            </div>
        </div>

    );
}