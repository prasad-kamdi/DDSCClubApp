import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './Style';

const SwimmersPage = ({ navigation }) => {

  const performanceTableData = {
    tableHead: ['Day', 'Time', 'Pool'],
    tableData: [
        ['Monday', '7:30-9:00pm', 'Fairfield'],
        ['Tuesday', '8:00-9:30pm', 'Fairfield'],
        ['Wednesday', '7:30-9:00pm', 'Fairfield'],
        ['Thursday', '6:00-8:30pm', 'White Oak'],
        ['Friday', '8:00-9:30pm', 'Fairfield'],
        ['Saturday', '7:00-8:30am', 'Fairfield'],
    ],
};

const juniorTableData = {
    tableHead: ['Day', 'Time', 'Pool'],
    tableData: [
        ['Wednesday', '7:30-9:00pm', 'Fairfield'],
        ['Thursday', '7:00-9:00pm', 'Eric Liddell'],
        ['Friday', '7:00-8:00pm', 'Fairfield'],
        ['Saturday', '7:00-8:30am', 'Fairfield'],
        ['Sunday', '3:30-5:00pm', 'Fairfield'],
    ],
};

const seniorTableData = {
    tableHead: ['Day', 'Time', 'Pool'],
    tableData: [
        ['Tuesday', '7:00-9:00pm', 'Eric Liddell'],
        ['Friday', '8:00-9:30pm', 'Fairfield'],
        ['Saturday', '7:00-8:30am', 'Fairfield'],
        ['Sunday', '3:30-5:00pm', 'Fairfield'],
    ],
};

const dev2TableData = {
    tableHead: ['Day', 'Time', 'Pool'],
    tableData: [
        ['Monday', '7:30-9:00pm', 'Fairfield'],
        ['Friday', '7:00-8:00pm', 'Fairfield'],
        ['Sunday', '2:00-3:30pm', 'Fairfield'],
    ],
};

const dev1TableData = {
    tableHead: ['Day', 'Time', 'Pool'],
    tableData: [
        ['Tuesday', '7:30-8:30pm', 'DGGS'],
        ['Friday', '6:00-7:00pm', 'Fairfield'],
        ['Sunday', '7:30-8:30am', 'Fairfield'],
    ],
};

  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.hero}>
            <Image
              source={{ uri: 'https://www.ddsc.org/wp-content/uploads/home-main.jpg' }}
              style={styles.heroImage}
              resizeMode="contain"
            />
          </View>
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

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Squads', { squad: 'Age Group & Youth Performance', data: performanceTableData})
                    }}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Age Group & Youth Performance</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Squads', { squad: 'Gold', data: juniorTableData })
                    }}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Gold</Text>
                    </View>
                  </TouchableOpacity>
            </View>     


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Squads', {squad: 'Age Group & Youth Sprint', data: seniorTableData })
                    }}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Age Group & Youth Sprint</Text>
                    </View>
                  </TouchableOpacity>  

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Squads', {squad: 'Silver', data: dev2TableData })
                    }}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Silver</Text>
                    </View>
                  </TouchableOpacity>
                  

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Squads', {squad: 'Bronze', data: dev1TableData })
                    }}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Bronze</Text>
                    </View>
                  </TouchableOpacity>
            </View>     

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Squads', {squad: 'Academy 2', data: dev1TableData })
                    }}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Academy 2</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Squads', {squad: 'Academy 1', data: dev1TableData })
                    }}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Academy 1</Text>
                    </View>
                  </TouchableOpacity>
            </View>     

          </View>
    </SafeAreaView>
  );
}

export default SwimmersPage;