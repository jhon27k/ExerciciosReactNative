import React from 'react';
import {Button, Alert, ToastAndroid, Platform} from 'react-native';

export default props => {
  const notificar = msg => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      Alert.alert('Informação', msg);
    }
  };
  return (
    // odo
    <Button title="Plataforma" onPress={() => notificar(Platform.OS)} />
  );
};
