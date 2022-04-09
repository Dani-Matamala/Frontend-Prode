import React from 'react'
import '../App.css'
import { makeStyles } from '@material-ui/core';
import { Avatar, Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: 5,
        marginLeft: 5,
        alignItems: "center"
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));



function Pais(props = 'Pais') {
    const classes = useStyles()

    return (
        <Grid container spacing={2} alignContent='center' >
            <Grid item>
                <Avatar variant='rounded' alt="Logo Pais" src={`https://flagcdn.com/20x15/${props.code}.png`
                } className={classes.small} />
            </Grid>
            <Grid item>
                <Typography noWrap variant="body1" color="initial">{props.country}</Typography>
            </Grid>
        </Grid>
    )
}

export default Pais


// <div className='Pais'>
        //     <div id='NamePais'>
        //     <h2>pais</h2>
        //     </div>
        //     <div id='ImgPais'>
        //         <img src={logoPais} alt="" />
        //     </div>
        // </div>