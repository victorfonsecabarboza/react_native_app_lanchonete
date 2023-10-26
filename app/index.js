import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>AppLanchonete</Text>
      <Text style={styles.announced}>Tipos de listagens dos produtos:</Text>
      <Link href="/axios" style={styles.link}>Axios</Link>
      <Link href="/dropdown_picker" style={styles.link}>dropdown picker</Link>
      <Link href="/carousel" style={styles.link}>carousel</Link>
      <Link href="/flat_list" style={styles.link}>flatlist</Link>   
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    marginBottom: 50,
  },
  announced: {
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 10,
  },
  link: {
    fontSize: 20,
    color: 'white', // Altere para a cor do texto desejada
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
    width: '70%', // Ajuste a largura conforme necessário
    marginBottom: 15,
    backgroundColor: '#3498db'
  },

});
