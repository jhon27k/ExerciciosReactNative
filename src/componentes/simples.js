import React from 'react';
import {Text} from 'react-native';
import Padrao from '../estilo/Padrao';

export default props => {
  return <Text style={[Padrao.ex]}>Arrow: {props.texto || 'jhon'}</Text>;
};
