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
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const initial_state = {
  title: "",
  artist: "",
  year: "",
  loading: false,
  albumList: null,
};

class AddAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initial_state };
    this.context = this.props.route.params.context;
    console.log("add album", this.context);
  }

  componentDidMount() {
    let albumList = [];
    let object = {};
    this.setState({ loading: true });
    console.log(this.props.route.params.context.albums());
    this.props.route.params.context.albums().then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        object = doc.data();
        object.id = doc.id;
        albumList.push(object);
      });
      this.setState({ albumList });
      this.setState({ loading: false });
    });
  }

  addAlbum = () => {
    //console.log(this.props.route.params.context);
    const { title, artist, year } = this.state;
    let obj = { title, artist, year };
    this.props.route.params.context.addAlbum(obj);
  };

  removeMusic = (obj) => {
    this.props.route.params.context.removeAlbum(obj);
  };

  render() {
    const { title, artist, year, albumList } = this.state;
    return (
      <SafeAreaView style={styles.safeView}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <ImageBackground
          source={require("../assets/400x800.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            <View style={styles.pageHeader}>
              <TouchableOpacity
                style={styles.crossmark}
                onPress={() => {
                  this.props.navigation.navigate("MyAlbums");
                }}
              >
                <FontAwesome name={"times"} size={24} color={"#0D0D0D"} />
              </TouchableOpacity>
              <Text style={styles.pageHeaderText}>Add Album</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.inputForm}
                name="Title"
                placeholder="Title"
                placeholderStyle={styles.inputFormText}
                placeholderTextColor="#0D0D0D"
                onChangeText={(text) => (this.state.title = text)}
                defaultValue={title}
              />

              <TextInput
                style={styles.inputForm}
                name="Artist"
                placeholder="Artist"
                placeholderTextColor="#0D0D0D"
                onChangeText={(text) => (this.state.artist = text)}
                defaultValue={artist}
              />

              <TextInput
                name="Year"
                style={styles.inputForm}
                placeholder="Year"
                placeholderTextColor="#0D0D0D"
                onChangeText={(text) => (this.state.year = text)}
                defaultValue={year}
              />

              <FormButton onPress={this.addAlbum} buttonTitle="Add" />
            </View>

            <View style={{ flex: 1 }} />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default AddAlbum;

//No font on placeholders cause of a react bug
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },

  container: {
    flex: 1,
    alignItems: "center",
    padding: 36,
  },

  form: {
    flex: 2,
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

  pageHeader: {
    flexDirection: "row",
    backgroundColor: "#F2F2F2",
    borderRadius: 40,
    borderColor: "#0D0D0D",
    borderStyle: "solid",
    borderWidth: 3,
    height: 57,
    width: 330,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  pageHeaderText: {
    fontFamily: "Courier Prime Bold",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 36,
    lineHeight: 40,
    color: "#358C7C",
  },

  safeView: {
    flex: 1,
  },
});
