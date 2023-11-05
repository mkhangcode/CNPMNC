import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchFilter from "../components/SearchFilter";
const { width, height } = Dimensions.get("window");

const SearchScreen = ({ navigation }) => {
  const [searchList, setSearchList] = useState([]);
  const [input, setInput] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.contentSearchContainer}>
          <Ionicons name="search-outline" style={styles.iconSearch} />
          <TextInput
            placeholder="Tìm kiếm phim"
            placeholderTextColor="gray"
            color="white"
            value={input}
            onChangeText={(text) => setInput(text)}
            style={styles.txtInputSearch}
          />
        </View>
      </View>
      <SearchFilter input={input} setInput={setInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  searchContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    paddingHorizontal: 20,
  },
  contentSearchContainer: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignItems: "center",
    borderRadius: 10,
  },
  iconSearch: {
    fontSize: 22,
    color: "white",
    opacity: 0.8,
    paddingHorizontal: 20,
  },
  txtInputSearch: {
    width: "75%",
  },
});

export default SearchScreen;
