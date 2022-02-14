import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from "react-native";


//COMPONENTES
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { altura: "", peso: "", resultado: "", mensagem: "0" }
    this.calcular = this.calcular.bind(this)
  }

  // Fonte: https://dms.ufpel.edu.br/static/bib/apoio/imc.pdf

  calcular() {
    let imc = this.state.peso / (this.state.altura * this.state.altura);
    let state = this.state;
    state.resultado = imc
    if (state.resultado < 18.5) {
      state.mensagem = "Baixo peso"
    }
    else if (state.resultado < 24.9) {
      state.mensagem = "Resultado: Peso normal"
    }
    else if (state.resultado < 29.9) {
      state.mensagem = "Resultado: Excesso de peso"
    }
    else if (state.resultado < 34.9) {
      state.mensagem = "Resultado: Obesidade de Classe 1"
    }
    else if (state.resultado < 39.9) {
      state.mensagem = "Resultado: Obesidade de Classe 2"
    } else {
      state.mensagem = "Resultado: Obesidade de Classe 3"
    }
    this.setState(state);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.text}>Insira seus dados para calcular o IMC</Text>
        <TextInput
          style={styles.input}
          placeholder="Peso (em KG)"
          value={this.state.peso}
          onChangeText={peso => this.setState({ peso })}
          keyboardType="decimal-pad"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Altura (em metros)"
          onChangeText={altura => this.setState({ altura })}
          value={this.state.altura}
          keyboardType="decimal-pad"></TextInput>
        <Button
          color="#42f5ce"
          title="Calcule agora!"
          onPress={this.calcular}></Button>
        <Text style={styles.mensagem}>
          {this.state.mensagem}</Text>
        <Footer />
      </View >
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#42f5ce",
    alignItems: "center",
  },
  input: {
    width: "30%",
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 20,
    padding: 10,
    alignSelf: "center"
  },
  text: {
    fontSize: 16,
    marginTop: 100,
    alignSelf: "center"
  },
  mensagem: {
    fontSize: 16,
    marginTop: 40,
    padding: 10,
  },
  button: {
    backgroundColor: "#FFF",
    borderRadius: 10,
  }
});