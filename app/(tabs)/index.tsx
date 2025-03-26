import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link style={styles.link} href="/about">
        Go to about screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "papayawhip",
  },
  link: {
    color: "papayawhip",
    textDecorationLine: "underline",
  },
});
