import User from '../model/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const loginUser = async (req, res, next) => {
  try {
    const { userName, passWord } = req.body;
    const user = await User.findOne({ userName });

    if (!user) return res.status(500).json('user not found!. Please contact our support team');

    const isPasswordCorrect = await bcrypt.compare(passWord, user.passWord);
    if (isPasswordCorrect) {
       user.loginCount = (user.loginCount || 0) + 1;
       await user.save();
        const token = jwt.sign(
          { id: user._id, userName: user.userName, isAdmin: user.isAdmin },
          process.env.JWT_SECRETE
        );
        const { passWord, ...other } = user._doc;
        res
          .status(200)
          // .cookie('access_token', token, { httpOnly: true, secure: true, sameSite: 'None' })
          .cookie("access_token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None", 
            maxAge: 1000 * 60 * 60 * 24,
          })
          .json({ ...other });
    } else {
      res.status(500).json('Wrong username / password!');
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};

export const logout = async (req, res) => {
  res.cookie('access_token', '', {
    expires: new Date(0),
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',  // Secure flag for HTTPS
    // sameSite: 'None',         // Needed for cross-origin requests (if applicable)
  });
  res.status(200).json({ success: true, message: 'User logged out successfully' });
};
