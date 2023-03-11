import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation,
        } = req.body;

        const salt = bcrypt.compare();
        const passwordHash = bcrypt.hash(password, salt);

        const newUser = new User({
            ...req.body,
            password: passwordHash,
            impressions: Math.floor(Math.random() * 10000),
            viewedProfile: Math.floor(Math.random() * 10000),
        });

        const savedUser = await newUser.save();
        return res.status(201).json(savedUser);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};
