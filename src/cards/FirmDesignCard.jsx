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
            <Link class='links' to="/firmstyle">
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Фирмовый дизайн"
                    height="140"
                    image="https://i.pinimg.com/564x/47/ca/49/47ca49a8cec3c857c197291bbca89f86.jpg"
                    title="Фирмовый дизайн"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Фирмовый дизайн
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Фирмовый стиль, это комплекс графических, цветовых и шрифтовых констант, формирующие образ бренда. 
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
        </div>
    );
}
