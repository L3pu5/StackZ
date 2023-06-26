import {User} from '../Schema/user.js';

export const GetUsers = async (req, res) => {
    try{
        const result = await User.findOne();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).send("Couldn't locate user");
    }
};