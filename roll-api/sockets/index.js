/**
 * roll-api/sockets/index.js
 *
 * The purpose of this file is to handle the main logic flow for all of the
 * socket connections the server is expectant to handle
 */

module.exports = function socketHandler(socket) {
  socket.on('connection', () => {
    console.log('someone has connected');
  });
}