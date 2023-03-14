import React from 'react';
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import {useLocation} from "react-router-dom";

// @ts-ignore
const DetailStrain = ({route, navigate}) => {
  const location = useLocation();
  return(
    <Box width={'70%'}
    margin={'auto'}>
      <Card sx={{
        minHeight: 300,
        height: '100%',
        display: 'flex',
      }}>
        <CardMedia
          sx={{ height: '60vh', width: '20vw', objectFit: "contain" }}
          image={location.state.strain.imgUrl}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {location.state.strain.name.human}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location.state.strain.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default DetailStrain;
