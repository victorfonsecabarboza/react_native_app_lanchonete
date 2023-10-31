import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import axios from 'axios';
import Carousel from 'react-native-x-carousel';
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

const DATA = [
  'http://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/traillerdoserginho/34_55c2ab9b72a92.png',
  'http://romeniaburguer.recebi-pedidos.com.br/_core/_uploads/140/2022/09/1003280922dcej4fijeh.png',
  'http://s3-sa-east-1.amazonaws.com/loja2/9c7209fb5568e1b0db378ff181d44ac6.png',
  'http://s3.us-west-2.amazonaws.com/whatsmenu/production/gansoburguer/products/126449/ovoequeijopng',
  'http://scfoods.fbitsstatic.net/img/p/refrigerante-coca-cola-lata-350ml-71953/258602.jpg?w=800&h=800&v=no-change&qs=ignore',
  'http://samsclub.vtexassets.com/arquivos/ids/158171-800-450?v=637433118370830000&width=800&height=450&aspect=true'
];

const App = () => {
  const [produtoData, setProdutoData] = useState([]);
  const [carouselData, setCarouselData] = useState([]);

  // Eecebe uma função como argumento e esta função será executada após a renderização do componente.
  useEffect(() => {
    axios.get('http://localhost:3000/produtos')
      .then(response => {
        console.log('Response:', response.data); // Log the response to inspect its structure
  
        const produtos = response.data; // Update to use the entire response
  
        if (produtos && produtos.length > 0) {
          setProdutoData(produtos);
  
          const carouselItems = produtos.map((produto, index) => ({
            coverImageUri: DATA[index],
            cornerLabelColor: 'blue',
            cornerLabelText: produto.nome,
          }));
          setCarouselData(carouselItems);
        } else {
          console.error('Nenhum produto encontrado ou estrutura inválida na resposta.');
        }
      })
      .catch(error => {
        console.error('Erro ao carregar os produtos:', error);
      });
  }, []);

  const renderItem = data => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <Image style={styles.card} source={{ uri: data.coverImageUri }} />
      <View style={[styles.cornerLabel, { backgroundColor: data.cornerLabelColor }]}>
        <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listagem dos produtos com carousel:</Text>
      <View style={styles.carouselContainer}>
        <Carousel
          data={carouselData}
          renderItem={renderItem}
          loop
          autoplay
          direction="vertical"
        />
      </View>
      <Link href="/" style={styles.link}>Voltar para a raiz</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    width: 350,
    paddingBottom: 20,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,

  },
  cardWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  link: {
    fontSize: 17,
    color: 'white', // Altere para a cor do texto desejada
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
    width: '50%', // Ajuste a largura conforme necessário
    marginTop: 20,
    backgroundColor: 'black',
  },
});

export default App;