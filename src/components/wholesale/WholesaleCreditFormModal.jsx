import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";

const initialForm = {
  buyerName: "",
  lastPurchaseDate: "",
  totalCreditGiven: "",
  totalAmountPaid: "",
  currentBalance: "",
  notes: "",
};

const WholesaleCreditFormModal = ({
  open,
  onClose,
  onSubmit,
  initialValues,
}) => {
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
      <DialogTitle>{initialValues ? "Edit" : "Add"} Credit Entry</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Buyer Name"
              name="buyerName"
              fullWidth
              value={form.buyerName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="date"
              label="Last Purchase"
              name="lastPurchaseDate"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={form.lastPurchaseDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Credit Given"
              name="totalCreditGiven"
              fullWidth
              value={form.totalCreditGiven}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Amount Paid"
              name="totalAmountPaid"
              fullWidth
              value={form.totalAmountPaid}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Balance"
              name="currentBalance"
              fullWidth
              value={form.currentBalance}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Notes"
              name="notes"
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

export default WholesaleCreditFormModal;
