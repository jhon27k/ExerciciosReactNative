import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

const ValidarProps = props => {
  return (
    <Text style={{fontSize: 35}}>
      {props.label || 'Erro'}
      {props.ano + 2000}
    </Text>
  );
};

ValidarProps.defaultProps = {
  label: 'Ano: ',
};

ValidarProps.protoTypes = {
  ano: PropTypes.number.isRequired,
};

export default ValidarProps;
