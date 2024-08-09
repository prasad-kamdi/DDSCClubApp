import React, { useState } from 'react';
import { View, Text, Button , StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Table, Row, Rows } from 'react-native-reanimated-table';


const Test = () => {
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

    
    const RootStack = createStackNavigator();
    const [data, setData] = useState([]);


    function HomeScreen({ navigation }) {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Choose your 🏊🏻‍♀️ squad</Text>         
            
            <TouchableOpacity
                onPress={() => onPressAction('Performance',{navigation})}
                style={styles.btn}>
                <Text style={{ fontSize: 20 }}>Performance</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onPressAction('Junior',{navigation})}
                style={styles.btn3}>
                <Text style={{ fontSize: 20 }}>Junior Competition</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onPressAction('Senior',{navigation})}
                style={styles.btn3}>
                <Text style={{ fontSize: 20 }}>Senior Competition</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onPressAction('Dev2',{navigation})}
                style={styles.btn1}>
                <Text style={{ fontSize: 20 }}>Development 2</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onPressAction('Dev1',{navigation})}
                style={styles.btn1}>
                <Text style={{ fontSize: 20 }}>Development 1</Text>
            </TouchableOpacity>
          

            <TouchableOpacity
                onPress={() => onPressAction('Dev2',{navigation})}
                style={styles.btn2}>
                <Text style={{ fontSize: 20 }}>Academy 2</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onPressAction('Dev1',{navigation})}
                style={styles.btn2}>
                <Text style={{ fontSize: 20 }}>Academy 1</Text>
            </TouchableOpacity>
          
          </View>
        );
      }

      function onPressAction(squadName, {navigation}){
        switch (squadName) {
            case 'Performance':
                //console.log('Performance selected');
                setData(performanceTableData);
            break;

            case 'Junior':
               // console.log('Junior selected');
                setData(juniorTableData);
            break;

            case 'Senior':
               // console.log('Senior selected');
                setData(seniorTableData);
            break;

            case 'Dev2':
                //console.log('Dev2 selected');
                setData(dev2TableData);
            break;

            case 'Dev1':
               // console.log('Dev1 selected');
                setData(dev1TableData);
            break;


            default:
            break;
        }
        navigation.navigate(squadName);
      }
      
      function ShowScreen({ navigation }) {
        return (
        <View style={styles.container}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={data.tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={data.tableData} textStyle={styles.text}/>
            </Table>

            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
        );
      }

    return (
        <RootStack.Navigator>
          <RootStack.Group>
            <RootStack.Screen name="⌛️Time Table" component={HomeScreen} />
          </RootStack.Group>
          
          <RootStack.Group screenOptions={{ presentation: 'modal' }}>
            <RootStack.Screen name="Performance" component={ShowScreen} />
            <RootStack.Screen name="Junior" component={ShowScreen} />
            <RootStack.Screen name="Senior" component={ShowScreen} />
            <RootStack.Screen name="Dev2" component={ShowScreen} />
            <RootStack.Screen name="Dev1" component={ShowScreen} />
            <RootStack.Screen name="Academy2" component={ShowScreen} />
            <RootStack.Screen name="Academy1" component={ShowScreen} />

          </RootStack.Group>
        </RootStack.Navigator>
  
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 60, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    btn: {
      width: "70%",
      backgroundColor: "#FF8080",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 10
  },

      btn1: {
        width: "70%",
        backgroundColor: "#FFCF96",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10
    },

    btn2: {
      width: "70%",
      backgroundColor: "#CDFAD5",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 10
    },
    btn3: {
      width: "70%",
      backgroundColor: "#D2E0FB",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 10
    },


  });

export default Test;