import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Navigation from './utils/Navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default App;
