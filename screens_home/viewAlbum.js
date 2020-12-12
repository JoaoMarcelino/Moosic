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


const ViewAlbum = (item) => {
    return (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.artist}</Text>
            <Text>{item.album}</Text>
        </View>
    );
};

 export default ViewAlbum;