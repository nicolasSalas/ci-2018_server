'use strict'
const services = require('../token');

module.exports = {

    Insert: (propiety, data, res) => {
        propiety
            .sync()
            .then(() => propiety.create(data))
            .then(result => {
                res.status(200);
                res.json({success: true, token: services.createToken(data)})
            })
            .catch((error) => {
                res.status(500);
                res.json({error: error, stackError: error.stack});
            });
    },
    Update: (propiety, data, res) => {
        propiety
            .sync()
            .then(() => propiety.update({
                username: data.username
            }, {
                where: {
                    id: data.id
                }
            }))
            .then(result => {
                res.status(200);
                res.json({success: true})
            })
            .catch(error => {
                res.status(500);
                res.json({error: error, stackError: error.stack});
            })
        },
    Delete: (propiety, data, res) => {
        propiety
            .sync()
            .then(() => propiety.destroy({
                where: {
                    id: data.id
                }
            }))
            .then(result => {
                res.status(200);
                res.json({success: true})
            })
            .catch(error => {
                res.status(500);
                res.json({error: error, stackError: error.stack});
            })
        },
    Read: (propiety, data, res) => {
        propiety
            .sync()
            .then(() => propiety.findAll({
                where: {
                    id: data.id
                }
            }))
            .then(result => {
                res.status(200);
                res.json({success: true, data: result})
            })
            .catch(error => {
                res.status(500);
                res.json({error: error, stackError: error.stack});
            })
        }
}
