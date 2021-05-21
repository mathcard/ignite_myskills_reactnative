import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textSkill: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonSkill: {
    color: "#FFF",
    backgroundColor: "#1F1E25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 20,
  },
});
