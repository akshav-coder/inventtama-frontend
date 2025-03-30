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
  tamarindType: "",
  quantityIn: "",
  quantityOut: "",
  reasonForMovement: "",
  storageLocation: "",
  remainingStock: "",
  notes: "",
};

const StorageFormModal = ({ open, onClose, onSubmit, initialValues }) => {
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
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>{initialValues ? "Edit" : "Add"} Storage Entry</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              type="date"
              name="date"
              label="Date"
              value={form.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              select
              fullWidth
              name="tamarindType"
              label="Tamarind Type"
              value={form.tamarindType}
              onChange={handleChange}
            >
              <MenuItem value="Whole">Whole</MenuItem>
              <MenuItem value="Raw Pod">Raw Pod</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              fullWidth
              name="quantityIn"
              label="Quantity In (Kg)"
              value={form.quantityIn}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              fullWidth
              name="quantityOut"
              label="Quantity Out (Kg)"
              value={form.quantityOut}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              select
              fullWidth
              name="reasonForMovement"
              label="Reason"
              value={form.reasonForMovement}
              onChange={handleChange}
            >
              <MenuItem value="To Unit 1">To Unit 1</MenuItem>
              <MenuItem value="To Unit 2">To Unit 2</MenuItem>
              <MenuItem value="Store">Store</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              name="storageLocation"
              label="Storage Location"
              value={form.storageLocation}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              name="remainingStock"
              label="Remaining Stock"
              value={form.remainingStock}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="notes"
              label="Notes"
              value={form.notes}
              onChange={handleChange}
              multiline
              rows={2}
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

export default StorageFormModal;
