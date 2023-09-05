import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors, font } from "../Global/theme";

const AddButton = ({
  title = "",
  onPress = () => { },
  color = colors.quaternary,
}) => {
  return (
    <Pressable
      style={{ ...styles.button, backgroundColor: color }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    width: "80%",
    borderWidth: 1,
    backgroundColor: colors.tertiary,
    justifyContent: "center",
    alignItems: "center",
    padding: 8
  },
  text: {
    fontFamily: font.buttonFont,
    fontSize: 18,
    color: colors.primary,
  },
});
