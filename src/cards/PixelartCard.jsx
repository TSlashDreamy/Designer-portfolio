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
            <Link class='links' to='/pixelarts'>
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Иллюстрации"
                    height="140"
                    image="https://static8.depositphotos.com/1007844/941/v/600/depositphotos_9418067-stock-illustration-seamless-black-and-white-pattern.jpg"
                    title="Иллюстрации"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Иллюстрации
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Рисунок, фотография, гравюра или другое изображение, поясняющее текст. Художника называют иллюстратором. 
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
        </div>
    );
}
