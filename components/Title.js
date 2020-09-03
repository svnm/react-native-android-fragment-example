import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#61dafb",
  },
});
