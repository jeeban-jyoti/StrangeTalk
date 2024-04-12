import React from 'react';
import { Button, View, Text } from 'react-native';

export default function Cred({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cred Screen</Text>
        <Button
        title="Go back"
        onPress={() => navigation.pop()}
      />
      </View>
    );
  }