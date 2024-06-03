import './product-page.css';

import { TbCirclePercentage as PercentIcon } from "react-icons/tb";
import { FiHeart as LikeIcon } from "react-icons/fi";
import { FcLike as LikedIcon } from "react-icons/fc";

import { useState } from 'react';
import { Header } from '../../components/header/header';

import { Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { AboutProduct } from '../../components/about-product/about-product';


export const ProductPage = () => {
    const [isLike, setIsLike] = useState(false);

    const likeVariant = {
        exit: { scale: 0.6, type: "spring", stiffness: 300, damping: 10, duration: 0.6 },
        animate: { scale: 1, type: "spring", stiffness: 300, damping: 10, duration: 0.6 }
    }

    return (
        <div className="cart-page">
            <Header />
            <div style={{ display: 'flex',padding: '90px' }}>

                <AboutProduct />

                <div className='add-product-to-cart'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <p style={{ backgroundColor: '#dae2e5', padding: '6px', borderRadius: '8px' }}>1500 $</p>
                        <p style={{ textDecoration: 'line-through', color: '#a8a8a8' }}>2000 $</p>
                    </div>

                    <button className='discount-button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <PercentIcon style={{ fontSize: '20px' }} />
                        <p style={{ fontWeight: '500' }}>Do you want a discount?</p>
                    </button>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                            <button className='default-button' style={{ flex: 1 }}>Add to cart</button>
                            {!isLike ?
                                <motion.div
                                    variants={likeVariant}
                                    initial={'exit'}
                                    animate={'animate'}
                                    exit={'exit'}
                                    onClick={() => setIsLike(prev => !prev)}
                                >
                                    <LikeIcon style={{fontSize: '22px'}} />
                                </motion.div> :
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        variants={likeVariant}
                                        initial={'exit'}
                                        animate={'animate'}
                                        exit={'exit'}
                                        onClick={() => setIsLike(prev => !prev)}
                                    >
                                        <LikedIcon style={{fontSize: '22px'}} />
                                    </motion.div>
                                </AnimatePresence>}
                        </div>

                        <Typography variant='caption' color='#a8a8a8'>Delivery tomorrow</Typography>

                    </div>

                </div>
            </div>

        </div>
    );
}