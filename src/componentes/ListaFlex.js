import React from 'react';
import {ScrollView, View, FlatList, Text} from 'react-native';

const alunos = [
  {id: 1, nome: 'Ketlen', nota: 6.5},
  {id: 2, nome: 'Jonathas', nota: 5.5},
  {id: 3, nome: 'Luique', nota: 8.5},
  {id: 4, nome: 'Augusto', nota: 8.5},
  {id: 5, nome: 'junior', nota: 4.5},
  {id: 6, nome: 'alex', nota: 9.5},

  {id: 7, nome: 'Ketlen', nota: 6.5},
  {id: 8, nome: 'Jonathas', nota: 5.5},
  {id: 9, nome: 'Luique', nota: 8.5},
  {id: 10, nome: 'Augusto', nota: 8.5},
  {id: 11, nome: 'junior', nota: 4.5},
  {id: 12, nome: 'alex', nota: 9.5},

  {id: 13, nome: 'Ketlen', nota: 6.5},
  {id: 14, nome: 'Jonathas', nota: 5.5},
  {id: 15, nome: 'Luique', nota: 8.5},
  {id: 16, nome: 'Augusto', nota: 8.5},
  {id: 17, nome: 'junior', nota: 4.5},
  {id: 18, nome: 'alex', nota: 9.5},
];

const ItemEstilo = {
  paddingHorizontal: 15,
  height: 60,
  backgroundColor: '#DDD',
  borderWidth: 0.5,
  borderColor: '#222',
  // flex:
  alignItems: 'center', //cross-axis
  //   justifyContent: 'center', //main axis
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const Aluno = props => {
  return (
    <View style={ItemEstilo}>
      <Text>Nome: {props.nome}</Text>
      <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>
  );
};

export default props => {
  const renderItem = ({item}) => {
    return <Aluno {...item} />;
  };
  return (
    <ScrollView>
      <FlatList
        data={alunos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};
