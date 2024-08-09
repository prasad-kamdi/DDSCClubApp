// CoachesPage.js
import React from 'react';
import { View, Text, Image, FlatList, SafeAreaView } from 'react-native';

const coachesData = [
  {
    id: '1',
    name: 'Nick Pembroke',
    photo: 'https://www.ddsc.org/wp-content/uploads/2022/01/Nick-Pembroke.jpg', // Replace with actual photo URI
    description: 'Development Coach',
  },
  {
    id: '2',
    name: 'Hazel Tew',
    photo: 'https://www.ddsc.org/wp-content/uploads/Hazel-Tew.jpg', // Replace with actual photo URI
    description: 'Academy 2 Coach',
  },
  {
    id: '3',
    name: 'Emma Coppen',
    photo: 'https://www.ddsc.org/wp-content/uploads/Emma-Coppen.jpg', // Replace with actual photo URI
    description: 'Development 2 Coach',
  },

  {
    id: '4',
    name: 'Steven O’Neill',
    photo: 'https://www.ddsc.org/wp-content/uploads/Steven-ONeill.jpg', // Replace with actual photo URI
    description: 'Junior and Senior Development Coach',
  },
    // Add more coach data as needed

];

const CoachesPage = () => {
  const renderCoachItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
      <Image
        source={{ uri: item.photo }}
        style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
      />
      <View>
        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1}}>

      <View style={{ backgroundColor: '#2575cf', margin: 12, borderRadius: 16, padding: 16,}}>
          <Image
            source={{ uri: 'https://www.ddsc.org/wp-content/uploads/logo-lg.png' }}
            style={{ width: '100%',height: 150,}}
            resizeMode="contain"
          />
        </View>

        <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 20}}>
          Our Coaches
        </Text>
        <FlatList
          data={coachesData}
          renderItem={renderCoachItem}
          keyExtractor={item => item.id}
          style={{margin:20}}
        />
  
      </SafeAreaView> 
  );
};

export default CoachesPage;