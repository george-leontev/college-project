import { Typography } from "@mui/material";
import { Link } from '@mui/material';

import { data } from '../../data/catalog-data';
import { CatalogItemModel } from '../../models/catalog-data-model';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowIcon } from "../../icons/icons";


export const AboutProduct = () => {
    let { catalogItemId } = useParams();
    const [catalogItem, setCatalogItem] = useState<CatalogItemModel>();

    useEffect(() => {
        const catalogItem = data.find((item) => {
            return catalogItemId === item.id;
        });

        setCatalogItem(catalogItem);
    }, [catalogItemId]);

    return (
        <div style={{ display: 'flex', gap: '100px', }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <Link underline='none' href='/catalog'>
                        <button className='cart-back-button'><ArrowIcon style={{ fontSize: '24px' }} /> Back</button>
                    </Link>
                </div>
                <img src={catalogItem?.image} alt={catalogItem?.name} style={{ width: '600px', height: '700px', border: '1px solid #a8a8a8', borderRadius: '20px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: '10px', marginTop: '50px' }}>
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

                <div style={{}}>
                    <p style={{ color: 'black', fontWeight: 'bold', fontSize: '32px' }}>{catalogItem?.name}</p>
                    <p style={{width: '760px'}}>{catalogItem?.fullDescription}</p>
                </div>
            </div>
        </div>

    );
}