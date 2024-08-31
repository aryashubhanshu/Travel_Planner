import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { CreateTripContext } from "@/context/CreateTripContext";
import moment from "moment";
import { TouchableOpacity } from "react-native";

export default function ReviewTrip() {
  const navigation = useNavigation();

  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  return (
    <View
      style={{
        padding: 24,
        paddingTop: 100,
        height: "100%",
        backgroundColor: Colors.WHITE,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          marginTop: 16,
        }}
      >
        Review your trip
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
          Review your trip before generating.
        </Text>
      </View>

      {/* Destination info */}
      <View
        style={{
          marginTop: 40,
          display: "flex",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <Text style={{ fontSize: 32 }}>📍</Text>

        <View>
          <Text
            style={{ fontFamily: "outfit", fontSize: 20, color: Colors.GRAY }}
          >
            Destination
          </Text>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            {tripData?.locationInfo?.name}
          </Text>
        </View>
      </View>

      {/* Date Selected info */}
      <View
        style={{
          marginTop: 24,
          display: "flex",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <Text style={{ fontSize: 32 }}>📅</Text>

        <View>
          <Text
            style={{ fontFamily: "outfit", fontSize: 20, color: Colors.GRAY }}
          >
            Travel Date
          </Text>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            {moment(tripData?.startDate).format("DD MMM") +
              " to " +
              moment(tripData?.endDate).format("DD MMM")}{" "}
            ({tripData?.totalNoOfDays}{" "}
            {tripData?.totalNoOfDays > 1 ? "days" : "day"})
          </Text>
        </View>
      </View>

      {/* Travellers info */}
      <View
        style={{
          marginTop: 24,
          display: "flex",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <Text style={{ fontSize: 32 }}>🚎</Text>

        <View>
          <Text
            style={{ fontFamily: "outfit", fontSize: 20, color: Colors.GRAY }}
          >
            Who is travelling?
          </Text>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            {tripData?.traveller?.title}
          </Text>
        </View>
      </View>

      {/* Budget info */}
      <View
        style={{
          marginTop: 24,
          display: "flex",
          flexDirection: "row",
          gap: 20,
        }}
      >
        <Text style={{ fontSize: 32 }}>💰</Text>

        <View>
          <Text
            style={{ fontFamily: "outfit", fontSize: 20, color: Colors.GRAY }}
          >
            Budget
          </Text>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            {tripData.budget}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 16,
          marginTop: 60,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "outfit-medium",
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          Build my trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
