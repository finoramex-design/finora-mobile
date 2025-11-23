import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function AddExpenseScreen() {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Nuevo gasto</Text>

      <TextInput
        placeholder="Monto"
        keyboardType="numeric"
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        placeholder="Descripción"
        style={{ borderWidth: 1, marginVertical: 10, padding: 10 }}
        value={desc}
        onChangeText={setDesc}
      />

      <Button title="Guardar" onPress={() => alert("Guardado")} />
    </View>
  );
}
