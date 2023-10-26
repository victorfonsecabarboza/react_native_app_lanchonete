import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { Link } from 'expo-router';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState('');

  useEffect(() => {
    // Substitua 'URL_DA_SUA_API' pela URL real da sua API JSON da lanchonete
    const apiEndpoint = 'http://localhost:3000/produtos';

    axios.get(apiEndpoint)
      .then(response => {
        setProdutos(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar os produtos:', error);
      });
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Listagem dos produtos com dropdown picker:</Text>
      <Picker
        selectedValue={produtoSelecionado}
        onValueChange={(value, index) => setProdutoSelecionado(value)}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="Escolha um produto" value="" />
        {produtos.map(produto => (
          <Picker.Item key={produto.id} label={`${produto.nome}`} value={produto.descricao} />
        ))}
      </Picker>
      <Text style={styles.text}>Descrição: {produtoSelecionado}</Text>
      <Link href="/" style={styles.link}>Voltar para a raiz</Link>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  text: {
    fontSize: 16,
    width: 270,
    marginBottom: 50,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    width: 300,
  },
  picker: {
    fontSize: 16,
    marginVertical: 30,
    width: 300,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
  link: {
    fontSize: 17,
    color: 'white', // Altere para a cor do texto desejada
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
    width: '50%', // Ajuste a largura conforme necessário
    marginTop: 20,
    backgroundColor: 'black'
  },
});