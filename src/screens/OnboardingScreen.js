import { View, Text, Button } from "react-native";

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Bienvenido a FINORA 💚
      </Text>
      <Text style={{ marginBottom: 20, textAlign: "center" }}>
        Tu dinero, claro y sin estrés.
      </Text>
      <Button
        title="Empezar"
        onPress={() => navigation.replace("Home")}
      />
    </View>
  );
}
