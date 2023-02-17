import { StatusBar } from 'expo-status-bar';
import { LogBox ,ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';
import {AntDesign} from '@expo/vector-icons';
import { useState } from 'react';
import Player from './Player.js';

export default function App() {

  LogBox.ignoreAllLogs(true);

  const [audioIndex,setarAudioIndex] = useState(0);

  const [playing,setPlaying] = useState(false);

  const[audio,setarAudio] = useState(null);

  const [musica,setarMusica] = useState([

    {
      nome: 'Sweet child of mine',
      artista:'Guns N Roses',
      playing: false,
      file:require('./audio.mp3')
    },

    {
      nome: 'Welcome to the Jungle',
      artista:'Guns N Roses',
      playing: false,
      file:require('./audio.mp3')
    },

    {
      nome: 'This love',
      artista:'Marron 5',
      playing: false,
      file:require('./audio.mp3')
    }
  ]);

  const changeMusic = async (id) =>{
    let curFile = null;
    let newMusics= musica.filter((val,k)=>{
    if(id == k){
        musica[k].playing = true;
        curFile = musica[k].file;
        setPlaying(true);
        setarAudioIndex(id);
      }
      else{
        musica[k].playing = false;
      }

      return musica[k];
    })

    if(audio != null){
      audio.unloadAsync();
    }

    let curAudio = new Audio.Sound();

    try{
      await curAudio.loadAsync(curFile);
      await curAudio.playAsync();
    }catch(error){}

    setarAudio(curAudio);
    setarMusica(newMusics);
  }


  return (
    <View style={{flex:1}}>
      <ScrollView style={styles.container}>
        <StatusBar hidden/>
        <View style={styles.header}>
            <Text style={{textAlign:'center', fontSize:25,color:'white'}}>App Música</Text>
        </View>

        <View style={styles.table}>
          <Text style={{width:'50%',color:'rgb(200,200,200)'}}>Música</Text>
          <Text style={{width:'50%',color:'rgb(200,200,200)'}}>Artista</Text>
        </View>

      {
        musica.map((val,k)=>{
          if(val.playing){
            return(
            <View style={styles.table}>
              <TouchableOpacity onPress={()=> changeMusic(k)} style={{width:'100%', flexDirection:'row'}}>
                  <Text style={styles.tableTextSelected}><AntDesign name="play" size={15} color='white'/> {val.nome}</Text>
                  <Text style={styles.tableTextSelected}>{val.artista}</Text>
              </TouchableOpacity>
            </View>
            );
          }else{
            return(
              <View style={styles.table}>
              <TouchableOpacity onPress={()=> changeMusic(k)} style={{width:'100%', flexDirection:'row'}}>
                  <Text style={styles.tableText}><AntDesign name="play" size={15} color='white'/> {val.nome}</Text>
                  <Text style={styles.tableText}>{val.artista}</Text>
              </TouchableOpacity>
            </View>
              );
          }
        })
      }
      <View style={{paddingBottom:200}}></View>
      </ScrollView>
      <Player playing={playing} setPlaying={setPlaying} audioIndex={audioIndex}
      musica={musica} setarMusica={setarMusica} audio={audio} setarAudio={setarAudio} setarAudioIndex={setarAudioIndex}></Player>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  header:{
    backgroundColor:'#1DB954',
    width:'100%',
    padding:20,
  },

  table:{
      flexDirection:'row',
      padding:20,
      borderBottomColor:'white',
      borderBottomWidth:1
  },
  tableTextSelected:{
    width:'50%',
    color:'#1DB954',
  },
  tableText:{
    width:'50%',
    color:'white',
  },
});
