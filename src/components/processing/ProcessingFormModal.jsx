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
import { useEffect, useState } from "react";

const initialForm = {
  date: "",
  unitName: "",
  tamarindTypeUsed: "",
  quantityUsed: "",
  saltQty: "",
  oilQty: "",
  pasteProduced: "",
  seedsCollected: "",
  operatorName: "",
  notes: "",
};

const ProcessingFormModal = ({ open, onClose, onSubmit, initialValues }) => {
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
      <DialogTitle>{initialValues ? "Edit" : "Add"} Processing Log</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              type="date"
              name="date"
              label="Date"
              fullWidth
              value={form.date}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              select
              name="unitName"
              label="Unit"
              fullWidth
              value={form.unitName}
              onChange={handleChange}
            >
              <MenuItem value="Unit 1">Unit 1</MenuItem>
              <MenuItem value="Unit 2">Unit 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              select
              name="tamarindTypeUsed"
              label="Tamarind Type"
              fullWidth
              value={form.tamarindTypeUsed}
              onChange={handleChange}
            >
              <MenuItem value="Whole">Whole</MenuItem>
              <MenuItem value="Raw Pod">Raw Pod</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              name="quantityUsed"
              label="Used (Kg)"
              fullWidth
              value={form.quantityUsed}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              name="saltQty"
              label="Salt Qty"
              fullWidth
              value={form.saltQty}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              name="oilQty"
              label="Oil Qty"
              fullWidth
              value={form.oilQty}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              name="pasteProduced"
              label="Paste (Kg)"
              fullWidth
              value={form.pasteProduced}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <TextField
              name="seedsCollected"
              label="Seeds (Kg)"
              fullWidth
              value={form.seedsCollected}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="operatorName"
              label="Operator"
              fullWidth
              value={form.operatorName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="notes"
              label="Notes"
              fullWidth
              value={form.notes}
              onChange={handleChange}
              multiline
              rows={2}
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

export default ProcessingFormModal;
