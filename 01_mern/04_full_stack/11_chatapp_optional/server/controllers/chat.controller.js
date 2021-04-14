const Chat = require('../models/chat.model');    


module.exports.createChat = (request, response) => {
    const { name, messages } = request.body;
    Chat.create({
        name,
        messages
    })
        .then(chat => response.json(char))
        .catch(err => response.json(err));
}

module.exports.getChat = (request, response) => {
    Chat.findOne({_id:request.params.id})
        .then(chat => response.json(chat))
        .catch(err => response.json(err))
}

module.exports.updateChat = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(update => response.json(update))
        .catch(err => response.json(err))
}

