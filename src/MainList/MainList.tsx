import * as React from 'react';
import Grid from '@mui/material/Grid';
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import StrainInterface from "../ts/Interfaces/Strain.Interface";


const strains = [{
    "id": {
        "$oid": "640f8318dab1244f700c6504"
    },
    "name": {
        "human": "Mango",
        "robot": "mango",
        "detailUrl": "mango"
    },
    "description": "La bonne drogue Mango est réputée pour être une bonne drogue",
    "imgUrl": "https://www.pngitem.com/pimgs/m/519-5191656_mango-kush-cbd-flower-bud-liverwort-hd-png.png",
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
    "id": {
        "$oid": "640f4534fdab1244f700c64fe"
    },
    "name": {
        "human": "Girl Scout Cookie",
        "robot": "girl_scout_cookie",
        "detailUrl": "girl-scout-cookie"
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
},{
    "id": {
        "$oid": "640f82efdab1244f7zD0c64fe"
    },
    "name": {
        "human": "Girl Scout Cookie",
        "robot": "girl_scout_cookie",
        "detailUrl": "girl-scout-cookie"
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
},{
    "id": {
        "$oid": "640f82efdab1244f700c64DSe"
    },
    "name": {
        "human": "Girl Scout Cookie",
        "robot": "girl_scout_cookie",
        "detailUrl": "girl-scout-cookie"
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
},{
    "id": {
        "$oid": "640lmlknab1244f700c64DSe"
    },
    "name": {
        "human": "Girl Scout Cookie",
        "robot": "girl_scout_cookie",
        "detailUrl": "girl-scout-cookie"
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
},{
    "id": {
        "$oid": "640f8zqdqdqd1244f700c64DSe"
    },
    "name": {
        "human": "Girl Scout Cookie",
        "robot": "girl_scout_cookie",
        "detailUrl": "girl-scout-cookie"
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

export default function MainList() {
    const {detailUrl} = useParams();
    const navigate = useNavigate();
    function goToDetail(event: any, s:StrainInterface) {
        console.log(event);
        console.log(s);
        navigate(`/details/${s.name.detailUrl}`, {state:{strain:s}});
    }

    return (
      <Box width={'100vw'}>
          <Grid container spacing={3} width={'70vw'} margin={'auto'}>
              {strains.map((s) => (
                <Grid item xs={3} key={s.id.$oid} onClick={(event: any) => goToDetail(event, s)}>
                    <Card sx={{
                        minHeight: 400,
                        height: '100%',
                        // TODO : Handle BoxShadow for Dark mode
                        ':hover': {
                            boxShadow: 20, // theme.shadows[20]
                            cursor: 'pointer'
                        },
                    }}>
                        <CardMedia
                          sx={{ height: '60%' }}
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
                        {/*<CardActions sx={{ position: 'sticky', bottom: 2}}>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>*/}
                    </Card>
                </Grid>
              ))}
          </Grid>
      </Box>
    );
}
