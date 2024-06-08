import './catalog-page.css';

import { Header } from "../../components/header/header";
import { CardComponent } from "../../components/card/card";

import { Box, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { CatalogItemModel } from '../../models/catalog-data-model';


export const CatalogPage = () => {
    const navigate = useNavigate();

    const [data, setData] = useState<CatalogItemModel[]>([]);

    const columns = 3;
    const rows = useMemo(() => {
        return Math.floor((data.length / columns) + (data.length % columns > 0 ? 1 : 0));
    }, [data]);

    useEffect(() => {
        (async () => {
            const response = await axios.request({
                url: 'http://localhost:8000/api/products',
                method: 'GET',
            });

            const data = response.data as CatalogItemModel[];
            setData(data);
            console.log(data);
        }
        )();
    }, []);

    return data.length > 0 ?
        <div className="catalog-page" >
            <Header />
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <div>
                    {Array.from(Array(rows).keys()).map(r => {

                        return (
                            <div key={r}>
                                <Grid sx={{ display: 'flex', gap: '50px', padding: '50px' }} container>
                                    {Array.from(Array(columns).keys()).map(c => {
                                        const index = 3 * r + c;

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
        </div > : null
}