'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../');

module.exports = {

    createToken: (data) => {
        const payload = {
            sub: data.token,
            iat: moment().unix(),
            exp: moment().add(5, 'minutes').unix(),
        }
        return jwt.encode(payload, config.SECRET_TOKEN)
    },

    decodeToken: (token) => {
        const decoded = new Promise((resolve, reject) => {
            try {
                const payload = wt.decode(token, config.SECRET_TOKEN)
                if (payload.exp <= moment().unix()) {
                    reject({
                        status: 401,
                        message: 'El token ha expirado'
                    })
                }

                resolve(payload.sub)

            } catch (error) {
                reject({
                    status: 500,
                    message: 'Invalid Token'
                })
            }
        })

        return decoded;
    }

}