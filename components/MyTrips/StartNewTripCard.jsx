import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function StartNewTripCard() {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={{ fontSize: 24, fontFamily: "outfit-medium" }}>
        No trips planned yet!
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: "outfit",
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        Looks like its time to plan a new travel experience! Get started below
      </Text>

      <TouchableOpacity
        style={{
          padding: 14,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          paddingHorizontal: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            color: Colors.WHITE,
            fontSize: 16,
          }}
        >
          Start a new trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
