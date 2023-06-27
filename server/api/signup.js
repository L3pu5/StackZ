import {User} from '../Schema/user.js';


const createNewUser = async (user, req) => {
    if(user === null){
        let newUser = new User();
        newUser.name = req.body.username;
        console.log(newUser);
        newUser.setPassword(req.body.password);
        //Create the new user
        await newUser.save();
        req.session.userid = user.name;
    }
};

export const NewUser = async (req, res) => {
    //Look for existing users
    const findExistingUser = User.findOne({name: req.body.username});
    const user = await findExistingUser.exec();
    createNewUser(user, req);
    res.status(201).send();
};