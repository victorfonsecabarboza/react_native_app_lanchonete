import React, { useState } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView, ActivityIndicator } from "react-native";
import { Keyboard } from 'react-native';
import axios from "axios";
import { Link } from 'expo-router';

export default ApiContainer = () => {
  const [loading, setLoading] = useState(false)
  const [produtos, setProdutos] = useState([])

  const setListarProdutos = (json) => {
    // Listar todos os nomes dos produtos
    setProdutos(json.map(item => item.nome));
  }

  const getListarProdutos = () => {
    axios.get(`http://localhost:3000/produtos`)
      .then(response => {
        console.log(response.data);
        setTimeout(() => {
          setListarProdutos(response.data);
          Keyboard.dismiss();
        }, 2000);
      })
      .catch(error => {
        console.log('Erro ao carregar os produtos:', error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Listagem dos Produtos com Axios:</Text>
      <View style={styles.button}>
        <Button 
          title={'Listar Produtos'}
          onPress={() => { getListarProdutos() }}
          color='#3498db'
        />
      </View>

      {produtos.length > 0 &&
        <View style={styles.produto}>
          <Text style={{ margin: 5 }}>Nomes dos produtos:</Text>
          {produtos.map((produto, index) => (
            <Text key={index}>{produto}</Text>
          ))}
        </View>
      }

      {loading &&
        <View style={styles.loading}>
          <Text style={{ fontSize: 15, color: 'black', margin: 18 }}>Carregando...</Text>
          <ActivityIndicator size="large" color="black" />
        </View>
      }
      <Link href="/" style={styles.link}>Voltar para a raiz</Link>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    width: 300,
    textAlign: 'center',
    paddingBottom: 10,
  },
  button: {
    color: 'white', // Altere para a cor do texto desejada
    width: '80%', // Ajuste a largura conforme necessário
    marginBottom: 30,
  },
  produto: {
    alignItems: 'center',
    marginBottom: 50,

  },
  loading: {
    alignItems: 'center',
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