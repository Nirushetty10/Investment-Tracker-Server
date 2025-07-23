import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true },
    passWord: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    loginCount: {type: Number, default: 0}
  },
  { timestamps: true }
);

export default mongoose.model('User', UserSchema);
