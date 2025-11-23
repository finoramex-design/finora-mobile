import { View, Text, Button } from "react-native";

export default function DashboardScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>
        Tu quincena
      </Text>

      <Text style={{ fontSize: 18, marginTop: 20 }}>
        Ingreso: $8,000
      </Text>
      <Text style={{ fontSize: 18 }}>
        Gastado: $2,500
      </Text>
      <Text style={{ fontSize: 18 }}>
        Disponible: $5,500
      </Text>

      <Button
        title="Agregar gasto"
        onPress={() => navigation.navigate("Gasto")}
      />
    </View>
  );
}
