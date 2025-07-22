import mongoose from 'mongoose';

const investmentSchema = new mongoose.Schema(
  {
    investmentDate: { type: Date, required: true},
    amountInvested: { type: Number, required: true },
    monthlyReturn: { type: Number, required: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Investment', investmentSchema);
