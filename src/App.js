import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Simples from './componentes/simples';
import ParImpar from './componentes/ParImpar';
import {Inverter, MegaSena} from './componentes/Multi';
import Menu from './componentes/Menu';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Contador from './componentes/Contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProps';
import Evento from './componentes/Evento';
import {Avo} from './componentes/ComunicaoDireta';
import {TextoSincronizado} from './componentes/ComunicacaoIndireta';
import ListaFlex from './componentes/ListaFlex';
import Flex from './componentes/Flex';

export const Routes = createAppContainer(
  createDrawerNavigator(
    {
      Flex: () => <Flex />,
      ListaFlex: () => <ListaFlex />,
      ComunicacaoIndireta: () => <TextoSincronizado />,
      Avo: () => <Avo nome="Joao" sobrenome="Silva" />,
      Evento: () => <Evento />,
      Plataformas: () => <Plataformas />,
      ValidarProps: () => <ValidarProps label="teste" ano={20} />,
      Simples: () => <Simples texto="eedee" />,

      MegaSena: () => <MegaSena numeros={3} />,
      Inverter,
      ParImpar: () => <ParImpar numero={2} />,
      Contador: {
        screen: () => <Contador numero={8} />,
        navigationOptions: {title: 'Contador'},
      },
    },
    {
      initialRouteName: 'Flex',
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
    fontSize: 60,
  },
});
