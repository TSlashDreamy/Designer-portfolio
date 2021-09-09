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
            <Link class='links' to="/ads">
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Реклама"
                    height="140"
                    image="https://campaigns.health.gov.au/sites/default/files/styles/image_in_compact_view/public/15_second_tvc_0.jpg?itok=bZLM0wSS"
                    title="Реклама"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Реклама
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Направление в маркетинге в целях привличения внимания с помощью массовой распространение информации.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
        </div>
    );
}
