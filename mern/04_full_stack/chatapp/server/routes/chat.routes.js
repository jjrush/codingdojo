const ChatController = require('../controllers/chat.controller');
module.exports = function(app){
    app.get('/api/chat/:id', ChatController.getChat);
    app.post('/api/chat', ChatController.createChat);     
    app.put('/api/chat/:id', ChatController.updateChat);
}
