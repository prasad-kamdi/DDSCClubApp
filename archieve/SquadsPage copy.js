import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';

import { Table, Row, Rows } from 'react-native-reanimated-table';
import { useRoute } from '@react-navigation/native';

import styles from './Style';

const SquadsPage = () => {
  const route = useRoute();

  const { squad, data } = route.params;

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.hero}>
      <Image
        source={{ uri: 'https://www.ddsc.org/wp-content/uploads/home-squads.jpg' }}
        style={styles.heroImage}
        resizeMode="contain"
      />
    </View>
    <View style={styles.content}>
      <View style={styles.contentHeader}>
        <Text style={styles.title}>
          Squad {'\n\n'}{' '}
          <View style={styles.appName}>
            <Text style={styles.appNameText}>{squad}</Text>
          </View>
        </Text>
      </View>

      <View style={styles.content}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#2575cf'}}>
                <Row data={data.tableHead} style={styles.head} textStyle={styles.text1}/>
                <Rows data={data.tableData} textStyle={styles.text1}/>
            </Table>
        </View>

    </View>
  </SafeAreaView>
);
}

export default SquadsPage;