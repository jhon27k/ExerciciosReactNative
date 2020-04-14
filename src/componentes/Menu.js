import React from 'react';
import {Text, Button, View, Image} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import Padrao from '../estilo/Padrao';
import {StyleSheet} from 'react-native';

function Menu({...props}) {
  return (
    <View style={(Padrao.ex, styles.container)}>
      <View style={styles.userArea}>
        <Image source={require('../assets/user.png')} style={styles.user} />
      </View>
      <DrawerNavigatorItems {...props}> </DrawerNavigatorItems>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userArea: {
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 10,
  },
  user: {
    width: 55,
    height: 55,
  },
});

export default Menu;
