import { Button, Stack } from "@mui/material";
import { useCart } from "../context/CartContext";
import storeItems from "../data/items.json";
import CloseIcon from "@mui/icons-material/Close";

export type CartItemProps = {
  id: number;
  quantity: number;
};
const CartItem = ({ id }: CartItemProps) => {
  const { getQuantity, removeFromCart } = useCart();
  const item = storeItems.find((item) => item.id === id);

  if (item == null) return null;

  return (
    <Stack direction={"column"} spacing={2}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src={item.imgUrl}
          style={{
            height: "75px",
            width: "50%",
            objectFit: "contain",
            margin: 10,
          }}
        />
        <div
          style={{
            width: "30%",
            gap: "3",
          }}
        >
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <p>x{getQuantity(item.id)}</p>
          <p>${item.price * getQuantity(item.id)}</p>
          <Button
            variant="outlined"
            sx={{ height: 30, mt: 2 }}
            onClick={() => {
              removeFromCart(id);
            }}
          >
            <CloseIcon />
          </Button>
        </div>
      </div>
    </Stack>
  );
};

export default CartItem;
