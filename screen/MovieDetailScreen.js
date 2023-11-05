import { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import * as React from "react";
import { moviesData } from "../data/movies";
const { width, height } = Dimensions.get("window");
import YoutubePlayer from "react-native-youtube-iframe";
import { LinearGradient } from "expo-linear-gradient";
import ButtonPlayVideo from "../components/ButtonPlayVideo";
import MovieDetail from "../components/MovieDetail";
import ButtonCustom from "../components/ButtonCustom";



const timeArray = ["10:30", "12:30", "14:30", "15:00", "19:30", "21:00"];

const generateDate = () => {
  const date = new Date();
  let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekdays = [];
  for (let i = 0; i < 7; i++) {
    let tempDate = {
      date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
      day: weekday[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()],
    };
    weekdays.push(tempDate);
  }
  return weekdays;
};

const MovieDetailScreen = ({ route, navigation }) => {
  const [dateArray, setDateArray] = useState(generateDate());
  const [selectedDateIndex, setSelectedDateIndex] = useState();
  const [selectedTimeIndex, setSelectedTimeIndex] = useState();
  const movieId = route.params.id;
  const selectMovie = moviesData.find((movie) => movie.id === movieId);
  const [playing, setPlaying] = React.useState(false);

  const togglePlaying = React.useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);




   
  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            width,
            height: height > 800 ? height * 0.35 : height * 0.45,

            position: "relative",
          }}
        >
          <Image
            source={{ uri: selectMovie.poster }}
            style={styles.posterImage}
          />
          <ButtonPlayVideo
            onPress={togglePlaying}
            style={{
              zIndex: 2,
              top: height > 800 ? 150 : 200,
              width,
              flexDirection: "row",
              justifyContent: "center",
            }}
          />

          <LinearGradient
            colors={["rgba(30,30,30,0.5)", "rgba(30, 30, 30, 1)"]}
            style={{
              width: "100%",
              height: height,
              position: "absolute",
            }}
          />
        </View>
        <YoutubePlayer
          play={playing}
          webViewProps={{
            allowsInlineMediaPlayback: false,
            androidLayerType: "hardware",
            androidHardwareAccelerationDisabled: true,
            mixedContentMode: "always",
            javaScriptEnabled: true,
            domStorageEnabled: true,
            startInLoadingState: true,
            originWhitelist: ["*"],
            flex: 1,
          }}
          forceAndroidAutoplay
          onFullScreenChange={true}
          webViewStyle={{
            height: height,
            width,
            opacity: 0,
            position: "absolute",
          }}
          videoId={selectMovie.trailer}
        />
        <MovieDetail
          title={selectMovie.title}
          releaseDate={selectMovie.releaseDate}
          genres={selectMovie.genre}
          ageRequired={selectMovie.ageRequired}
          time={selectMovie.time}
          description={selectMovie.description}
          censorship={selectMovie.censorship}
          language={selectMovie.language}
          director={selectMovie.director}
          actor={selectMovie.actor}
        />

        {selectMovie.status === "Showing" ? (
          <View style={{ marginTop: 20, position: "relative" }}>
            <Text
              style={{
                color: "#FF5524",
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 16,
              }}
            >
              Xuất chiếu
            </Text>
            <FlatList
              data={dateArray}
              keyExtractor={(item) => item.date}
              horizontal
              bounces={false}
              contentContainerStyle={styles.containerGap24}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity onPress={() => setSelectedDateIndex(index)}>
                    <View
                      style={[
                        styles.dateContainer,
                        index == 0
                          ? { marginLeft: 24 }
                          : index == dateArray.length - 1
                          ? { marginRight: 24 }
                          : {},
                        index == selectedDateIndex
                          ? { backgroundColor: "#FF5524" }
                          : {},
                      ]}
                    >
                      <Text style={styles.dateText}>{item.date}</Text>
                      <Text style={styles.dayText}>{item.day}</Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
            <View style={styles.outterContainer}>
              <FlatList
                data={timeArray}
                keyExtractor={(item) => item}
                horizontal
                bounces={false}
                contentContainerStyle={styles.containerGap24}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setSelectedTimeIndex(index)}
                    >
                      <View
                        style={[
                          styles.timeContainer,
                          index == 0
                            ? { marginLeft: 24 }
                            : index == dateArray.length - 1
                            ? { marginRight: 24 }
                            : {},
                          index == selectedTimeIndex
                            ? { backgroundColor: "#FF5524" }
                            : {},
                        ]}
                      >
                        <Text style={styles.timeText}>{item}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
              <ButtonCustom id={movieId}>Đặt vé</ButtonCustom>
            </View>
          </View>
        ) : (
          <Text
            style={{
              color: "#FF5524",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 20,
              fontSize: 16,
            }}
          >
            SẮP DIỄN RA
          </Text>
        )}
      </ScrollView>
    </View>
  );
};
export default MovieDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    padding: 0,
  },
  posterImage: {
    width: "100%",
    height: height,
    resizeMode: "cover",
    position: "absolute",
  },
  containerGap24: {
    gap: 24,
  },
  dateContainer: {
    width: 70,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#0b0b0b",
    alignItems: "center",
    justifyContent: "center",
  },
  dateText: {
    fontSize: 24,
    color: "white",
  },
  dayText: {
    fontSize: 12,
    color: "white",
  },
  outterContainer: {
    marginVertical: 24,
  },
  timeContainer: {
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.50)",
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#0b0b0b",
    alignItems: "center",
    justifyContent: "center",
  },
  timeText: {
    fontSize: 14,
    color: "white",
  },
});
