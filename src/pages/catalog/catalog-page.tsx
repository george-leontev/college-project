import './catalog-page.css';

import { Box, Grid } from "@mui/material";
import { Header } from "../../components/header/header";
import { CardComponent } from "../../components/card/card";

export const CatalogPage = () => {
    const data = [
        {
            image: "airbuds.jpg",
            description: "blah-blah-blah"
        },
        {
            image: "infinix.jpg",
            description: "blah-blah-blah"
        },
        {
            image: "airbuds.jpg",
            description: "blah-blah-blah"
        },
        {
            image: "iphone.jpg",
            description: "blah-blah-blah"
        },
        {
            image: "airbuds.jpg",
            description: "huraaaaay"
        },
        {
            image: "airbuds.jpg",
            description: "huraaaaay"
        }
    ];

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
                                                    <CardComponent />
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