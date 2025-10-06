import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from "react-native";

export default function Login({ navigation }) {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const verificarLogin = () => {
    if (correo === 'admin@gmail.com' && contrasenia === '123') {
      navigation.replace('Home'); 
    } else {
      console.log("Error de acceso: Credenciales inválidas.");
    }
  };
  
  return (
    <ScrollView 
      style={styles.contenedor}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.contenidoCentrado}>
        <Text style={styles.titulo}>Login</Text>
        
        <TextInput 
          style={styles.input}
          placeholder="Correo Electrónico"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput 
          style={styles.input}
          placeholder="Contraseña"
          value={contrasenia}
          onChangeText={setContrasenia}
          secureTextEntry={true} 
        />
        
        <TouchableOpacity style={styles.boton} onPress={verificarLogin}>
          <Text style={styles.botonTexto}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1, 
    paddingHorizontal: 20, 
    backgroundColor: '#fbcefbff',
  },
  
  scrollContent: {
    flexGrow: 1, 
  },
  
  contenidoCentrado: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#f483f4ff',
    borderRadius: 8,
    width: '60%', 
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'white',
    fontSize: 16,
  },
  
  boton: {
    backgroundColor: '#f483f4ff',
    width: '60%', 
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  
  botonTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});