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
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Menu = ({ items }) => {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    addToCart(item, quantity);
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

  const handleCardClick = (item) => {
    router.push(`/menu/${item?.id}`);
  };
  return (
    <Box sx={{ flexGrow: 1, mt: 5 }} p={2}>
      <Grid container spacing={2}>
        {items.map((item) => (
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
                      sx={{ ml: 1 }}
                      startIcon={<AddShoppingCartIcon />}
                      onClick={() => handleAddToCart(item)}
                    >
                      Add
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ ml: 1 }}
                      onClick={() => handleCardClick(item)}
                    >
                      View
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;
