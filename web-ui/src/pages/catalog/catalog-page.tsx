import './catalog-page.css';

import { data } from '../../data/catalog';

import { Header } from "../../components/header/header";
import { CardComponent } from "../../components/card/card";
import { CartPage } from '../cart/cart-page';
import { Box, Grid } from "@mui/material";
import { useState } from 'react';


export const CatalogPage = () => {

    const [isCartPageVisible, setIsCartPageVisible] = useState(false);
    const [activeCatalogItemId, setActiveCatalogItemId] = useState<string | null>(null);

    const columns = 4;
    const rows = Math.floor((data.length / columns) + (data.length % columns > 0 ? 1 : 0));

    return (
        <div className="catalog-page">
            <Header />
            {!isCartPageVisible ? <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '50px' }}>
                <div>
                    {Array.from(Array(rows).keys()).map(r => {

                        return (
                            <div key={r}>
                                <Grid sx={{ display: 'flex', gap: '50px', padding: '50px' }} container>
                                    {Array.from(Array(columns).keys()).map(c => {
                                        const index = 4 * r + c;

                                        return (
                                            <Grid key={c}>
                                                {data.length >= (index + 1) ? (
                                                    <CardComponent data={data[index]} onBuyClick={() => {
                                                        setActiveCatalogItemId(data[index].id);
                                                        setIsCartPageVisible(true);
                                                    }} />
                                                ) : null}
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </div>
                        );
                    })}
                </div>
            </Box> : <CartPage catalogItemId={activeCatalogItemId!} />}
        </div>
    );
}