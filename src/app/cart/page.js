"use client";

import { useCart } from "@/app/context/CartContext";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const CartPage = () => {
  const { cartItems } = useCart();
  console.log(cartItems, "cartitem");

  return (
    <Box p={5}>
      <Card>
        <CardHeader title="Cart List" />
        <CardContent>
          <List sx={{ width: "100%" }}>
            {cartItems?.map((data) => {
              return (
                <Box>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={data?.image} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={data?.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: "text.primary", display: "inline" }}
                          >
                            Quantity:
                          </Typography>
                          {data?.quantity}
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{
                              color: "text.primary",
                              display: "inline",
                              ml: 2,
                            }}
                          >
                            Total Price:
                          </Typography>
                          {parseInt(data?.quantity) * parseInt(data?.price)}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </Box>
              );
            })}
            {cartItems.length === 0 && (
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                You dont have anything in cart
              </Typography>
            )}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CartPage;
