// import { itemList } from "@/data";
// export default function Page({ params }) {
//   const selectedItem = itemList?.find(
//     (item) => item.id === parseInt(params?.id)
//   );
//   return <div></div>;
// }

// FoodItemDetail.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Grid } from '@mui/material';
import { fetchData } from '@/fetchData';

const FoodItemDetail = async({ params }) => {
  const itemList = await fetchData();
    const selectedItem = itemList?.find(
    (item) => item.id === parseInt(params?.id)
  );
  return (
    <Card sx={{ display: 'flex', maxWidth: 800, margin: 'auto', mt:5 }}>
      <Grid container>
        <Grid item xs={12} sm={4} md={3}>
          <Box
            component="img"
            src={selectedItem?.image}
            alt={selectedItem?.name}
            sx={{ width: '100%', height: 300, borderRadius: '8px' }}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {selectedItem?.name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              ${selectedItem?.price}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
              {selectedItem?.description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FoodItemDetail;
