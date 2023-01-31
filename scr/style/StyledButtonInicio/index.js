import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const StyledButton = (props) => {
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#4ab7b6" : "#000080";
  const textColor = type === "primary" ? "#FFFFFF" : "white";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
