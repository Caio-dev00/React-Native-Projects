import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View, SafeAreaView, TouchableOpacity, FlatList, Modal } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { useState, useCallback, useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import TaskList from './src/components/TaskList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App(){
  const [task, setTask] = useState([]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    async function loadTasks(){
      const taskStorage = await AsyncStorage.getItem('@task');

      if(taskStorage){
        setTask(JSON.parse(taskStorage))
;      }
    }
    loadTasks();
  }, []);

  useEffect(() => {

    async function saveTasks(){
      await AsyncStorage.setItem('@task', JSON.stringify(task));
    }

    saveTasks();

  }, [task])

  function handleCadastrar(){
    if(input === '')return;

    const data = {
      key: input,
      task: input
    };

    setTask([...task, data]);
    setOpen(false);
    setInput('');

  }
  const handleDelete = useCallback((data)=>{
    const find = task.filter(r => r.key !== data.key);
    setTask(find);
  })


  return(
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <View style={styles.content}>
        <Text style={styles.title}>Tarefas</Text>
      </View>

      <FlatList 
      marginTop={20}
      marginHorizontal={10}
      showsVerticalScrollIndicator={false}
      data={task}
      keyExtractor={(item) => String(item.key)}
      renderItem={({item}) => <TaskList data={item} handleDelete={handleDelete} />}
      />

      <Modal animationType='slide' transparent={false} visible={open}>
        
        <SafeAreaView style={styles.modal}>
          

          <View style={styles.modalHeader}>
            
            <TouchableOpacity onPress={() => setOpen(false)}>
              <Ionicons style={{marginLeft:5, marginRight: 5}} name="md-arrow-back" size={40} color="#fff"/>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Criar nova nota</Text>
          </View>

          <Animatable.View style={styles.modalBody} animation ="fadeInUp" useNativeDriver>
            <TextInput
            multiline={true}
            placeholderTextColor='#747474'
            autoCorrect={false}
            placeholder='O que precisa fazer hoje?'
            value={input}
            onChangeText={(texto) => setInput(texto)}
            style={styles.input}
            />

          <TouchableOpacity style={styles.handleCadastrar} onPress={handleCadastrar}>
            <Text style={styles.handleAddText}>Adicionar</Text>
          </TouchableOpacity>

          </Animatable.View>

        </SafeAreaView>
      </Modal>

      <TouchableOpacity
      onPress={() => setOpen(true)}
      style={styles.fab}>
        <Ionicons name="ios-add" size={35} color="#fff" />
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    backgroundColor: "#272727",
  },
  content:{
    width:'100%',
    height:70,
    justifyContent:'center',
    backgroundColor: '#00A949'
  },
  title:{
    fontSize:25,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#fff',
  },
  titleP:{
    paddingBottom:9,
    fontSize:18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#fff',
  },
  fab:{
    position:'absolute',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    width:60,
    height:60, 
    zIndex: 9,
    backgroundColor:'#D81E5B',
    shadowColor: '#000',
    shadowOpacity:0.2,
    shadowOffset: {
      width: 1,
      height: 3
    }
  },
  modal:{
    flex:1,
    backgroundColor:'#272727',
  },
  modalHeader:{
    marginLeft:10,
    marginTop:20,
    flexDirection:'row',
    alignItems:'center',
  },
  modalTitle:{
    color:'#fff',
    marginLeft:15,
    fontSize:23,
  },
  modalBody:{
    marginTop:15,
  },
  input:{
    fontSize:15,
    marginLeft:10,
    marginRight:10,
    marginTop:30,
    backgroundColor:"#fff",
    padding: 9,
    height: 80,
    borderRadius:10,
    textAlignVertical:'top',
    color:'#000',
  },
  handleCadastrar:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:10,
    backgroundColor:'#00A949',
    borderRadius:10,
    height: 50,
    marginLeft:10,
    marginRight:10,
  },
  handleAddText:{
    fontSize:18,
    color:'#fff',
  }
})