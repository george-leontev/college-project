import { CardComponentProps } from '../../models/card-component-props';
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import './card.css';
import { AppConsts } from '../../utils/app-consts';


export const CardComponent = ({ catalogItem, onBuyClick }: CardComponentProps) => {


    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: 'solid 1px #a2a2a2', borderRadius: '20px', width: '410px' }}>
            <CardMedia
                sx={{ height: 320, width: 280 }}
                image={`${AppConsts.webApiStatic}${catalogItem.image}`}
                title="caaat"
            />
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '50px' }}>
                <Typography variant="h5" component="div">
                    {catalogItem.name}
                </Typography>
                <Typography sx={{ marginLeft: '30px' }} variant="h5" component="div">
                    <p style={{ backgroundColor: '#dae2e5', padding: '6px', borderRadius: '8px' }}>1500 $</p>
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <button className="buy-button" onClick={onBuyClick}>Buy</button>
            </CardActions>
        </Card>
    );
}