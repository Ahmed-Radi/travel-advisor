import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles'

export default function Header({ setCoordinates }) {
    const classes = useStyles()
    const [autoComplate, setAutoComplate] = useState(null)
    const onLoad = (autoC) => setAutoComplate(autoC)
    const onPlaceChanged = () => {
        const lat = autoComplate.getPlace().geometry.location.lat();
        const lng = autoComplate.getPlace().geometry.location.lng();
        // console.log(lat)
        setCoordinates({ lat, lng })
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h5" className={classes.title}>
                        Travel Advisor
                    </Typography>
                    {/** Not work google ask me to add Billing and when I try to add It in the end not accept it */}
                    {/* <Box display="flex">
                        <Typography variant="h6" className={classes.title}>
                            Explore New Places
                        </Typography>
                        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                            </div>
                        </Autocomplete>
                    </Box> */}
                </Toolbar>
            </AppBar>
        </>
    );
}
