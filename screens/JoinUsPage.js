import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

import styles from './Style';

const JoinUsPage = () => {

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.ddsc.org/join-us/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://www.ddsc.org/wp-content/uploads/2022/01/title-join-us.jpg' }}
          style={styles.heroImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Do you wish to {'\n'}{' '}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>Join Us?</Text>
            </View>
          </Text>

          <Text style={styles.text}>
          Swimmers who wish to join the club will be invited to attend a trial, this will be 30 minutes for Academy1 and 1hr for all other squads. Please remember to bring a costume/trunks, swimming hat and goggles.
          It is important to remember that squads may be at full capacity at the time of your trial, if you succeed in meeting the squad entry criteria you will be added to a waiting list.
          Please contact <Text style={styles.appNameText1}>membership@ddsc.org</Text> if you have any questions.
          </Text>

          <TouchableOpacity
                  onPress={() => {
                    _handlePressButtonAsync();
                  }}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Submit Application</Text>
                  </View>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  </SafeAreaView>
);
}

export default JoinUsPage;