import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";

// Criando interface para receber as propriedades do botão com ...rest
// Criando propriedade title
interface ButtonProps extends TouchableOpacityProps {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
