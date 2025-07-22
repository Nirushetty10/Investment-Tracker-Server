import Investments from '../model/Investments.js';
import { createResponse } from './../generateResponse.js';

export const createInvestment = async (req, res) => {
  try {

    const newInvestment = new Investments({
        investmentDate: req.body.investmentDate,
        amountInvested: req.body.amountInvested,
        monthlyReturn: req.body.monthlyReturn,
        userID: req.body.userID,
    });
    await newInvestment.save();
    res.status(200).json(createResponse('success', 'Investment created successfully'));
  } catch (error) {
    console.log(error)
    res.status(500).json(createResponse('error', 'Error while creating the investment'));
  }
};

export const updateInvestment = async (req, res) => {
    const id = req.params.id;
    try {
      const updatedInvestments = await Investments.findByIdAndUpdate(id, { $set: req.body }, { new: true });
      if (!updatedInvestments) {
        return res.status(404).json({ message: 'Investment not found' });
      }
      res.status(200).json(createResponse('success', 'Investment Updated successfully!'));
    } catch (err) {
        console.log(err)
      res.status(500).json({ message: 'An error occurred while updating the Investment' });
    }
  };

export const getInvestments = async (req, res) => {
  const userID = req.params.id;
  try {
    const investments = await Investments.find({
      userID
    });

    res.status(200).json(investments);
  } catch (err) {
    console.error('Error fetching investments:', err);
    res.status(500).json({ message: 'Error fetching investments' });
  }
};

export const deleteInvestment = async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Investments.findByIdAndDelete(id);
      if (!result) {
        return res.status(404).json({ message: 'Investment not found' });
      }
      res.status(200).json(createResponse('success', 'Investment deleted successfully'));
    } catch (err) {
      res.status(500).json({ message: 'An error occurred while deleting the Investment' });
    }
  };
