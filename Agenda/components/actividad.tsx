import { View, Text, Button } from "react-native";

interface ActividadItem {
  id: number;
  descripcion: string;
  completado: boolean;
}

interface ActividadProps {
  actividad: ActividadItem;
  borrarActividad: (id: number) => void;
  completarActividad: (id: number) => void;
}

export default function Actividad({ actividad, borrarActividad, completarActividad }: ActividadProps) {
  return (
    <View>
      <Text style={{ textDecorationLine: actividad.completado ? 'line-through' : 'none' }}>
        {actividad.descripcion}
      </Text>
      <Button
        title={actividad.completado ? 'completado' : 'sin completar'}
        onPress={() => completarActividad(actividad.id)}
        color="#efb8c2ff"
      />
      <Button
        title="Eliminar"
        onPress={() => borrarActividad(actividad.id)}
        color="#f3a2b0ff"
      />
    </View>
  );
}