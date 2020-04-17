import React from 'react';
import {View, StyleSheet} from 'react-native';

// alignItems: 'center', //cross-axis
// //   justifyContent: 'center', //main axis
// flexDirection: 'row',

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  norte: {
    flex: 1,
    backgroundColor: '#bdf9ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centro: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#f2f9bd',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  sul: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circulo: {
    width: 100,
    height: 100,
    backgroundColor: 50,
    borderRadius: 50,
  },
});

const Circulo = props => {
  return <View style={styles.circulo} />;
};

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.norte}>
        <Circulo />
      </View>
      <View style={styles.centro}>
        <Circulo />
        <Circulo />
        <Circulo />
      </View>
      <View style={styles.sul}>
        <Circulo />
      </View>
    </View>
  );
};
