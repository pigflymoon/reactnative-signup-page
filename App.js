import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateAccountScreen from './components/CreateAccountScreen';

export default class App extends Component {
  render() {
    return (
      <View style={styles.application_wrapper}>
        <View style={styles.application_wrapper}>
            <CreateAccountScreen/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
