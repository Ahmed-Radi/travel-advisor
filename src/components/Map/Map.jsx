import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutLinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

export default function Map({ setCoordinates, setBounds, coordinates, places, setChildClicked }) {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)'); // this statement return *true* if screen width larger than 600px
    const imageUrl = 'https://ca-times.brightspotcdn.com/dims4/default/c93ef50/2147483647/strip/true/crop/5398x3648+0+0/resize/1486x1004!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F75%2F02%2Fe59417064931bbc042bf594f5010%2Fla-photos-1staff-874854-tr-winter40-culvercity21-mam.jpg'

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBa97dMlyDo8_a5BriJAfHb-Inf9rAnlNM' }} //** oldAPI(email: ahmedradi743@) //AIzaSyAwfkuM5bL6GY71UBrdLlqdhfiLM2tiWAM
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log(e)
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                onChildClick={(child) => (setChildClicked(child))}
            >
                {places?.map((place, i) => (
                    <div
                    className={classes.markerContainer}
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={i}
                >
                    { isDesktop ? (
                        <Paper elevation={3} className={classes.paper}>
                            <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                {place.name}
                            </Typography>
                            <img
                                className={classes.pointer}
                                src={place.photo ? place.photo.images.large.url : imageUrl}
                                alt={place.name}
                            />
                            <Rating size="small" value={Number(place.rating)} readOnly />
                        </Paper>
                    ) : ( // If the device is Mobile
                        <LocationOnOutLinedIcon color="primary" fontSize="large" />
                    ) }
                </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}