export const LogoutAsUser = async (req, res) => {
    req.session.destroy();
    console.log("Logging out");
    res.status(201).send();
};