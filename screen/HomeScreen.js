import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  Animated,
  Text,
} from "react-native";
const { width, height } = Dimensions.get("window");
import TextButton from "../components/TextButton";
import { moviesData } from "../data/movies";
import MovieItem from "../components/MovieItem";
import { LinearGradient } from "expo-linear-gradient";
import YoutubePlayer from "react-native-youtube-iframe";

export default function App() {
  const [movies, setMovies] = React.useState([
    ...moviesData.filter((movie) => movie.status === "Showing"),
  ]);
  const [flag, setFlag] = React.useState(1);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  function renderMovieItem(itemData) {
    const item = itemData.item;
    const movieItemProps = {
      id: item.id,
      poster: item.poster,
      title: item.title,
      genres: item.genre,
      rating: item.rating,
      description: item.description,
    };
    return <MovieItem {...movieItemProps} />;
  }
  function changeMoviesHandler(data) {
    if (data === "Upcoming") {
      setMovies([...moviesData.filter((movie) => movie.status === data)]);
      setFlag(3);
    } else if (data === "HOT") {
      setMovies([
        ...moviesData.filter(
          (movie) => movie.rating >= 7.5 && movie.status === "Showing"
        ),
      ]);
      setFlag(2);
    } else {
      setMovies([...moviesData.filter((movie) => movie.status === data)]);
      setFlag(1);
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        
        <View style={styles.headerOuterContainer}>
          <View style={styles.headerContainer}>
            <TextButton
              style={flag === 1 ? styles.textWhite : styles.textGray}
              onPress={changeMoviesHandler.bind(this, "Showing")}
            >
              Đang chiếu
            </TextButton>
            <TextButton
              style={flag === 2 ? styles.textWhite : styles.textGray}
              onPress={changeMoviesHandler.bind(this, "HOT")}
            >
              HOT
            </TextButton>
            <TextButton
              style={flag === 3 ? styles.textWhite : styles.textGray}
              onPress={changeMoviesHandler.bind(this, "Upcoming")}
            >
              Sắp chiếu
            </TextButton>
          </View>
        </View>
        <View style={{ height: height }}>
          <View style={StyleSheet.absoluteFillObject}>
            {movies.map((item, index) => {
              const opacity = scrollX.interpolate({
                inputRange: [
                  (index - 1) * width,
                  index * width,
                  (index + 1) * width,
                ],
                outputRange: [0, 1, 0],
              });
              return (
                <Animated.Image
                  key={index}
                  source={{ uri: item.poster }}
                  style={[StyleSheet.absoluteFillObject, { opacity }]}
                />
              );
            })}
            <LinearGradient
              colors={["rgba(30, 30, 30, 0.2)", "rgba(30, 30, 30, 0.8)"]}
              style={{
                flex: 1,
              }}
            />
          </View>
          <Animated.FlatList
            data={movies}
            extraData={movies}
            keyExtractor={(item) => item.id.toString()}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            renderItem={renderMovieItem}
            pagingEnabled
            horizontal
          />
        </View>
        <View>
          <Text></Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <Image source={require("../assets/images/popcorn.png")} />
            <Text style={[styles.textWhite, { marginTop: 20 }]}>
              PEEKABO's Store
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 20,
            }}
          >
            <Image source={require("../assets/images/present.png")} />
            <Text style={[styles.textWhite, { marginTop: 20 }]}>
              PEEKABO's Gift
            </Text>
          </View>
        </View>
        <View
          style={{
            width,
            marginTop: 20,
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "rgba(20,20,20,1)",
            paddingVertical: 20,
            marginBottom: 100,
          }}
        >
          <Text style={[styles.textWhite, { marginBottom: 20 }]}>Video</Text>
          <FlatList
            data={moviesData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => {
              return (
                <View style={styles.videoContainer}>
                  <YoutubePlayer
                    play={false}
                    webViewProps={{
                      androidLayerType: "hardware",
                      androidHardwareAccelerationDisabled: true,
                      mixedContentMode: "always",
                      javaScriptEnabled: true,
                      domStorageEnabled: true,
                      startInLoadingState: true,
                      originWhitelist: ["*"],
                    }}
                    width={300}
                    height={170}
                    forceAndroidAutoplay
                    onFullScreenChange={true}
                    contentScale={0}
                    webViewStyle={{
                      width: 300,
                      height: 170,
                      alignSelf: "center",
                      borderRadius: 20,
                      marginBottom: 10,
                    }}
                    videoId={item.item.trailer}
                  />
                  <Text style={[styles.textWhite, { width: 300 }]}>
                    {item.item.title} TRAILER | Khởi chiếu:{" "}
                    {item.item.releaseDate}
                  </Text>
                </View>
              );
            }}
            horizontal
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  headerOuterContainer: {
    position: "absolute",
    top: height > 800 ? 100 : 80,
    zIndex: 1,

    width,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  icon: {
    fontSize: 32,
    color: "white",
    position: "absolute",
  },
  videoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  textWhite: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    letterSpacing: 1,
    fontSize: 14,
  },
  textGray: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ccc",
    letterSpacing: 1,
  },
});
