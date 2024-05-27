import './card.css'

import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export const CardComponent = () => {
    return (
        <Card sx={{ border: 'solid 1px black' }}>
            <CardMedia
                sx={{ height: 300, width: 290 }}
                image="/images/home-page-cat.webp"
                title="caaat"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Caaaat
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                <button className="buy-button">Buy</button>
            </CardActions>
        </Card>
    );
}