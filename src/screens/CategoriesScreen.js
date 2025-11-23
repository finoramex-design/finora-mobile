import { View, Text } from "react-native";

export default function CategoriesScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Categorías
      </Text>

      <Text style={{ marginTop: 20 }}>
        • Comida fuera{"\n"}
        • Apps de comida{"\n"}
        • Transporte{"\n"}
        • Servicios{"\n"}
        • Super{"\n"}
        • Otros
      </Text>
    </View>
  );
}
