import User from '../model/User.js';
import bcrypt from 'bcryptjs';
import { createResponse } from './../generateResponse.js';

export const createUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(req.body.passWord, salt)

    const newUser = new User({
      name: req.body.name,
      userName: req.body.userName,
      passWord: hashedPassword,
      isAdmin: req.body?.isAdmin,
    });

    await newUser.save();
    res.status(200).json(createResponse('success', 'User registered successfully'));
  } catch (error) {
    res.status(500).json(createResponse('error', 'Error while creating the user'));
  }
};

export const getAllUsers = async (req, res) => {
    try {
      let users = await User.find().select('_id name');
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(createResponse('error', 'error while fetching the tenants'));
    }
  };