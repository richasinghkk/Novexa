const User = require("../models/User");

// ================= Get User Profile =================
const getProfile = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email }).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= Update Profile =================
const updateProfile = async (req, res) => {
  try {
    const { email } = req.params;

    const { fullName } = req.body;

    const user = await User.findOneAndUpdate(
      { email },
      { fullName },
      {
        new: true,
      }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully 🎉",
      user,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};