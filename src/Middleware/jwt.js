import jwt from "jsonwebtoken";

function verifyToken(request, response, next){
    const myKey = "EssaéaChaveDeCriptoGR@fi@!!"

    const authHeader = request.headers.authorization

    //Token não enviado
    if(!authHeader){
        return response.status(401).send({message: "Erro: Necessário realizar login para acessar a página."})
    }

    //Separação do token
    const parts = authHeader.split(' ')

    //Se token foi enviado no formato invalido
    if(parts.length !== 2){
        return response.status(401).send({message: "Erro: Token no formato inválido"})
    }

    //Separação do token
    const [format, token] = parts

    //Se format for diferente de bearer
    if(format !== "Bearer"){
        return response.status(401).send({message: "Erro: Token não contém 'Bearer'."})
    }

    //Verificação do token
    jwt.verify(token, myKey, (err,decoded)=> {
        if(err){
            return response.status(401).send({message: "Usuário não está logado!"})
        }

        request.idUserToken = decoded.id_user;

        return next()
    })
}

export {verifyToken}