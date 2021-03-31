const mongoose = require('mongoose');
const ChatSchema = new mongoose.Schema({
    messages: { type: [] },
    name: { type: String },
}, { timestamps: true });
module.exports = mongoose.model('Chat', ChatSchema);
