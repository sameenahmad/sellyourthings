import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import colors from "./config/colors";

import color from "./config/colors";

function login(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./assets/logo_red.png")}
      ></Image>

      <View style={styles.subContainer}>
        <TextInput
          style={styles.input}
          placeholder="sellyourthings@gmail.com"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="******"
          onChangeText={(password) => setPassword(password)}
          value={password}
        />

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 30,
  },
  input: {
    borderRadius: 22,
    backgroundColor: color.secondary,
    padding: 16,
    margin: 8,
  },
  loginBtn: {
    borderRadius: 22,
    margin: 10,
    backgroundColor: colors.primary,
    padding: 12,
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 17,
  },
  registerBtn: {
    borderRadius: 22,
    backgroundColor: colors.white,
    padding: 12,
  },
  registerText: {
    color: colors.primary,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 17,
  },

  subContainer: {
    width: "95%",
    margin: 17,
  },
});
