import {User} from '../Schema/user.js';

const findSingleUser = async (req) => {
    return await User.findOne({name: req.body.username});
}

export const LoginAsUser = async (req, res) => {
    const user = await findSingleUser(req);
    if(user === null){
        res.status(404).json({message: 'Incorrect login details.'});
        return;
    }

    if (user.validPassword(req.body.password)) {
        req.session.userid=user.name;
        req.session.save();
        res.status(201).send(req.session.sessionID);
    }
    else {
        res.status(404).json({message: 'Incorrect login details.'});
    }
};