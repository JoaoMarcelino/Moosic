import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const FormInput = ({ placeholderText, labelValue, ...rest }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        numberOfLines={1}
        labelValue={labelValue}
        placeholder={placeholderText}
        placeholderTextColor="rgba(13,13,13,0.8)"
        {...rest}
      />
    </View>
  );
};
export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    borderColor: "#0D0D0D",
    borderStyle: "solid",
    borderWidth: 3,
    width: "70%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    fontFamily: "Inter Regular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#0D0D0D",
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
