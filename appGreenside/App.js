import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Estilos usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  textSubtitle: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 10,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  tabBarOptions: {
    backgroundColor: 'green', // Define a cor de fundo da barra
    activeTintColor: 'white', // Define a cor do texto e ícone ativos
    inactiveTintColor: 'gray', // Define a cor do texto e ícone inativos
  }
});

function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <CustomButton title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <CustomButton title="Go to Details... again" onPress={() => navigation.push('Details')} />
      <CustomButton title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <CustomButton title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textSubtitle}>Nome</Text>
      <Text style={styles.text}>Ana Camargo Drumond</Text>
      <Text style={styles.textSubtitle}>CPF</Text>
      <Text style={styles.text}>737.835.678-66</Text>
      <Text style={styles.textSubtitle}>Email</Text>
      <Text style={styles.text}>anacamargo@gmail.com</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;