import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";

function home(props) {
  const [cateogaries, setCateogaries] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Call fetch here
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cateogaryContainer}>
        <ScrollView horizontal={true} style={styles.cateogaryContainer}>
          <TouchableOpacity style={styles.text}>
            <Text> camera</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.feed}></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  cateogaryContainer: {
    height: 70,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  text: {
    padding: 10,
    margin: 5,
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    borderRadius: 22,
    backgroundColor: "white",
  },
  feed: {
    backgroundColor: colors.white,
  },
});
export default home;
