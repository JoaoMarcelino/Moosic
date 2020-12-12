import React from "react";
import {
	FlatList,
	ImageBackground,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from "react-native";
import FormButton from "../components/FormButton";
import HeaderBar from "../components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { functions } from "firebase";


const ViewArtist = (navigation) => {
    let item = navigation.route.params.item;
    return (
        <View>
            <Text>{item.name}</Text>
        </View>
    );
};

 export default ViewArtist;