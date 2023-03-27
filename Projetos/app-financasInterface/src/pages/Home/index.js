import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleta conta luz',
    value: '300.90',
    date: '17/09/2023',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix Cliente X',
    value: '542,15',
    date: '25/09/2023',
    type: 1 //Receita / entradas
  },
  {
    id: 3,
    label: 'Salario',
    value: '7.200,00',
    date: '15/10/2023',
    type: 1 //Receita / entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name="Caio H. Marques"/>
      <Balance saldo="9.25,90" gastos="-557,00"/>

      <Actions/>

      <Text style={styles.title}>Ultimas mivimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Moviments data={item}/> }
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  title:{
    fontSize: 18,
    fontWeight:'bold',
    margin:14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});