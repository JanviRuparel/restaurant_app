// // 'use client'
// // import React from "react";
// // import Banner from "@/images/banner.png";
// // import Banner1 from "@/images/banner1.png";
// // import Banner2 from "@/images/banner2.png";

// // import Category1 from "@/images/food images/cat1.png";
// // import Category2 from "@/images/food images/cat2.jpeg";
// // import Category3 from "@/images/food images/cat3.jpeg";
// // import Category4 from "@/images/food images/cat4.jpeg";
// // import Category5 from "@/images/food images/cat5.jpeg";
// // import Category6 from "@/images/food images/cat6.jpeg";
// // import {
// //   Grid,
// //   Box,
// //   Card,
// //   CardContent,
// //   CardMedia,
// //   CardActionArea,
// //   Typography,
// //   Item,
// // } from "@mui/material";

// // const HomePage = () => {
// //   return (
// //     <main>
// //       <section className="mt-6">
// //         <Box sx={{ width: "100%" }}>
// //           <Grid
// //             container
// //             rowSpacing={1}
// //             columnSpacing={{ xs: 1, sm: 2, md: 3 }}
// //           >
// //             <Grid item xs={6}>
// //               {/* <Item>1</Item> */}
// //               <Card sx={{ maxWidth: 345 }}>
// //                 {/* <CardActionArea>
// //                   <CardMedia
// //                     component="img"
// //                     height="140"
// //                     image={Category1}
// //                     alt="green iguana"
// //                   />
// //                   <CardContent>
// //                     <Typography gutterBottom variant="h5" component="div">
// //                       Lizard
// //                     </Typography>
// //                     <Typography variant="body2" color="text.secondary">
// //                       Lizards are a widespread group of squamate reptiles, with
// //                       over 6,000 species, ranging across all continents except
// //                       Antarctica
// //                     </Typography>
// //                   </CardContent>
// //                 </CardActionArea> */}
// //               </Card>
// //             </Grid>
// //             <Grid item xs={6}>
// //               <Item>2</Item>
// //             </Grid>
// //             <Grid item xs={6}>
// //               <Item>3</Item>
// //             </Grid>
// //             <Grid item xs={6}>
// //               <Item>4</Item>
// //             </Grid>
// //           </Grid>
// //         </Box>
// //       </section>
// //     </main>
// //   );
// // }
// // export default HomePage

// "use client";
// import {
//   Box,
//   Button,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Grid,
//   IconButton,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";
// import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { useCart } from "@/app/context/CartContext";

// const Home = () => {
//   const { addToCart } = useCart();
//   const [quantity, setQuantity] = useState(1);

//   const handleAddToCart = (item) => {
//     addToCart(item);
//   };

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       const newQuantity = quantity - 1;
//       setQuantity(newQuantity);
//       //   onQuantityChange(newQuantity);
//     }
//   };

//   const handleIncrease = () => {
//     const newQuantity = quantity + 1;
//     setQuantity(newQuantity);
//     // onQuantityChange(newQuantity);
//   };

//   const items = [
//     { id: 1, name: "Biryani", price: "$100", image: "../cat1.png" },
//     { id: 2, name: "Pizza", price: "$150", image: "../cat2.jpeg" },
//     { id: 3, name: "Pasta", price: "$120", image: "../cat3.jpeg" },
//     { id: 4, name: "Sushi", price: "$200", image: "../cat5.jpeg" },
//     { id: 5, name: "Burger", price: "$90", image: "../cat2.jpeg" },
//     { id: 6, name: "Salad", price: "$80", image: "../cat1.png" },
//     { id: 7, name: "Tacos", price: "$110", image: "../cat3.jpeg" },
//     { id: 8, name: "Samosa", price: "$70", image: "../cat5.jpeg" },
//   ];

//   //   return (
//   //     // <Box sx={{ width: "100%" }}>
//   //     //   <Grid
//   //     //     container
//   //     //     rowSpacing={1}
//   //     //     mt={5}
//   //     //     columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//   //     //   >
//   //     //     <Grid item xs={6}>
//   //     //       {/* <Item>1</Item> */}
//   //     //       <Card sx={{ width: 300, height: 400 }}>
//   //     //         <CardActionArea>
//   //     //           {/* <CardMedia
//   //     //             component="img"
//   //     //             height="140"
//   //     //             image={Category1}
//   //     //             alt="green iguana"
//   //     //           /> */}
//   //     //           <img
//   //     //             src={"../cat1.png"}
//   //     //             alt={"image"}
//   //     //             loading="lazy"
//   //     //             width={200}
//   //     //           />
//   //     //           <CardContent>
//   //     //             <Typography gutterBottom variant="h5" component="div">
//   //     //               {"Biryani"}
//   //     //             </Typography>
//   //     //             <Typography variant="body2" color="text.secondary">
//   //     //               100
//   //     //             </Typography>
//   //     //             <Box display="flex" flexDirection="row" alignItems="center">
//   //     //               <IconButton
//   //     //                 color="primary"
//   //     //                 onClick={handleDecrease}
//   //     //                 disabled={quantity <= 1}
//   //     //               >
//   //     //                 <RemoveCircleOutlineIcon />
//   //     //               </IconButton>
//   //     //               <Typography variant="body1" sx={{ mx: 2 }}>
//   //     //                 {quantity}
//   //     //               </Typography>
//   //     //               <IconButton color="primary" onClick={handleIncrease}>
//   //     //                 <AddCircleOutlineIcon />
//   //     //               </IconButton>
//   //     //             </Box>
//   //     //           </CardContent>
//   //     //         </CardActionArea>
//   //     //       </Card>
//   //     //     </Grid>
//   //     //     <Grid item xs={6}>
//   //     //       2
//   //     //     </Grid>
//   //     //     <Grid item xs={6}>
//   //     //       3
//   //     //     </Grid>
//   //     //     <Grid item xs={6}>
//   //     //       4
//   //     //     </Grid>
//   //     //   </Grid>
//   //     // </Box>
//   //     <Box sx={{ width: "100%" }}>
//   //       <Grid
//   //         container
//   //         rowSpacing={1}
//   //         mt={5}
//   //         columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//   //       >
//   //         <Grid item xs={6}>
//   //           <Card sx={{ width: 300, height: 400 }}>
//   //             <CardActionArea>
//   //               <img
//   //                 src={"../cat1.png"}
//   //                 alt={"item"}
//   //                 loading="lazy"
//   //                 width="100%"
//   //                 style={{ objectFit: "cover", height: 250 }}
//   //               />
//   //               <CardContent>
//   //                 <Typography gutterBottom variant="h5" component="div">
//   //                   Biryani
//   //                 </Typography>
//   //                 <Typography variant="body1" color="text.primary" sx={{ mb: 1 }}>
//   //                   $100
//   //                 </Typography>
//   //                 <Box
//   //                   display="flex"
//   //                   flexDirection="row"
//   //                   alignItems="center"
//   //                   mb={2}
//   //                 >
//   //                   <IconButton
//   //                     color="primary"
//   //                     onClick={handleDecrease}
//   //                     disabled={quantity <= 1}
//   //                   >
//   //                     <RemoveCircleOutlineIcon />
//   //                   </IconButton>
//   //                   <Typography variant="body1" sx={{ mx: 2 }}>
//   //                     {quantity}
//   //                   </Typography>
//   //                   <IconButton color="primary" onClick={handleIncrease}>
//   //                     <AddCircleOutlineIcon />
//   //                   </IconButton>
//   //                   <Button
//   //                     variant="contained"
//   //                     color="primary"
//   //                     sx={{ ml: 2 }}
//   //                     startIcon={<AddShoppingCartIcon />}
//   //                     onClick={handleAddToCart}
//   //                   >
//   //                     Add
//   //                   </Button>
//   //                 </Box>
//   //               </CardContent>
//   //             </CardActionArea>
//   //           </Card>
//   //         </Grid>
//   //         <Grid item xs={6}>
//   //           <Card sx={{ width: 300, height: 400 }}>
//   //             <CardActionArea>
//   //               <img
//   //                 src={"../cat1.png"}
//   //                 alt={"item"}
//   //                 loading="lazy"
//   //                 width="100%"
//   //                 style={{ objectFit: "cover", height: 250 }}
//   //               />
//   //               <CardContent>
//   //                 <Typography gutterBottom variant="h5" component="div">
//   //                   Biryani
//   //                 </Typography>
//   //                 <Typography variant="body1" color="text.primary" sx={{ mb: 1 }}>
//   //                   $100
//   //                 </Typography>
//   //                 <Box
//   //                   display="flex"
//   //                   flexDirection="row"
//   //                   alignItems="center"
//   //                   mb={2}
//   //                 >
//   //                   <IconButton
//   //                     color="primary"
//   //                     onClick={handleDecrease}
//   //                     disabled={quantity <= 1}
//   //                   >
//   //                     <RemoveCircleOutlineIcon />
//   //                   </IconButton>
//   //                   <Typography variant="body1" sx={{ mx: 2 }}>
//   //                     {quantity}
//   //                   </Typography>
//   //                   <IconButton color="primary" onClick={handleIncrease}>
//   //                     <AddCircleOutlineIcon />
//   //                   </IconButton>
//   //                   <Button
//   //                     variant="contained"
//   //                     color="primary"
//   //                     sx={{ ml: 2 }}
//   //                     startIcon={<AddShoppingCartIcon />}
//   //                     onClick={handleAddToCart}
//   //                   >
//   //                     Add
//   //                   </Button>
//   //                 </Box>
//   //               </CardContent>
//   //             </CardActionArea>
//   //           </Card>
//   //         </Grid>
//   //         {/* Add more grid items as needed */}
//   //       </Grid>
//   //     </Box>
//   //   );

//   return (
//     <Box sx={{ flexGrow: 1, mt: 5 }} p={2}>
//       <Grid container spacing={2}>
//         {items.map((item) => (
//           <Grid item xs={12} sm={6} md={3} key={item.id}>
//             <Card sx={{ width: "100%", height: 400 }}>
//               <CardActionArea>
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   //   loading="lazy"
//                   width="100%"
//                   style={{ objectFit: "cover", height: 250 }}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {item.name}
//                   </Typography>
//                   <Typography
//                     variant="body1"
//                     color="text.primary"
//                     sx={{ mb: 1 }}
//                   >
//                     {item.price}
//                   </Typography>
//                   <Box
//                     display="flex"
//                     flexDirection="row"
//                     alignItems="center"
//                     mb={2}
//                   >
//                     <IconButton
//                       color="primary"
//                       onClick={handleDecrease}
//                       disabled={false} // Replace with actual condition
//                     >
//                       <RemoveCircleOutlineIcon />
//                     </IconButton>
//                     <Typography variant="body1" sx={{ mx: 2 }}>
//                       {quantity}
//                     </Typography>
//                     <IconButton color="primary" onClick={handleIncrease}>
//                       <AddCircleOutlineIcon />
//                     </IconButton>
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       sx={{ ml: 2 }}
//                       startIcon={<AddShoppingCartIcon />}
//                       onClick={() => handleAddToCart(item)}
//                     >
//                       Add
//                     </Button>
//                   </Box>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Home;

"use client";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "@/app/context/CartContext";
import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import Menu from "../Menu/Menu";

const Home = ({ items }) => {
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1; // Default to 1 if no quantity set
    addToCart(item, quantity);
    // setQuantities((prevQuantities) => ({ ...prevQuantities, [item.id]: 1 })); // Reset quantity after adding
  };

  const handleDecrease = (itemId) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[itemId] || 1;
      if (currentQuantity > 1) {
        return { ...prevQuantities, [itemId]: currentQuantity - 1 };
      }
      return prevQuantities;
    });
  };

  const handleIncrease = (itemId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 1) + 1,
    }));
  };

  const images1 = [
    <img src={"./banner.png"} width={1400} height={380} role="presentation" />,
    <img src={"./banner1.png"} width={1400} height={380} role="presentation" />,
    <img src={"./banner2.png"} width={1400} height={380} role="presentation" />,
  ];

  return (
    <Box p={2}>
      <AliceCarousel items={images1} autoPlay disableButtonsControls />
      {/* <Box sx={{ flexGrow: 1, mt: 5 }} p={2}>
        <Grid container spacing={2}>
          {menu.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card sx={{ width: "100%", height: 400 }}>
                <CardActionArea>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="100%"
                    style={{ objectFit: "cover", height: 250 }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{ mb: 1 }}
                    >
                      {`$ ${item.price}`}
                    </Typography>
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      mb={2}
                    >
                      <IconButton
                        color="primary"
                        onClick={() => handleDecrease(item.id)}
                        disabled={(quantities[item.id] || 1) <= 1}
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                      <Typography variant="body1" sx={{ mx: 2 }}>
                        {quantities[item.id] || 1}
                      </Typography>
                      <IconButton
                        color="primary"
                        onClick={() => handleIncrease(item.id)}
                      >
                        <AddCircleOutlineIcon />
                      </IconButton>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ ml: 2 }}
                        startIcon={<AddShoppingCartIcon />}
                        onClick={() => handleAddToCart(item)}
                      >
                        Add
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box> */}
      <Menu items={items} />
    </Box>
  );
};

export default Home;
