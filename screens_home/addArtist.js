import React from "react";
import {
  FlatList,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import FormButton from "../components/FormButton";
import HeaderBar from "../components/HeaderBar";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const initial_state = {
  name: "",
  loading: false,
  artistList: null,
};

class AddArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initial_state };
    this.context = this.props.route.params.context;
    console.log("add artist", this.context);
  }

  componentDidMount() {
    let artistList = [];
    let object = {};
    this.setState({ loading: true });
    console.log(this.props.route.params.context.artists());
    this.props.route.params.context.artists().then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        object = doc.data();
        object.id = doc.id;
        artistList.push(object);
      });
      this.setState({ artistList });
      this.setState({ loading: false });
    });
  }

  addArtist = () => {
    //console.log(this.props.route.params.context);
    const { name } = this.state;
    let obj = { name };
    this.props.route.params.context.addArtist(obj);
    this.props.navigation.navigate("MyArtists");
  };

  removeMusic = (obj) => {
    this.props.route.params.context.removeArtist(obj);
  };

  render() {
    const { name, artistList } = this.state;
    return (
      <SafeAreaView style={styles.safeView}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <ImageBackground
          source={require("../assets/400x800.png")}
          style={styles.backgroundImage}
        >
          <HeaderBar
            backgroundColor="#0D0D0D"
            title="Add Artist"
            screenProps={this.props}
            addOnPress={null}
          />
          <View style={styles.container}>
            <View style={styles.form}>
              <TextInput
                style={styles.inputForm}
                name="Name"
                placeholder="Name"
                placeholderStyle={styles.inputFormText}
                placeholderTextColor="#0D0D0D"
                onChangeText={(text) => (this.state.name = text)}
                defaultValue={name}
              />

              <FormButton
                onPress={() => {
                  if (this.state.name != "") {
                    this.addArtist();
                  } else {
                    alert("Invalid input: There are empty fields");
                  }
                }}
                buttonTitle="Add"
              />
            </View>

            <View style={{ flex: 1 }} />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default AddArtist;

//No font on placeholders cause of a react bug
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },

  container: {
    flex: 1,
    alignItems: "center",
  },

  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  inputForm: {
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    borderColor: "#0D0D0D",
    borderStyle: "solid",
    borderWidth: 3,
    height: 57,
    width: 330,
    paddingLeft: 16,
    fontSize: 16,
    lineHeight: 19,
  },

  safeView: {
    flex: 1,
  },
});
