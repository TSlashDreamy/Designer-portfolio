import React from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


export default function ImgMediaCard() {

    return (
        <div class="card">
            <Link class='links' to='/posters'>
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Постеры"
                    height="140"
                    image="https://shop-cdn1.vigbo.tech/shops/177743/products/19273799/images/3-60ea88b2564ba7d51e135614d2c6a6e2.jpg"
                    title="Постеры"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Постеры
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Постер — это художественно оформленный плакат, который заключает в себе конкретную идею или образ.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
        </div>
    );
}
