import { View, Text, FlatList, ToastAndroid } from "react-native";
import { Colors } from "@/constants/Colors";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { CreateTripContext } from "@/context/CreateTripContext";
import { TouchableOpacity } from "react-native";
import { SelectBudgetOptions } from "@/constants/Options";
import OptionCard from "@/components/CreateTrip/OptionCard";

export default function SelectBudget() {
  const navigation = useNavigation();
  const router = useRouter();

  const { tripData, setTripData } = useContext(CreateTripContext);

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    selectedOption &&
      setTripData({ ...tripData, budget: selectedOption?.title });
  }, [selectedOption]);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  const onClickContinue = () => {
    if (!selectedOption) {
      ToastAndroid.show("Please select a budget", ToastAndroid.SHORT);
      return;
    }
    router.push("/create-trip/review-trip");
  };

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
        Budget
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
          Choose spending habits for your trips
        </Text>

        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setSelectedOption(item)}
              style={{ marginVertical: 12 }}
            >
              <OptionCard option={item} selectedOption={selectedOption} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        onPress={onClickContinue}
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
