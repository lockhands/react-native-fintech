import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MultiForm from './src/screens/SignUp/MultiForm';
import LoginScreen from './src/screens/LogIn/LoginScreen';
import Main from './src/screens/Main/Main';


export default function App() {
  return (
    <View style={styles.container}>
      <MultiForm />
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
});
