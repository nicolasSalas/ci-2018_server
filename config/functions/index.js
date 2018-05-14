'use strict'
const services = require('./token');

module.exports = {

    insertPrivateUser: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    insertQuestions: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });

    }, InsertLink: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    }, InsertPublicUser: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertAnswers: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    InsertCategory: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    }, InsertCategoryEnterprise: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    }, InsertPerson: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    }, InsertEnterprise: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    }, InsertQuestionAlternative: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    }, InsertQuestionnaire: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.create(data)
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    token: services.createToken(data)
                })
            })
            .catch((error) => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            });
    },
    update: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.update({
                    username: data.username
                }, {
                        where: {
                            id: data.id
                        }
                    })
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true
                })
            })
            .catch(error => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            })
    },
    delete: (propiety, data, res) => {
        propiety
            .sync()
            .then(
                () => propiety.destroy({
                    where: {
                        id: data.id
                    }
                })
            )
            .then(result => {
                res.status(200);
                res.json({
                    success: true
                })
            })
            .catch(error => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            })
    },
    Read: (propiety, res) => {
        propiety
            .sync()
            .then(() => propiety.findAll())
            .then(result => {
                res.status(200);
                res.json({
                    success: true,
                    data: result
                })
            })
            .catch(error => {
                res.status(500);
                res.json({
                    error: error,
                    stackError: error.stack
                });
            })
    }
}
