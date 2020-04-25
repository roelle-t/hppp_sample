// Controller handler to handle functionality in room page

const roomGenerator = require('../util/roomIdGenerator.js');
const User = require('../models/users');


async function addUser(request, response){
    const user = new User({
      username: request.body.username,
      password: request.body.password

    })
    try{
      const newUser = await user.save()
      response.status(201).json(newuSER)
      //response.redirect('/'+ request.params.roomName)
    }
    catch(err){
      console.log(err);
      response.status(400).json({message: err.message})
    }

  }

// Example for handle a get request at '/:roomName' endpoint.
function getRoom(request, response){
    response.render('room', {title: 'chatroom', roomName: request.params.roomName, newRoomId: roomGenerator.roomIdGenerator()});
}

module.exports = {
    getRoom,
    addUser
};