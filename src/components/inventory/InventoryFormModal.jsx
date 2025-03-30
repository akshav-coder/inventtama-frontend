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
  item: "",
  openingStock: "",
  stockIn: "",
  stockOut: "",
  closingStock: "",
  location: "",
};

const InventoryFormModal = ({ open, onClose, onSubmit, initialValues }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (initialValues) setForm(initialValues);
    else setForm(initialForm);
  }, [initialValues, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        {initialValues ? "Edit" : "Add"} Inventory Entry
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12}>
            <TextField
              label="Date"
              name="date"
              type="date"
              fullWidth
              value={form.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Item"
              name="item"
              fullWidth
              value={form.item}
              onChange={handleChange}
            >
              <MenuItem value="Raw Tamarind">Raw Tamarind</MenuItem>
              <MenuItem value="Paste">Paste</MenuItem>
              <MenuItem value="Salt">Salt</MenuItem>
              <MenuItem value="Oil">Oil</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Opening Stock"
              name="openingStock"
              fullWidth
              value={form.openingStock}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Stock In"
              name="stockIn"
              fullWidth
              value={form.stockIn}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Stock Out"
              name="stockOut"
              fullWidth
              value={form.stockOut}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Closing Stock"
              name="closingStock"
              fullWidth
              value={form.closingStock}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Location"
              name="location"
              fullWidth
              value={form.location}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained">
          {initialValues ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InventoryFormModal;
