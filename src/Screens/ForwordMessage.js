// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect} from 'react';
// import SendIntentAndroid from 'react-native-send-intent';

// export default function ForwordMessage() {
//   // useEffect(() => {
//   //   sendWhatsAppMessage('8895921708', 'Hello from my React Native app!');
//   // }, []);

//   const message = "Welcome to Muskan's WhatsApp";
//   const phoneNumber = 7008536167;

//   SendIntentAndroid.sendText({
//     text: message,
//     type: SendIntentAndroid.TEXT_PLAIN,
//     title: 'Share',
//     packageName: 'com.whatsapp',
//     extra: [{key: 'jid', value: `${phoneNumber}@s.whatsapp.net`}],
//   });

//   // const sendWhatsAppMessage = (phoneNumber, message) => {
//   //   SendIntentAndroid.sendText({
//   //     text: message,
//   //     type: SendIntentAndroid.TEXT_PLAIN,
//   //     title: 'Share this',
//   //   })
//   //     .then(isSent => console.log('WhatsApp message sent'))
//   //     .catch(error => console.log('Error sending WhatsApp message:', error));
//   // };

//   // sendWhatsAppMessage(8895921708, "Welcome to Muskan's Whatsaap");

//   return (
//     <View>
//       <Text>ForwordMessage</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});

//
//
//
//
//
import React, {useState} from 'react';

import {
  Alert,
  View,
  StyleSheet,
  Text,
  Linking,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function ForwordMessage() {
  const [cellNumber, setCellNumber] = useState('');

  const [whatsAppMessage, setWhatsAppMessage] = useState();

  const sendMsg = () => {
    if (cellNumber.length != 10) {
      Alert.alert('Please Enter Correct WhatsApp Number');
      return;
    }
    //  91 is India Country Code.

    let URL =
      'whatsapp://send?text=' + whatsAppMessage + '&phone=91' + cellNumber;

    Linking.openURL(URL)
      .then(data => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        Alert.alert('Make sure Whatsapp installed on your device');
      });
  };

  return (
    <View style={styleSheet.MainContainer}>
      <Text style={styleSheet.text1}>
        Send WhatsApp Message from React Native App
      </Text>

      <TextInput
        value={whatsAppMessage}
        onChangeText={whatsAppMessage => setWhatsAppMessage(whatsAppMessage)}
        placeholder={'Enter WhatsApp Message Here'}
        style={styleSheet.textInputStyle}
      />

      <TextInput
        value={cellNumber}
        onChangeText={cellNumber => setCellNumber(cellNumber)}
        placeholder={'Enter WhatsApp Number Here'}
        keyboardType="numeric"
        style={styleSheet.textInputStyle}
      />

      <TouchableOpacity
        // activeOpacity={0.7}
        style={styleSheet.button}
        onPress={sendMsg}>
        <Text style={styleSheet.buttonText}>Send </Text>
      </TouchableOpacity>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  MainContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33363D',
    padding: '10%',
  },

  text1: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textInputStyle: {
    height: 42,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
  },

  button: {
    width: '30%',
    justifyContent: 'center',
    marginTop: 18,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
