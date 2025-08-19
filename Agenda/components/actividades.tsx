import { useState } from "react";
import { Text, TextInput, View, Button, StyleSheet } from "react-native";
import Actividad from "./actividad";

interface ActividadItem {
  id: number;
  descripcion: string;
  completado: boolean;
}

export default function Actividades() {
  const [actividades, setActividades] = useState<ActividadItem[]>([
    { id: 1, descripcion: 'la. Cátedra de Ingenieria', completado: true },
    { id: 2, descripcion: 'Plática de Servicio social', completado: false },
    { id: 3, descripcion: 'Baja de materias AGO-DIC 2024', completado: false },
    { id: 4, descripcion: 'Coreografia de taller de baile', completado: false },
    { id: 5, descripcion: 'Tarea de programación móvil', completado: false },
  ]);

  const [descripcion, setDescripcion] = useState<string>("");

  function agregarActividad() {
    const nuevaActividad: ActividadItem = { id: Date.now(), descripcion, completado: false };
    setActividades([...actividades, nuevaActividad]);
    setDescripcion('');
  }

  function borrarActividad(id: number) {
    setActividades(actividades.filter(elemento => elemento.id !== id));
  }

  function completarActividad(id: number) {
    setActividades(actividades.map(elemento => (
      elemento.id === id ?
      { ...elemento, completado: !elemento.completado } :
      elemento
    )));
  }

  return (
    <View style={{paddingTop: 80, padding:30}}>
      <Text style={{ fontSize: 25 }}>
        Agenda Universitaria
      </Text>

      <TextInput
        style={styles.input}
        value={descripcion} 
        onChangeText={setDescripcion}
        placeholder="Nueva actividad"
      />
      
      <Button title="Agregar Actividad" onPress={agregarActividad} color="#e53956ff"/>

      <Text style={{ fontSize: 20, paddingTop: 40 }}>
        Lista de actividades
      </Text>
      
      {actividades.map(elemento => (
        <Actividad
          key={elemento.id}
          actividad={elemento}
          borrarActividad={borrarActividad}
          completarActividad={completarActividad}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  listTitle: {
    fontSize: 20,
    paddingTop: 10,
    marginBottom: 10,
  },
});