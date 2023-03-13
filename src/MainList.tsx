import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {styled } from '@mui/material/styles';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const strains = [{
    "_id": {
        "$oid": "640f8318dab1244f700c6504"
    },
    "name": {
        "human": "Mango",
        "robot": "mango"
    },
    "description": "La bonne drogue Mango est réputée pour être une bonne drogue",
    "imgUrl": "https://us.wayofleaf.com/wp-content/uploads/2019/03/mj_mango_450.jpg",
    "potency": {
        "THC": 10,
        "CBD": 80,
        "other": null
    },
    "type": {
        "indica": 20,
        "sativa": 0
    },
    "score": 3,
    "trustIndex": 10,
    "parents": {}
},{
    "_id": {
        "$oid": "640f82efdab1244f700c64fe"
    },
    "name": {
        "human": "Girl Scout Cookie",
        "robot": "girl_scout_cookie"
    },
    "description": "Un peu pour les fillettes",
    "imgUrl": "https://www.alchimiaweb.com/images/l/girl-scout-cookies---seed-stockers_12872_1_20200120135353_.jpg",
    "potency": {
        "THC": 20,
        "CBD": 10,
        "other": null
    },
    "type": {
        "indica": 20,
        "sativa": 0
    },
    "score": 4,
    "trustIndex": 100,
    "parents": {}
}]

// const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function MainList() {
    return (
        <Grid container spacing={2} justifyContent={'center'}>
            <Grid item xs={8} spacing={4}>
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 2,
                    }}
                >
                    {strains.map((s) => (
                        <Item key={s._id.$oid} elevation={1}>
                            <Card>
                                <CardMedia
                                  sx={{ height: 300 }}
                                  image={s.imgUrl}
                                  title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {s.name.human}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {s.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Item>
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
}
