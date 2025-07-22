import mongoose from 'mongoose';

const returnSchema = new mongoose.Schema(
  {
    receivedDate: { type: Date, required: true},
    amountReceived: { type: Number, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Return', returnSchema);
