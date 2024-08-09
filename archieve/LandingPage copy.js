import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Example({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
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
            Welcome to{'\n\n'}{' '}
            <View style={styles.appName}>
              <Text style={styles.appNameText}>Dartford District Swimming Club</Text>
            </View>
          </Text>

          <Text style={styles.text}>
          DDSC is committed to providing innovative, responsive, and well-structured swimming programs to help develop high performance athletes. As a club we are passionately committed to promoting team spirit, nurturing friendships, developing a strong sense of self-discipline and self-confidence through the medium of swimming.
          </Text>

        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Coaches')
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Coaches</Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#281b52',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 40,
  },
  text: {
    fontSize: 12,
    lineHeight: 24,
    fontWeight: '400',
    color: '#9992a7',
    textAlign: 'center',
  },
  /** Hero */
  hero: {
    backgroundColor: '#2575cf',
    margin: 12,
    borderRadius: 16,
    padding: 16,
  },
  heroImage: {
    width: '100%',
    height: 150,
  },
  /** Content */
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  contentHeader: {
    paddingHorizontal: 24,
  },
  appName: {
    backgroundColor: '#fff2dd',
    transform: [
      {
        rotate: '-5deg',
      },
    ],
    paddingHorizontal: 6,
  },
  appNameText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#281b52',
  },
  /** Button */
  button: {
    backgroundColor: '#2575cf',
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#fff',
  },
});