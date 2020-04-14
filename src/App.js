import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Simples from './componentes/simples';
import ParImpar from './componentes/ParImpar';
import {Inverter, MegaSena} from './componentes/Multi';
import Menu from './componentes/Menu';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

export const Routes = createAppContainer(
  createDrawerNavigator(
    {
      Simples: () => <Simples texto="eedee" />,
      MegaSena: () => <MegaSena numeros={3} />,
      Inverter,
      ParImpar,
    },
    {
      initialRouteName: 'MegaSena',
      contentComponent: Menu,
    },
  ),
);

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.f20}>App 54</Text>
//         <Simples texto="Nome: Jhon" />
//         <ParImpar numero={21} />
//         <Inverter texto="jhon" />
//         <MegaSena numeros={6} />
//       </View>
//     );
//   }
// }

// export default function() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.f20}>App!</Text>
//     </View>
//   );
// }

export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 40,
  },
});
