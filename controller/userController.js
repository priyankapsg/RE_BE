import User from '../model/userSchema.js';

const Login = async (req, res) => {
    const data = req.body;
try {
    const result = await User.findOne({email:data?.email.toLowerCase()})
    if(result === null){
        res.send({
            statusCode: 400
        })
    } 
    else {
        const result = await User.findOne({
            email:data?.email.toLowerCase(),
            password:data?.password}
            )
            if(result === null){
                res.send({
                    statusCode: 201
                })  
            }
            else {
                res.send({
                    statusCode: 200,
                    user: result
                })  
            }
    }
} catch (error) {    
console.log(error);
}
}

const Register = async (req, res) => {
    const data = req.body;
 try {
    const result = await User.findOne({email:data?.email.toLowerCase()})
    if(result !== null){
        res.send({
            statusCode: 400
        })
    } else {
        await User.create(data)
        res.send({
            data: data,
            statusCode: 200
        })
    } 
 } catch (error) {
    console.log(error);
 }
}

export default {Login,Register};