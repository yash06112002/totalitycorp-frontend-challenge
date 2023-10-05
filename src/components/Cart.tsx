import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Cart() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { cartItems } = useCart();

  return (
    <div>
      <Button onClick={handleOpen} sx={{ color: "white" }}>
        <ShoppingCartIcon sx={{ marginRight: 2 }} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: "2",
              width: "70%",
              marginLeft: "20%",
            }}
          >
            <p>Total</p>
            <p>
              {cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((item) => item.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)}
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
