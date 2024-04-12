import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import io from 'socket.io-client';

const VideoChatWithChat = ({ route }) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('');
  const scrollViewRef = useRef();
  const [socket, setSocket] = useState(null);
  const { interestText } = route.params;

  useEffect(() => {
    const socket = io('http://10.10.136.50:4000');
    socket.emit('interests-vid', interestText);
    setSocket(socket);

    socket.on('message', (message) => {
      setChatMessages(prevMessages => [...prevMessages, { text: message, sentBy: 1 }]);
      scrollToBottom();
    });

    socket.on('roomCode', (code) => {
      setChatMessages(prevMessages => [...prevMessages, { text: "Stranger joined", sentBy: 2 }]);
      setRoom(code);
    });

    socket.on('disconnected', () => {
      setChatMessages(prevMessages => [...prevMessages, { text: "Stranger disconnected", sentBy: 2 }]);
      console.log("diss");
      setRoom('');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim() !== '' && socket) {
      socket.emit('message-vid', {message, room});
      setChatMessages([...chatMessages, { text: message, sentBy: 0 }]);
      setMessage('');
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={styles.container}>
      {/* Upper half: Video stream */}
      <View style={styles.upperHalf}>
        {/* Large video stream */}
        <View style={styles.videoContainer}>
          {/* Render remote video stream */}
          {/* If remoteStream is null, show a placeholder or loading indicator */}
          {/* If remoteStream is available, display it here */}
          <View style={styles.remoteVideo}>
            {/* You can use RTCView or any other component to display video stream */}
            {/* For demonstration purpose, using View with background color */}
            <View style={{ flex: 1, backgroundColor: 'black' }}>
              <Text style={styles.videoText}>Remote Video Stream</Text>
            </View>
          </View>

          {/* Mini video stream */}
          <View style={styles.miniVideo}>
            {/* You can render your mini video stream here */}
            {/* For demonstration purpose, using View with background color */}
            <View style={{ flex: 1, backgroundColor: 'black' }}>
              <Text style={styles.videoText}>Mini Video Stream</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Lower half: Chat */}
      <View style={styles.lowerHalf}>
        {/* Chat messages */}
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.chatContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Render chat messages */}
          {chatMessages.map((chat, index) => (
            <View
              key={index}
              style={[
                styles.chatMessage,
                chat.sentBy == 0 ? (styles.sentMessage)
              : chat.sentBy == 1 ? (styles.receivedMessage)
              : (styles.systemMessage) ,
              ]}
            >
              <Text style={styles.messageText}>{chat.text}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Input area for typing chat message */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            value={message}
            onChangeText={setMessage}
          />
          <Button title="Send" onPress={handleSendMessage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperHalf: {
    flex: 1,
  },
  lowerHalf: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  videoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  remoteVideo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniVideo: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  videoText: {
    color: 'white',
  },
  chatContainer: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  chatMessage: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
    maxWidth: '80%',
    borderRadius: 8,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#b2ffc1',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
  },
  messageText: {
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  systemMessage: {
    color: "rgba(0,0,0,0.3)",
    alignItems: 'center',
  },
});

export default VideoChatWithChat;
