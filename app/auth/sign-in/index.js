import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSignIn = () => {
    if (!email && !password) {
      ToastAndroid.show("Please enter email and password", ToastAndroid.SHORT);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.replace("/mytrip");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);

        if (errorCode === "auth/invalid-credential") {
          ToastAndroid.show("Invalid credentials", ToastAndroid.SHORT);
        }
      });
  };

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
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        Welcome back
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          color: Colors.GRAY,
          marginTop: 10,
        }}
      >
        You've been missed!
      </Text>

      {/* Email  */}
      <View style={{ marginTop: 50 }}>
        <Text style={{ fontFamily: "outfit", fontSize: 16 }}>Email</Text>
        <TextInput
          onChangeText={(e) => setEmail(e)}
          style={styles.input}
          placeholder="Enter your email"
        />
      </View>
      {/* Password */}
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "outfit", fontSize: 16 }}>Password</Text>
        <TextInput
          onChangeText={(e) => setPassword(e)}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter your password"
        />
      </View>

      {/* Sign In Button */}
      <TouchableOpacity
        onPress={onSignIn}
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
          Sign In
        </Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity
        onPress={() => router.replace("/auth/sign-up")}
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
          Create Account
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
