const { ServiceAddUser,ServiceLoginUser } = require('../services/user.service')


const add = async (req, res) => {

    try{

    const {
        body
    } = req;

    const response = await ServiceAddUser(body);

    res.status(201).json({ message: "success", data: response });
    }
catch(err){
    res.status(400).json({message:err})
}

};


const login = async(req,res) =>{

    try{    
    const { username, password } = req.body;
    response = await ServiceLoginUser({ username: username, password: password });
    res.status(200).json({ message: "success", data: response });
    }catch(err){
        res.status(400).json(err)
    }

}

module.exports =
{
    add,
    login
};