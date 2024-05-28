import { CardComponentProps } from '../../models/card-component-props';
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import './card.css';


export const CardComponent = ({ data, onBuyClick }: CardComponentProps) => {

    return (
        <Card sx={{ border: 'solid 1px #a2a2a2', borderRadius: '20px', padding: '20px' }}>
            <CardMedia
                sx={{ height: 320, width: 300 }}
                image={data.image}
                title="caaat"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {data.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <button className="buy-button" onClick={onBuyClick}>Buy</button>
            </CardActions>
        </Card>
    );
}