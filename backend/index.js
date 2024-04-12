const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

var i = 0;
var chatUsers = [];
var videoUsers = [];

function haveCommonElement(arr1, arr2) {
  // Convert one of the arrays to a Set for faster lookup
  const set = new Set(arr1);
  
  // Iterate through the second array
  for (let i = 0; i < arr2.length; i++) {
      // Check if the current element exists in the set
      if (set.has(arr2[i])) {
          return true; // Common element found
      }
  }
  
  return false; // No common elements found
}

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Event handler for new connections
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('interests', (interestsText) => {
    let interests = interestsText.split(' ');
    let temp_data = {
      sock: socket,
      interests: interests
    }

    chatUsers.push(temp_data);

    // var notFound = 0;
    // while(chatUsers.length >= 2){
    //   if(notFound == 1){
    //     io.to(chatUsers[1].sock.id).emit('roomCode', chatUsers[0].sock.id);
    //     io.to(chatUsers[0].sock.id).emit('roomCode', chatUsers[1].sock.id);
    //     chatUsers[0].sock.join(chatUsers[1].sock.id + '--room--');
    //     chatUsers[1].sock.join(chatUsers[0].sock.id + '--room--');
    //     chatUsers.splice(0, 2);
    //   }
    //   try {
    //     chatUsers.forEach( function(element) {
    //         notFound = 1;
    //         if (haveCommonElement(element.interests, chatUsers[0].interests)) {
    //           io.to(element.sock.id).emit('roomCode', chatUsers[0].sock.id);
    //           io.to(chatUsers[0].sock.id).emit('roomCode', element.sock.id);
    //           chatUsers[0].sock.join(element.sock.id + '--room--');
    //           element.sock.join(chatUsers[0].sock.id + '--room--');
    //           chatUsers.splice(0, 2);
    //           throw new Error("Stopping the loop");
    //         }
    //     });
    // } catch (error) {
    //     notFound = 0;
    //     console.log(error.message);
    // }
    // }

    while(chatUsers.length >= 2){
      io.to(chatUsers[1].sock.id).emit('roomCode', chatUsers[0].sock.id);
      io.to(chatUsers[0].sock.id).emit('roomCode', chatUsers[1].sock.id);
      chatUsers[0].sock.join(chatUsers[1].sock.id + '--room--');
      chatUsers[1].sock.join(chatUsers[0].sock.id + '--room--');
      chatUsers.splice(0, 2);
    }
    console.log(chatUsers);
  });

  socket.on('message', (messageData) => {
    console.log('Received message:', messageData);
    io.to(messageData.room).emit('message', messageData.messageText);
  });

  //For Video Chat
  socket.on('interests-vid', (interestsText) => {
    let interests = interestsText.split(' ');
    let temp_data = {
      sock: socket,
      interests: interests
    }

    videoUsers.push(temp_data);

    // var notFound = 0;
    // while(videoUsers.length >= 2){
    //   if(notFound == 1){
    //     io.to(videoUsers[1].sock.id).emit('roomCode', videoUsers[0].sock.id);
    //     io.to(videoUsers[0].sock.id).emit('roomCode', videoUsers[1].sock.id);
    //     videoUsers[0].sock.join(videoUsers[1].sock.id + '--room--');
    //     videoUsers[1].sock.join(videoUsers[0].sock.id + '--room--');
    //     videoUsers.splice(0, 2);
    //   }
    //   try {
    //     videoUsers.forEach( function(element) {
    //         notFound = 1;
    //         if (haveCommonElement(element.interests, videoUsers[0].interests)) {
    //           io.to(element.sock.id).emit('roomCode', videoUsers[0].sock.id);
    //           io.to(videoUsers[0].sock.id).emit('roomCode', element.sock.id);
    //           videoUsers[0].sock.join(element.sock.id + '--room--');
    //           element.sock.join(videoUsers[0].sock.id + '--room--');
    //           videoUsers.splice(0, 2);
    //           throw new Error("Stopping the loop");
    //         }
    //     });
    // } catch (error) {
    //     notFound = 0;
    //     console.log(error.message);
    // }
    // }

    while(videoUsers.length >= 2){
      io.to(videoUsers[1].sock.id).emit('roomCode', videoUsers[0].sock.id);
      io.to(videoUsers[0].sock.id).emit('roomCode', videoUsers[1].sock.id);
      videoUsers[0].sock.join(videoUsers[1].sock.id + '--room--');
      videoUsers[1].sock.join(videoUsers[0].sock.id + '--room--');
      videoUsers.splice(0, 2);
    }
    console.log(videoUsers);
  });

  socket.on('message-vid', (messageData) => {
    console.log('Received message:', messageData);
    io.to(messageData.room).emit('message', messageData.messageText);
  });

  socket.on('disconnect', () => {
    chatUsers = chatUsers.filter(item => item.sock !== socket);
    videoUsers = videoUsers.filter(item => item.sock !== socket);
    io.to(socket.id + '--room--').emit('disconnected');
    console.log('Client disconnected');
  });
});

// Start the server
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});