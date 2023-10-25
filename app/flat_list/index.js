import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { Link } from 'expo-router';

const App = () => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/produtos')
      .then(response => {
        setListItems(response.data);
      })
      .catch(error => {
        console.error('Erro ao carregar os produtos:', error);
      });
  }, []);

  const ItemView = ({ item }) => {
    return (
      <View>
        <Text
          style={styles.item}
          onPress={() => getItem(item)}>
          {item.nome}
        </Text>
      </View>
    );
  };

  const getItem = (item) => {
    alert(item.descricao);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem dos produtos com flatlist:</Text>
      <FlatList
        data={listItems}
        renderItem={ItemView}
        keyExtractor={(item) => item.id.toString()}
      />
      <Link href="/" style={styles.link}>Voltar para a raiz</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 30,
    marginTop: 100,
  },
    title: {
    fontSize: 22,
    textAlign: 'center',
    width: 320,
    marginBottom: 15,
  },
  item: {
    padding: 10,
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: '#e74c3c',
    height: 44,
    width: 300,
    color: 'white',
    textAlign: 'center',
    borderRadius: 5,
  },
  link: {
    fontSize: 18,
    color: 'white', // Altere para a cor do texto desejada
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: '50%', // Ajuste a largura conforme necessário
    marginBottom: 70,
    left: 80,
    backgroundColor: 'black',
  },
});

export default App;