import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class Contador extends Component {
  state = {
    numero: this.props.numero,
  };

  //   Se não usar arrow function na função MaisUm()
  //   constructor(props) {
  //     super(props);
  //     this.maisUm = this.maisUm.bind(this);
  //   }

  maisUm() {
    this.setState({
      numero: this.state.numero + 1,
    });
  }

  Limpar = () => {
    this.setState({
      numero: this.props.numero,
    });
  };

  render() {
    // this.props.numero++;
    return (
      <View>
        <Text style={{fontSize: 30}}>{this.state.numero}</Text>
        <TouchableHighlight
          onPress={() => this.maisUm()}
          onLongPress={this.Limpar}>
          <Text>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
