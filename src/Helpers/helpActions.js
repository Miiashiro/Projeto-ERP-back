import jwt from "jsonwebtoken";

//Gerar senha
function generatePassword(){
    const key = (Math.random() + 1).toString(36).substring(2).substring(0,10);
    
    const newPassword = key.replace('n', '@').replace('w', '!').replace('i','#').replace('t','$').
    replace('a','*').replace('r','%')

    return newPassword
}

//Gerar token
function generateToken(id_user, name_user, email_user){
    const myKey = "EssaéaChaveDeCriptoGR@fi@!!"

    const token = jwt.sign(
        {id_user, name_user, email_user},
        myKey,
        {expiresIn: '1d'}
    )

    return token
}

export {generateToken, generatePassword}