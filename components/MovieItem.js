import {
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import Genres from "./Genres";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const SPACING = 10;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.62 : width * 0.64;
function MovieItem({ id, poster, title, genres, description, rating }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: width,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("MovieDetails", { id })}
      >
        <View style={styles.container}>
          <Image source={{ uri: poster }} style={styles.posterImage} />
          <Text style={styles.textTitle} numberOfLines={2}>
            {title}
          </Text>
          <Genres genres={genres} />
          <Rating rating={rating} />
          <Text style={styles.textDescription} numberOfLines={3}>
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default MovieItem;
const styles = StyleSheet.create({
  container: {
    width: ITEM_SIZE,
    padding: SPACING,
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 20,
    marginTop: 10,
  },
  posterImage: {
    width: "100%",
    height: ITEM_SIZE * 1.2,
    resizeMode: "contain",
    borderRadius: 14,
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  textDescription: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
});
