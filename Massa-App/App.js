import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.massaheading}>MASSA</Text>
        <Text style={styles.byscore}>By SCoRe</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  massaheading: {
    color: '#00DAFD',
    fontSize: 84,
    fontWeight: 'bold',
    ...Platform.select({
      ios:{
        fontFamily: 'Avenir Next Condensed',
      },
      android:{
        fontFamily: 'sans-serif-condensed',
      },
    }),
  },
  byscore: {
    color: '#fff',
    alignSelf: 'flex-end',
    fontSize: 20,
    marginRight: 30,
    marginTop: -20,
  }
});
