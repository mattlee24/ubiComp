import React from "react";
import { Text, StyleSheet } from "react-native";

const MyComponent = () => {
    const helloWorldFunction = (wordOne, wordTwo) => {
        return `${wordOne} ${wordTwo}`
    }
    const helloWorld = helloWorldFunction("Hello","World")
    return <Text  style={styles.text}>{helloWorld}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
    }
})

export default MyComponent;