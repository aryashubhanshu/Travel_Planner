import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={{
        padding: 24,
        paddingTop: 80,
        height: "100%",
        backgroundColor: Colors.WHITE,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={Colors.PRIMARY} />
      </TouchableOpacity>

      <Text style={{ fontFamily: "outfit-bold", fontSize: 30, marginTop: 20 }}>
        Create New Account
      </Text>

      {/* Name  */}
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "outfit", fontSize: 16 }}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter your name" />
      </View>
      {/* Email  */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit", fontSize: 16 }}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />
      </View>
      {/* Password */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit", fontSize: 16 }}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter your password"
        />
      </View>

      {/* Create Account Button */}
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 16,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
            fontFamily: "outfit",
          }}
        >
          Create Account
        </Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-in")}
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 16,
          marginTop: 20,
          borderWidth: 1,
          borderColor: Colors.PRIMARY,
        }}
      >
        <Text
          style={{
            color: Colors.PRIMARY,
            textAlign: "center",
            fontFamily: "outfit",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 16,
    fontSize: 16,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
    marginTop: 10,
  },
});
