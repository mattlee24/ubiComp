import React from "react";
import { Text } from "react-native";

const MyNameComponent = () => {
    const myNameFunction = (firstName, Lastname) => {
        return `${firstName} ${Lastname}`
    }
    const Myname = myNameFunction("Matt","Lee")
    return <Text>{Myname}. </Text>;
};

export default MyNameComponent;