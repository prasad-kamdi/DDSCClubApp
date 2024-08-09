// LandingPage.js
import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Image
       source={{ uri: 'https://www.ddsc.org/wp-content/uploads/logo-lg.png' }}
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Welcome to the Swimming Management Club
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        [Mission and Vision Statement]
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Button
          title="Coaches"
          onPress={() => navigation.navigate('Coaches')}
        />
        <Button
          title="Swimmers"
          onPress={() => navigation.navigate('Swimmers')}
        />
        <Button
          title="Learn More"
          onPress={() => {/* Add action for "Learn More" button */}}
        />
      </View>
    </View>
  );
};

export default LandingPage;