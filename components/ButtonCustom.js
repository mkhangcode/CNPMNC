import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";



function ButtonCustom({ children, style, onPress, id,  }) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("SeatScreen" ,   {id})} style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ButtonCustom;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF5524",
    borderRadius: 10,
    paddingVertical: 20,
    marginBottom: 50,
    marginTop: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.4,
    fontSize: 14,
    textAlign: "center",
  },
});
