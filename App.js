import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screen/HomeScreen";
import TicketScreen from "./screen/TicketScreen";
import MovieDetailScreen from "./screen/MovieDetailScreen";
import Ionic from "react-native-vector-icons/Ionicons";
import LocationScreen from "./screen/LocationScreen";
import UserScreen from "./screen/UserScreen";
import IconButton from "./components/IconButton";
import { Image } from "react-native";
import SearchScreen from "./screen/SearchScreen";
import SeatScreen from './screen/SeatScreen'

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "transparent",
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
            position: "absolute",
            borderTopColor: "transparent",
            height: 80,
            overflow: "hidden",
          },
          tabBarIcon: ({ focused, colour }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
              colour = focused && "#ffffff";
            } else if (route.name === "MyTickets") {
              iconName = focused ? "film" : "film-outline";
              colour = focused && "#ffffff";
            } else if (route.name === "Location") {
              iconName = focused ? "location" : "location-outline";
              colour = focused && "#ffffff";
            } else if (route.name === "User") {
              iconName = focused ? "person" : "person-outline";
              colour = focused && "#ffffff";
            }
            return (
              <>
                <Ionic
                  name={iconName}
                  style={{ top: 5 }}
                  size={25}
                  color={colour ? colour : "#ffffff40"}
                />
                <Ionic
                  name="remove-outline"
                  style={{ display: colour ? "flex" : "none", left: 1 }}
                  size={20}
                  color={colour ? colour : "transparent"}
                />
              </>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Location" component={LocationScreen} />
        <Tab.Screen name="MyTickets" component={TicketScreen} />
        <Tab.Screen name="User" component={UserScreen}/>
       
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
     
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{
            headerTransparent: true,
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerTitle: () => {
              return (
                <Image
                  source={require("./assets/images/logo.png")}
                  style={{ position: "absolute" }}
                ></Image>
              );
            },
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <IconButton icon="person-circle" color={"white"} size={32} 
                onPress={() => navigation.navigate("User")}/>
              );
            },
            headerRight: () => {
              const navigation = useNavigation();
              return (
                <IconButton
                  icon={"search"}
                  color={"white"}
                  size={32}
                  onPress={() => navigation.navigate("SearchScreen")}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailScreen}
          options={{
            headerTransparent: true,
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerRight: () => {
              return <IconButton icon={"heart"} color={"white"} size={32} />;
            },
          }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            headerTransparent: true,
            title: "Search",
            headerBackTitleVisible: false,
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
          
        />
         <Stack.Screen
          name="User"
          component={UserScreen}
          options={{
            headerTransparent: true,
            title: 'Account',
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          }}
          />
        
        <Stack.Screen
          name="SeatScreen"
          component={SeatScreen}
          options={{
            headerTransparent: true,
            title: 'Chọn ghế',
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
