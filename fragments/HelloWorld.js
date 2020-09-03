import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "../components/Title";

export default function HelloWorld() {
  return (
    <View style={styles.container}>
      <Title title="Hello World" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#20232a",
  },
});

/*
alignItems: "center",
flex: 1,
flexDirection: "column",
height: "100%",
justifyContent: "space-between",
width: "100%",
*/
