import { View, Text } from "react-native";
import { spacing, colors } from "../theme";

export default function ExpenseItem({ description, amount }) {
  return (
    <View
      style={{
        paddingVertical: spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: "#E9E9E9",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 16 }}>{description}</Text>
      <Text style={{ fontSize: 16, fontWeight: "600", color: colors.primary }}>
        ${amount}
      </Text>
    </View>
  );
}
