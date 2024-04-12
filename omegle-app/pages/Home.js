import React, {useState} from 'react';
import { View, ScrollView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }){
  const [interestText, setInterestText] = useState('');
  
  const handleChatButtonPress = () => {
    // Navigate to the chat page and pass the interest text as a parameter
    navigation.navigate('Chat', { interestText });
  };
  const handleVideoButtonPress = () => {
    // Navigate to the chat page and pass the interest text as a parameter
    navigation.navigate('Video', { interestText });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.instructionsContainer}>
        {/* Replace the text below with your instructions */}
        <Text style={styles.instructionsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
          Integer nec odio. Praesent libero. Sed cursus ante dapibus 
          diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
          augue semper porta. Mauris massa. Vestibulum lacinia arcu 
          eget nulla. Class aptent taciti sociosqu ad litora torquent 
          per conubia nostra, per inceptos himenaeos. Curabitur sodales 
          ligula in libero. Sed dignissim lacinia nunc. Curabitur 
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem 
          at dolor. Maecenas mattis. Sed convallis tristique sem. 
          Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, 
          iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis 
          quis ligula lacinia aliquet. Mauris ipsum. \Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer nec odio. Praesent libero. Sed cursus ante dapibus 
          diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
          augue semper porta. Mauris massa. Vestibulum lacinia arcu 
          eget nulla. Class aptent taciti sociosqu ad litora torquent 
          per conubia nostra, per inceptos himenaeos. Curabitur sodales 
          ligula in libero. Sed dignissim lacinia nunc. Curabitur 
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem 
          at dolor. Maecenas mattis. Sed convallis tristique sem. 
          Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, 
          iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis 
          quis ligula lacinia aliquet. Mauris ipsum. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer nec odio. Praesent libero. Sed cursus ante dapibus 
          diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
          augue semper porta. Mauris massa. Vestibulum lacinia arcu 
          eget nulla. Class aptent taciti sociosqu ad litora torquent 
          per conubia nostra, per inceptos himenaeos. Curabitur sodales 
          ligula in libero. Sed dignissim lacinia nunc. Curabitur 
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem 
          at dolor. Maecenas mattis. Sed convallis tristique sem. 
          Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, 
          iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis 
          quis ligula lacinia aliquet. Mauris ipsum. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer nec odio. Praesent libero. Sed cursus ante dapibus 
          diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
          augue semper porta. Mauris massa. Vestibulum lacinia arcu 
          eget nulla. Class aptent taciti sociosqu ad litora torquent 
          per conubia nostra, per inceptos himenaeos. Curabitur sodales 
          ligula in libero. Sed dignissim lacinia nunc. Curabitur 
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem 
          at dolor. Maecenas mattis. Sed convallis tristique sem. 
          Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, 
          iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis 
          quis ligula lacinia aliquet. Mauris ipsum. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer nec odio. Praesent libero. Sed cursus ante dapibus 
          diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
          augue semper porta. Mauris massa. Vestibulum lacinia arcu 
          eget nulla. Class aptent taciti sociosqu ad litora torquent 
          per conubia nostra, per inceptos himenaeos. Curabitur sodales 
          ligula in libero. Sed dignissim lacinia nunc. Curabitur 
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem 
          at dolor. Maecenas mattis. Sed convallis tristique sem. 
          Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, 
          iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis 
          quis ligula lacinia aliquet. Mauris ipsum. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer nec odio. Praesent libero. Sed cursus ante dapibus 
          diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
          Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
          augue semper porta. Mauris massa. Vestibulum lacinia arcu 
          eget nulla. Class aptent taciti sociosqu ad litora torquent 
          per conubia nostra, per inceptos himenaeos. Curabitur sodales 
          ligula in libero. Sed dignissim lacinia nunc. Curabitur 
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem 
          at dolor. Maecenas mattis. Sed convallis tristique sem. 
          Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, 
          iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis 
          quis ligula lacinia aliquet. Mauris ipsum. 
        </Text>
      </ScrollView>
      {/* <TextInput
        style={styles.textArea}
        value={interestText}
        onChangeText={setInterestText}
        placeholder="Interests"
      /> */}
      <View style={styles.buttonContainer}>
        <View style={styles.leftButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleChatButtonPress}>
            <Text style={styles.buttonText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleVideoButtonPress}>
            <Text style={styles.buttonText}>Video</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightButtonContainer}>
            <TouchableOpacity style={styles.rightButton} onPress={() => {navigation.navigate('Cred')}}>
            <Text style={styles.buttonText}>Cred</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    justifyContent: 'space-between',
    backgroundColor: "white"
  },
  instructionsContainer: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 20,
    padding: 10,
    // borderColor: "black",
    // borderRadius: 10,
    // borderWidth: 0.3,
  },
  instructionsText: {
    color: 'rgba(0,0,0,1)',
    fontSize: 15,
  },
  // textArea: {
  //   width: '100%',
  //   height: 40,
  //   borderWidth: 1,
  //   borderColor: 'gray',
  //   marginBottom: 10,
  //   paddingHorizontal: 10,
  // },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: "full",
  },
  leftButtonContainer: {
    display: "block",
    width: "50%",
    height: "100%",
  },
  rightButtonContainer: {
    display: "block",
    width: "50%",
    height: "100%",
  },
  button: {
    backgroundColor: 'rgba(60, 121, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginRight: 10,
    marginBottom: 20,
    width: "full",
    borderRadius: 8,
  },
  rightButton: {
    backgroundColor: 'rgba(60, 121, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginRight: 10,
    marginBottom: 20,
    width: "full",
    height: "38%",
    borderRadius: 8,
  },
  buttonText: {
    color: 'rgba(0,0,0,1)',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
