import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export const CardComponent = () => {
    return (
        <Card sx={{ border: 'solid 1px black' }}>
            <CardMedia
                sx={{ height: 300, width: 290 }}
                image="/images/home-cat.jpg"
                title="caaat"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Caaaat
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Buy</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}