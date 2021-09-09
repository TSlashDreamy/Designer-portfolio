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
            <Link class='links' to='/logos'>
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Логотипы"
                    height="140"
                    image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7f69574590409.5c350b3d4f18e.jpg"
                    title="Логотипы"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Логотипы
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Логотип создает определенный образ фирмы, помогает целевой аудитории легко узнавать товар.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
        </div>
    );
}
