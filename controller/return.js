import Returns from '../model/Returns.js';
import { createResponse } from './../generateResponse.js';

export const createReturn = async (req, res) => {
  try {

    const newReturn = new Returns({
        receivedDate: req.body.receivedDate,
        amountReceived: req.body.amountReceived,
        userID: req.body.userID,
    });
    await newReturn.save();
    res.status(200).json(createResponse('success', 'Return created successfully'));
  } catch (error) {
    console.log(error)
    res.status(500).json(createResponse('error', 'Error while creating the Return'));
  }
};

export const updateReturn = async (req, res) => {
    const id = req.params.id;
    try {
      const updatedReturn = await Returns.findByIdAndUpdate(id, { $set: req.body }, { new: true });
      if (!updatedReturn) {
        return res.status(404).json({ message: 'Return not found' });
      }
      res.status(200).json(createResponse('success', 'Return Updated successfully!'));
    } catch (err) {
        console.log(err)
      res.status(500).json({ message: 'An error occurred while updating the Return' });
    }
  };

export const getReturns = async (req, res) => {
  const userID = req.params.id;
  try {
    const returns = await Returns.find({
      userID
    });

    res.status(200).json(returns);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching returns' });
  }
};

export const deleteReturn = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Returns.findByIdAndDelete(id);
      if (!result) {
        return res.status(404).json({ message: 'Return not found' });
      }
      res.status(200).json(createResponse('success', 'Return deleted successfully'));
    } catch (err) {
      res.status(500).json({ message: 'An error occurred while deleting the Return' });
    }
  };
