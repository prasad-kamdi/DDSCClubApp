import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import styles from './Style';

export default function Example({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.hero}>
          <Image
            source={{ uri: 'https://www.ddsc.org/wp-content/uploads/logo-lg.png' }}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.title}>
              Welcome to DDSC!{'\n\n'}{' '}
              <View style={styles.appName}>
                <Text style={styles.appNameText}>Dartford District Swimming Club</Text>
              </View>
            </Text>

            <Text style={styles.text}>
            DDSC is committed to providing innovative, responsive, and well-structured swimming programs to help develop high performance athletes. As a club we are passionately committed to promoting team spirit, nurturing friendships, developing a strong sense of self-discipline and self-confidence through the medium of swimming.
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical:10 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Coaches')
                  }}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Coaches Area</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Swimmers')
                  }}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Swimmers</Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Join Us')
                  }}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Join Us</Text>
                  </View>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}