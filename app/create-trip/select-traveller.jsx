import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { CreateTripContext } from "@/context/CreateTripContext";
import { useNavigation, useRouter } from "expo-router";
import { useContext } from "react";
import { SelectTripType } from "@/constants/Options";
import OptionCard from "@/components/CreateTrip/OptionCard";

export default function SelectTraveller() {
  const navigation = useNavigation();
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState(null);
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    setTripData({ ...tripData, traveller: selectedOption });
  }, [selectedOption]);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

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
        Who's Travelling?
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
          Choose your trip type
        </Text>

        <FlatList
          data={SelectTripType}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedOption(item)}
              style={{ marginVertical: 12 }}
            >
              <OptionCard option={item} selectedTraveller={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        onPress={() => router.push("/create-trip/select-date")}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 16,
          marginTop: 12,
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
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
