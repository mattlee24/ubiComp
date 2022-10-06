import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './MyCustomComponent';
import MyNameComponent from './MyNameComponent';
import AnotherLineComponent from './AnotherLineComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text >Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <MyComponent />
      <View style={{flexDirection: "row"}}>
        <MyNameComponent />
        <AnotherLineComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50
  }
});
