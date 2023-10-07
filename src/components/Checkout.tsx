import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

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
type CheckoutProps = {
  totalAmount: number;
};
export default function Checkout({ totalAmount }: CheckoutProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Checkout</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ gap: "2 2" }}
          >
            <span>Payment Details</span>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span style={{ margin: "2" }}>Total Amount: $</span>
            <span style={{ margin: "2" }}>{totalAmount}</span>
          </Typography>
          <Typography>
            <p style={{ margin: "2" }}>Enter shipping details</p>
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              style={{ marginTop: "5px", width: "100%" }}
            />
            <TextField
              style={{ marginTop: "5px", width: "100%" }}
              id="filled-textarea"
              label="Address"
              multiline
              variant="filled"
            />
            <TextField
              style={{ marginTop: "5px", width: "100%" }}
              id="filled-textarea"
              label="Credit Card Number"
              multiline
              variant="filled"
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
