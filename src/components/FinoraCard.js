import { View, Text } from "react-native";
import { colors, spacing } from "../theme";

export default function FinoraCard({ title, children }) {
  return (
    <View
      style={{
        backgroundColor: colors.card,
        padding: spacing.md,
        borderRadius: 12,
        marginVertical: spacing.sm,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
      }}
    >
      {title && (
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: spacing.sm }}>
          {title}
        </Text>
      )}
      {children}
    </View>
  );
}
