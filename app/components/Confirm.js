import React from "react";
import { Alert } from "react-native";

const Confirm = (props) => {
  const { title, message, action } = props;

  Alert.alert(
    title,
    message,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel"),
        style: "cancel",
      },
      { text: "OK", onPress: action },
    ],
    { cancelable: false }
  );
};

export default Confirm;