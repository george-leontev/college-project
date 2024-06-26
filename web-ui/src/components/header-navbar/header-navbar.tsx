import { Link } from "@mui/material";
import { CatalogIcon, CartIcon, SettingsIcon, LogoutIcon, HomeIcon } from "../../icons/icons";


export const Navbar = () => {

    return (
        <div className='main-nav-bar'>
            <Link underline="none" href='/home'>
                <button className='default-button'>
                    <p>Home</p>
                    <HomeIcon style={{ fontSize: '24px' }} />
                </button>
            </Link>

            <Link underline="none" href='/catalog'>
                <button className='default-button'>
                    <p>Catalog</p>
                    <CatalogIcon style={{ fontSize: '24px' }} />
                </button>
            </Link>

            <Link underline="none" href='/home'>
                <button className='default-button'>
                    <p>Cart</p>
                    <CartIcon style={{ fontSize: '24px' }} />
                </button>
            </Link>

            <Link underline="none" href='/home'>
                <button className='default-button'>
                    <p>Settings</p>
                    <SettingsIcon style={{ fontSize: '24px' }} />
                </button>
            </Link>

            <Link underline="none" href='/login'>
                <button className='default-button'>
                    <p>Log out</p>
                    <LogoutIcon style={{ fontSize: '24px' }} />
                </button>
            </Link>
        </div>
    );
}