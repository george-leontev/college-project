import './catalog-page.css';

import { data } from '../../data/catalog-data';
import { Header } from "../../components/header/header";
import { CardComponent } from "../../components/card/card";

import { Box, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export const CatalogPage = () => {
    const navigate = useNavigate();
    const columns = 4;
    const rows = Math.floor((data.length / columns) + (data.length % columns > 0 ? 1 : 0));

    return (
        <div className="catalog-page">
            <Header />
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '50px' }}>
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
                                                        navigate(`/product/${data[index].id}`);
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
            </Box>
        </div>
    );
}