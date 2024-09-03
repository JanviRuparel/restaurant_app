"use client";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const CartButton = () => {
  const router = useRouter();
  const { cartItems } = useCart();

  const handleClick = () => {
    router.push("/cart");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      onClick={handleClick}
      p={2}
      sx={{ cursor: "pointer" }}
    >
      <Badge badgeContent={cartItems?.length} color="primary">
        <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
          Cart
        </Button>
      </Badge>
    </Box>
  );
};

export default CartButton;
