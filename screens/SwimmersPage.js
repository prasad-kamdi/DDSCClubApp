import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import styles from './Style';

const SwimmersPage = ({ navigation }) => {

const data = [
  { id: 1, name: 'Age Group & Youth Performance', tableHead: ['Day', 'Time', 'Pool'], tableData: [
    ['Monday', '7:30-9:00pm', 'Fairfield'],
    ['Tuesday', '8:00-9:30pm', 'Fairfield'],
    ['Wednesday', '7:30-9:00pm', 'Fairfield'],
    ['Thursday', '6:00-8:30pm', 'White Oak'],
    ['Friday', '8:00-9:30pm', 'Fairfield'],
    ['Saturday', '7:00-8:30am', 'Fairfield'],
],},
  { id: 2, name: 'Gold', tableHead: ['Day', 'Time', 'Pool'],
    tableData: [
        ['Wednesday', '7:30-9:00pm', 'Fairfield'],
        ['Thursday', '7:00-9:00pm', 'Eric Liddell'],
        ['Friday', '7:00-8:00pm', 'Fairfield'],
        ['Saturday', '7:00-8:30am', 'Fairfield'],
        ['Sunday', '3:30-5:00pm', 'Fairfield'],
    ], },
  { id: 3, name: 'Age Group & Youth Sprint', tableHead: ['Day', 'Time', 'Pool'],
    tableData: [
        ['Tuesday', '7:00-9:00pm', 'Eric Liddell'],
        ['Friday', '8:00-9:30pm', 'Fairfield'],
        ['Saturday', '7:00-8:30am', 'Fairfield'],
        ['Sunday', '3:30-5:00pm', 'Fairfield'],
    ], },
  { id: 4, name: 'Silver',tableHead: ['Day', 'Time', 'Pool'],
    tableData: [
        ['Monday', '7:30-9:00pm', 'Fairfield'],
        ['Friday', '7:00-8:00pm', 'Fairfield'],
        ['Sunday', '2:00-3:30pm', 'Fairfield'],
    ], },
  { id: 5, name: 'Bronze',tableHead: ['Day', 'Time', 'Pool'],
    tableData: [
        ['Tuesday', '7:30-8:30pm', 'DGGS'],
        ['Friday', '6:00-7:00pm', 'Fairfield'],
        ['Sunday', '7:30-8:30am', 'Fairfield'],
    ], },
  { id: 6, name: 'Academy 2' ,tableHead: ['Day', 'Time', 'Pool'],
    tableData: [
        ['Tuesday', '7:30-8:30pm', 'DGGS'],
        ['Friday', '6:00-7:00pm', 'Fairfield'],
        ['Sunday', '7:30-8:30am', 'Fairfield'],
    ],},
  { id: 7, name: 'Academy 1',tableHead: ['Day', 'Time', 'Pool'],
    tableData: [
        ['Tuesday', '7:30-8:30pm', 'DGGS'],
        ['Friday', '6:00-7:00pm', 'Fairfield'],
        ['Sunday', '7:30-8:30am', 'Fairfield'],
    ], },
];

const cardGap = 16;

const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 3;
const cardHeight = (Dimensions.get('window').height - cardGap * 30) / 4;

  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.content}>

            <View style={styles.contentHeader}>
              <Text style={styles.title}>
                Welcome to{'\n\n'}{' '}
                <View style={styles.appName}>
                  <Text style={styles.appNameText}>Club Swimmers</Text>
                </View>
              </Text>

              <Text style={styles.text}>
              DDSC Squads & TimeTables!
              </Text>
            </View>

            
              <View style={{ flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'center',}}>
                  {data.map((d, i) => {
                    return (
                      <TouchableOpacity 
                      key={i}
                      onPress={() => {
                        // handle onPress
                        //console.log(d.name);
                        //console.log(d.tableData);
                        navigation.navigate('Squads', { squad: d.name, tableHead: d.tableHead, tableData: d.tableData })
                      }}>
                      <View
                        key={i}
                        style={{
                          marginTop: cardGap,
                          marginLeft: i % 2 !== 0 ? cardGap : 0,
                          width: cardWidth,
                          height: cardHeight,
                          backgroundColor: '#fff2dd',
                          borderRadius: 16,
                          shadowOpacity: 0.2,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderWidth: 2,
                          borderColor: '#20232a',
                        }}
                      >
                        <Text style={styles.text}>{d.name}</Text>
                      </View>
                      </TouchableOpacity>
                    );
                  })}
              </View>

          </View> 
    </SafeAreaView>
  );
}

export default SwimmersPage;