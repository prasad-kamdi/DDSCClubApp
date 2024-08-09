import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
      },
      head: { height: 40, backgroundColor: '#f1f8ff' },
      text1: { margin: 6, fontSize: 13, },
      
      title: {
        fontSize: 28,
        fontWeight: '500',
        color: '#281b52',
        textAlign: 'center',
        marginBottom: 12,
        lineHeight: 40,
      },
      text: {
        fontSize: 15,
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
        justifyContent: 'space-between',
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
        fontSize: 28,
        fontWeight: '700',
        color: '#281b52',
      },
      appNameText1: {
        fontSize: 14,
        fontWeight: '700',
        color: '#281b52',
      },
      /** Button */
      button: {
        backgroundColor: '#2575cf',
        paddingVertical: 12,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
      },
      buttonText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#fff',
      },
      });