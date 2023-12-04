import User from "../Models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  const UserId = req.params.id;
  const updateData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(UserId, updateData, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete({ _id: id });
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const searchUser = async (req, res) => {
  try {
    const searchTerm = req.query.item;

    if (!searchTerm) {
      return res.status(400).json({ message: "Search term is required" });
    }

    const filter = {
      $or: [
        { username: { $regex: new RegExp(searchTerm), $options: "i" } },
        { "name.firstName": { $regex: new RegExp(searchTerm), $options: "i" } },
        { "name.lastName": { $regex: new RegExp(searchTerm), $options: "i" } },
        { role: { $regex: new RegExp(searchTerm), $options: "i" } },
        {
          "address.country": { $regex: new RegExp(searchTerm), $options: "i" },
        },
        { "contact.email": { $regex: new RegExp(searchTerm), $options: "i" } },
      ],
    };

    const users = await User.find(filter);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
