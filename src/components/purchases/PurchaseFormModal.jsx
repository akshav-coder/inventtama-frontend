import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";

const initialForm = {
  date: "",
  supplierName: "",
  tamarindType: "",
  quantity: "",
  pricePerKg: "",
  amountPaid: "",
  storageDecision: "",
  notes: "",
};

const PurchaseFormModal = ({ open, onClose, onSubmit, initialValues }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (initialValues) {
      setForm(initialValues);
    } else {
      setForm(initialForm);
    }
  }, [initialValues, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const totalAmount = form.quantity * form.pricePerKg;
    const remainingBalance = totalAmount - form.amountPaid;

    onSubmit({ ...form, totalAmount, remainingBalance });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{initialValues ? "Edit" : "Add"} Purchase</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Date"
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Supplier Name"
              name="supplierName"
              value={form.supplierName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              select
              fullWidth
              label="Tamarind Type"
              name="tamarindType"
              value={form.tamarindType}
              onChange={handleChange}
            >
              <MenuItem value="Whole">Whole</MenuItem>
              <MenuItem value="Raw Pod">Raw Pod</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Quantity (Kg)"
              name="quantity"
              type="number"
              value={form.quantity}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Price per Kg"
              name="pricePerKg"
              type="number"
              value={form.pricePerKg}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Amount Paid"
              name="amountPaid"
              type="number"
              value={form.amountPaid}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              select
              fullWidth
              label="Storage Decision"
              name="storageDecision"
              value={form.storageDecision}
              onChange={handleChange}
            >
              <MenuItem value="Cold">Cold</MenuItem>
              <MenuItem value="Direct Use">Direct Use</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              label="Notes"
              name="notes"
              value={form.notes}
              multiline
              rows={2}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          {initialValues ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PurchaseFormModal;
