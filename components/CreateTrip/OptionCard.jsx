import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function OptionCard({ option, selectedOption }) {
  return (
    <View
      style={[
        {
          padding: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 1,
          borderRadius: 16,
        },
        selectedOption?.id === option?.id && { borderWidth: 3 },
      ]}
    >
      <View>
        <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>
          {option.title}
        </Text>
        <Text
          style={{ fontSize: 16, fontFamily: "outfit", color: Colors.GRAY }}
        >
          {option.desc}
        </Text>
      </View>
      <Text style={{ fontSize: 36, fontFamily: "outfit", color: Colors.GRAY }}>
        {option.icon}
      </Text>
    </View>
  );
}
