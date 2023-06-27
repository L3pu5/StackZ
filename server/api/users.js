import {User} from '../Schema/user.js';

export const GetUsers = async (req, res) => {
    var session = req.session;
    console.log(req.sessionID); 
    console.log(session);
    if(session.userid){
        res.status(202).json({user: req.session.userid});
    }
    else {
        res.status(404).json({message: "No session"});
    }
};