import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useCart } from "../context/CartContext";

export default function Item({ data }: any) {
  const { getQuantity, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const quantity = getQuantity(data.id);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="150px"
        image={data.imgUrl}
        alt={data.name}
      />
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{data.name}</span>
          <span>{"$ " + data.price}</span>
        </div>
      </CardContent>
      {quantity !== 0 ? (
        <CardActions>
          <IconButton
            aria-label="Decrease"
            onClick={() => decreaseQuantity(data.id)}
          >
            <RemoveIcon />
          </IconButton>
          <p>{quantity}</p>
          <IconButton
            aria-label="Increase"
            onClick={() => increaseQuantity(data.id)}
          >
            <AddIcon />
          </IconButton>
          <IconButton
            aria-label="Increase"
            onClick={() => {
              console.log("inc");
              removeFromCart(data.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      ) : (
        <CardActions disableSpacing>
          <Button variant="contained" onClick={() => increaseQuantity(data.id)}>
            Add to Cart
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
