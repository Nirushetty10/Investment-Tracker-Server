import Investment from '../model/Investments.js';
import Return from '../model/Returns.js';
import mongoose from 'mongoose';

export const investmentAnalytics = async (req, res) => {
  try {
    const userID  = req.params.id;

    // Fetch all investments by user
    const investmentData = await Investment.aggregate([
      {
        $match: {
          userID: new mongoose.Types.ObjectId(userID),
        },
      },
      {
        $group: {
          _id: '$userID',
          totalInvestment: { $sum: '$amountInvested' },
          monthlyReturn: { $sum: '$monthlyReturn' },
        },
      },
    ]);

    const returnData = await Return.aggregate([
      {
        $match: {
          userID: new mongoose.Types.ObjectId(userID),
        },
      },
      {
        $group: {
          _id: '$userID',
          totalReturn: { $sum: '$amountReceived' },
        },
      },
    ]);


    const response = {
      totalInvestment: investmentData[0]?.totalInvestment || 0,
      monthlyReturn: investmentData[0]?.monthlyReturn || 0,
      totalReturn: returnData[0]?.totalReturn || 0,
    };

    res.status(200).json([response]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error', error: err });
  }
};
