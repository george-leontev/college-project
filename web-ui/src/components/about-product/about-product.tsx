import { Typography } from "@mui/material";
import { Link } from '@mui/material';

import { ArrowIcon } from "../../icons/icons";
import { CatalogItemModel } from "../../models/catalog-data-model";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


export const AboutProduct = () => {

    let { catalogItemId } = useParams();
    const navigate = useNavigate();

    const [catalogItem, setCatalogItem] = useState<CatalogItemModel | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.request({
                    url: `http://91.144.143.40:15022/api/products/${catalogItemId}`,
                    method: 'GET',
                });
                const catalogItem = response.data as CatalogItemModel;
                setCatalogItem(catalogItem);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [catalogItemId]);


    return (
        <div style={{ display: 'flex', gap: '30px', }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <Link underline='none' onClick={() => {
                        navigate(`/catalog`);
                    }}>
                        <button className='cart-back-button'><ArrowIcon style={{ fontSize: '24px' }} /> Back</button>
                    </Link>
                </div>
                <img src={catalogItem?.image} alt={catalogItem?.name} style={{ width: '450px', height: '480px', border: '1px solid #a8a8a8', borderRadius: '20px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', marginTop: '50px' }}>
                <Typography variant='h4' fontWeight='bold'>About the product:</Typography>
                <div className='characteristic-line'>
                    <div className='characteristic-name'>
                        <p>Breed</p>
                        <div className='dashed-string'></div>
                    </div>
                    <div style={{ display: 'flex', flex: 2 }}>
                        <p style={{ color: 'black', fontWeight: 'bold' }}>{catalogItem?.breed}</p>
                    </div>
                </div>

                <div className='characteristic-line'>
                    <div className='characteristic-name'>
                        <p>Specialization</p>
                        <div className='dashed-string'></div>
                    </div>
                    <div style={{ display: 'flex', flex: 2 }}>
                        <p style={{ color: 'black', fontWeight: 'bold' }}>{catalogItem?.specialization}</p>
                    </div>
                </div>

                <div className='characteristic-line'>
                    <div className='characteristic-name'>
                        <p>Age</p>
                        <div className='dashed-string'></div>
                    </div>
                    <div style={{ display: 'flex', flex: 2 }}>
                        <p style={{ color: 'black', fontWeight: 'bold' }}>{catalogItem?.age}</p>
                    </div>
                </div>

                <div className='characteristic-line'>
                    <div className='characteristic-name'>
                        <p>Homeland</p>
                        <div className='dashed-string'></div>
                    </div>
                    <div style={{ display: 'flex', flex: 2 }}>
                        <p style={{ color: 'black', fontWeight: 'bold' }}>{catalogItem?.homeland}</p>
                    </div>
                </div>

                <div>
                    <p style={{ color: 'black', fontWeight: 'bold', fontSize: '30px' }}>{catalogItem?.name}</p>
                    <p style={{ width: '760px', fontSize: '18px' }}>{catalogItem?.fullDescription}</p>
                </div>
            </div>
        </div>
    );
}