import { Link } from "@mui/material";


import { CiSettings as SettingsIcon } from "react-icons/ci";
import { CiShoppingCart as CartIcon } from "react-icons/ci";
import { CiLogin as LoginIcon } from "react-icons/ci";
import { GoTasklist as CatalogIcon } from "react-icons/go";
import { CiCircleInfo as AboutUsIcon } from "react-icons/ci";


export const Navbar = () => {
    return (
        <div className='main-nav-bar'>
            <Link underline="none" href='/catalog'>
                <button className='default-button'>
                    <p>Catalog</p>
                    <CatalogIcon style={{ fontSize: '24px' }} />
                </button>
            </Link>

            <Link underline="none" href='/cart'>
                <button className='default-button'>
                    <p>Cart</p>
                    <CartIcon style={{ fontSize: '24px' }} />
                </button>
            </Link>

            <Link underline="none" href='/catalog'>
                <button className='default-button'>
                    <p>About us</p>
                    <AboutUsIcon style={{ fontSize: '24px' }} />
                </button>
            </Link>

            <Link underline="none" href='/catalog'>
                <button className='default-button'>
                    <p>Settings</p>
                    <SettingsIcon style={{ fontSize: '24px' }} />
                </button>
            </Link>

            <Link underline="none" href='/login'>
                <button className='default-button'>
                    <p>Log in</p>
                    <LoginIcon style={{ fontSize: '24px' }} />
                </button>
            </Link>
        </div>
    );
}