import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, TextInput, Button, Text, StyleSheet } from 'react-native';
import io from 'socket.io-client';

const ChatPage = ({ route }) => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [room, setRoom] = useState('');
  const [socket, setSocket] = useState(null);
  const scrollViewRef = useRef();
  const { interestText } = route.params;

  useEffect(() => {
    const socket = io('http://10.10.136.50:4000');
    socket.emit('interests', interestText);
    setSocket(socket);

    socket.on('message', (message) => {
      setMessages(prevMessages => [...prevMessages, { text: message, sentBy: 1 }]);
      scrollToBottom();
    });

    socket.on('roomCode', (code) => {
      setMessages(prevMessages => [...prevMessages, { text: "Stranger joined", sentBy: 2 }]);
      setRoom(code);
    });
    socket.on('disconnected', () => {
      setMessages(prevMessages => [...prevMessages, { text: "Stranger disconnected", sentBy: 2 }]);
      console.log("diss");
      setRoom('');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (messageText.trim() !== '' && socket) {
      socket.emit('message', {messageText, room});
      setMessages([...messages, { text: messageText, sentBy: 0 }]);
      setMessageText('');
      scrollToBottom();
    }
  };

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.chatContainer}
        onContentSizeChange={() => scrollToBottom()}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.sentBy == 0 ? (styles.sentMessage)
              : message.sentBy == 1 ? (styles.receivedMessage)
              : (styles.systemMessage) ,
            ]}
          >
            <Text>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={messageText}
          onChangeText={setMessageText}
          placeholder="Type your message here"
          multiline
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  message: {
    backgroundColor: '#eee',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#b2ffc1',
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  systemMessage: {
    color: "rgba(0,0,0,0.3)",
    alignItems: 'center',
  },
});

export default ChatPage;
