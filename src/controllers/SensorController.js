const knex = require('../database');

module.exports = {

    async index(req, res){

        const results = await knex('sensores');
        
        return res.json(results);
    },

    



}