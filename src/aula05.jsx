import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput, 
    Image,
    TouchableOpacity,
} from 'react-native';

class Aula05 extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View>

            <Image
                source={ require('../img/logo-barao.png') }
                style={ styles.logo}
            />

            <text style={ styles.label}>Nome:</text>
            <TextInput
            style={ styles.input }
            placeholder='Informe seu nome: '
            />

            <text style={ styles.label}>Email:</text>
        
            <TextInput
            style={ styles.input }
            placeholder='Informe seu e-mail: '
            />

            <TouchableOpacity style={styles.botao}>
                <Text style={ styles.textoBotao}>Entrar</Text>
            </TouchableOpacity>

            <Text style={ styles.texto1}>Não tem conta?
                <Text style={ styles.texto2}>Cadastre-se!</Text>
            </Text>

        </View>

      </View>
    );
  }
}

export default Aula05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },

  input: {
    width: 250,
    borderWidth: 1,
    borderColor: '#ccc',
    boderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: 'white'
    },

    label:{
        fontSize: 16,
        marginBottom: 5,
        color: 'white',
    },

    logo:{
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 70,
    },

    botao: {
        backgroundColor: 'green',
        width: 250,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 30,
    },

    textoBotao: {
        color: 'white',
        textAlign: 'center',
    }
});