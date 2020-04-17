import React, {Component} from 'react';
import {View, Text} from 'react-native';

const fonte = {style: {fontSize: 30}};

function filhosComProps(props) {
  return React.Children.map(props.children, c =>
    React.cloneElement(c, {...props, ...c.props}),
  );
}

export const Filho = props => {
  return (
    <View>
      <Text {...fonte}>
        Filho: {props.nome} {props.sobrenome}>
      </Text>
    </View>
  );
};

export const Pai = props => {
  return (
    <View>
      <Text {...fonte}>
        Pai: {props.nome} {props.sobrenome}
      </Text>
      {/* {props.children} */}
      {filhosComProps(props)}
    </View>
  );
};

export const Avo = props => {
  return (
    <View>
      <Text {...fonte}>
        Avô: {props.nome} {props.sobrenome}
      </Text>
      <Pai nome="Andre" sobrenome={props.sobrenome}>
        <Filho nome="ana" />
        <Filho nome="Gui" />
        <Filho nome="Davi" />
      </Pai>
      <Pai {...props} nome="Pedro">
        <Filho nome="Rebeca" />
        <Filho nome="Renato" />
      </Pai>
    </View>
  );
};

export default Avo;
