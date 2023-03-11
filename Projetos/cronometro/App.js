import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";


let timer = null;
let ss = 0;
let mm = 0;
let hh = 0; 

export default function App(){

  const [numero, setNumero] = useState(0);
  const [botao, setBotao] = useState("VAI");
  const [ultimoTempo, setUltimoTempo] = useState(null);

  function vai(){
    //Pausar Timer
    if(timer !== null){
      clearInterval(timer);
      timer = null;

      setBotao("VAI")
    }else{
      //Iniciar Timer
      timer = setInterval(() => {
        ss++;

        if(ss == 60){
          ss = 0;
          mm++;
        }

        if(mm == 60){
          mm = 0;
          hh++;
        }
        if(hh == 23 && mm == 59 && ss == 59){
          hh = 0;
          mm = 0;
          ss = 0;
        }

        let format =

        (hh < 10 ? "0" + hh : hh) + ":" +
        (mm < 10 ? "0" + mm : mm) + ":" +
        (ss < 10  ? "0" + ss : ss)
  
        setNumero(format);

      }, 100)

      setBotao("PARAR")
    }
  }

  function limpar(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;
    }
    setUltimoTempo(numero)
    setNumero(0)
    setBotao("VAI")

    ss == 0;
    mm == 0;
    hh == 0;
  }


  return(
    <View style={styles.container}>
      <StatusBar hidden />

      <Image
      source={require("./src/crono.png")}
      />

      <Text style={styles.timer}>{numero}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={vai}>
          <Text style={styles.btnTexto}>{botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto}>LIMPAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.ultimaArea}>
        <Text style={styles.ultimoTexto}>{ultimoTempo ? "Ultimo tempo: "+  ultimoTempo : ""}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#00aeef',
    justifyContent:'center',
    alignItems:'center',
  },
  timer:{
    color:'#fff',
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center',
    marginTop: -160
  },
  btnArea:{
    flexDirection:'row',
    marginTop: 130,
    height: 40,
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    margin: 17,
    height: 40,
    borderRadius: 25,
  },

  btnTexto:{
    fontSize: 20,
    fontWeight:'bold',
    color:'#00aeef',
    textAlign:'center',
  },
  ultimaArea:{
    marginTop: 50,
  },
  ultimoTexto:{
    fontSize: 20,
    color:'#fff',
    textAlign:'center',
    fontStyle:'italic',
  }
})