import React from "react";
import { StyleSheet, SafeAreaView, Image, Text } from "react-native";

import colors from "./config/colors";
import fonts from "./config/fonts";

function AppLoading(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("./assets/logo.png")} />
      <Text style= {styles.text}> Done With it</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
      fontSize: 30,
      fontWeight: "bold",
      color: "white",
      bottom: 50,
      position: "absolute",
      fontFamily: fonts.primary
  }
});

export default AppLoading;
