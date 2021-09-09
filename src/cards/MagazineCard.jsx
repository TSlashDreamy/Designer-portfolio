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
            <Link class='links' to='/magazines'>
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Журналы"
                    height="140"
                    image="https://mir-s3-cdn-cf.behance.net/project_modules/fs/55c15b35261811.56f037a315c12.jpg"
                    title="Журналы"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Журналы
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Печатные издания, имеющее постоянную рубрикацию и содержащее статьи или рефераты по различным темам.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
        </div>
    );
}
