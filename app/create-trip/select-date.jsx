import { View, Text, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation, useRouter } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import { CreateTripContext } from "@/context/CreateTripContext";
import { TouchableOpacity } from "react-native";
import moment from "moment";

export default function SelectDate() {
  const navigation = useNavigation();
  const router = useRouter();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState(null);

  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onDateChange = (date, type) => {
    if (type === "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const onDateSelectionContinue = () => {
    if (!startDate || !endDate) {
      ToastAndroid.show("Please select date", ToastAndroid.SHORT);
      return;
    }

    const totalNoOfDays = endDate.diff(startDate, "days") + 1;

    setTripData({ ...tripData, startDate, endDate, totalNoOfDays });
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
        Travel Dates
      </Text>

      <View style={{ marginTop: 20 }}>
        <CalendarPicker
          allowRangeSelection={true}
          onDateChange={onDateChange}
          minDate={new Date()}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextStyle={{ color: Colors.WHITE }}
        />
      </View>

      <TouchableOpacity
        onPress={onDateSelectionContinue}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 16,
          marginTop: 28,
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
