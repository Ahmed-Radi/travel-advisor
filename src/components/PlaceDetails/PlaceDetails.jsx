import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles'

export default function PlaceDetails({ place, selected, refProp }) {
    const imageUrl = 'https://ca-times.brightspotcdn.com/dims4/default/c93ef50/2147483647/strip/true/crop/5398x3648+0+0/resize/1486x1004!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F75%2F02%2Fe59417064931bbc042bf594f5010%2Fla-photos-1staff-874854-tr-winter40-culvercity21-mam.jpg'
    const classes = useStyles();
    if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    return (
        <div>
            <Card elevation={6}>
                <CardMedia
                    style={{ height: 350 }}
                    image={place.photo ? place.photo.images.large.url : imageUrl}
                    title={place.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">{place.name}</Typography>
                    <Box display="flex" justifyContent="space-between">
                        <Rating value={Number(place.rating)} readOnly/>
                        <Typography gutterBottom variant="subtitle1">out of {place.num_reviews} reviews</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Price</Typography>
                        <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Ranking</Typography>
                        <Typography gutterBottom variant="subtitle1">{place.rating}</Typography>
                    </Box>
                    {place?.awards?.map((award) => (
                        <Box my={1} display="flex" justifyContent="space-between" alignItem="center"> {/** my => margin y-axis = 1 margin top and bottom */}
                            <img src={award.images.small} alt={award.display_name}/>
                            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                        </Box>
                    ))}
                    {place?.cuisine?.map(({ name }, index) => (
                        <Chip key={index} size="small" label={name} className={classes.chip}/>
                    ))}
                    {place?.address && (
                        <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                            <LocationOnIcon /> {place?.address}
                        </Typography>
                    )}
                    {place?.phone && (
                        <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                            <PhoneIcon /> {place?.phone}
                        </Typography>
                    )}
                    <CardActions>
                        {place.web_url && <Button size='small' color="primary" onClick={() => window.open(place?.web_url, '_blank')}>
                            Trip Advisor
                        </Button>}
                        {place.website && <Button size='small' color="primary" onClick={() => window.open(place?.website, '_blank')}>
                            Website
                        </Button>}
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
}
