'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../');

module.exports = {

    createToken: (data) => {
        const payload = {
            sub: data.token,
            iat: moment().unix(),
            exp: moment().add(3,'months').unix(),
        }
        return jwt.encode(payload, config.SECRET_TOKEN_SERVER)
    },
    decodeToken: (token) => {
        try {
            let auth = jwt.decode(token, config.SECRET_TOKEN_CLIENT)

            console.log(auth);

            if (auth.sub === 'VALIDO') {
                return false;
            }

        } catch (e) {
            console.log(e.toString())

            switch (e.toString()) {
                case 'Error: Token expired':
                    return e.toString();
                    break;
                case 'Error: Not enough or too many segments':
                    return e.toString();
                    break;
                case 'Error: Signature verification failed':
                    return e.toString();
                    break;
                default:
                    return e.toString();
                    break;
            }
        }
    }
}