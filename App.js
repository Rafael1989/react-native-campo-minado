import React, { Component } from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';


import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import params from './src/params';
import Field from './src/components/Field'




const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
  },
  welcome: {
    position: 'absolute',
    right: 0,
  },
  instructions: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines</Text>
        <Text style={styles.instructions}>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={6} />
        <Field mined />
        <Field mined opened/>
        <Field mined opened exploded/>
      </View>
    )
  }
}
