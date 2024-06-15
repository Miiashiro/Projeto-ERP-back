import jwt from "jsonwebtoken";

function generatedToken(id_user, name_user, email_user){
    const myKey = "EssaéaChaveDeCriptoGR@fi@!!"

    const token = jwt.sign(
        {id_user, name_user, email_user},
        myKey,
        {expiresIn: 60 * 60}
    )

    return token
}

export {generatedToken}