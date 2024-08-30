import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "@/components/MyTrips/StartNewTripCard";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <View
      style={{
        padding: 24,
        paddingTop: 80,
        height: "100%",
        backgroundColor: Colors.WHITE,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
          My Trips
        </Text>
        <Ionicons name="add-circle-outline" size={30} color="black" />
      </View>

      {userTrips.length === 0 && <StartNewTripCard />}
    </View>
  );
}
