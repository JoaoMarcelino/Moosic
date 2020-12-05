import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
  TextInput,
} from "react-native";
import FormButton from "../components/FormButton";
import { SafeAreaView } from "react-native-safe-area-context";

const initial_state = {
  title: "",
  artist: "",
  album: "",
  year: "",
  loading: false,
  musicList: null,
};

class AddMusic extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initial_state };
    this.context = this.props.route.params.context;
    console.log("add music", this.context);
  }

  componentDidMount() {
    let musicList = [];
    let object = {};
    this.setState({ loading: true });
    console.log(this.props.route.params.context.musics());
    this.props.route.params.context.musics().then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        object = doc.data();
        object.id = doc.id;
        musicList.push(object);
      });
      this.setState({ musicList });
      this.setState({ loading: false });
    });
  }

  addMusic = () => {
    //console.log(this.props.route.params.context);
    const { title, artist, album } = this.state;
    let obj = { title, artist, album };
    this.props.route.params.context.addMusic(obj);
  };

  removeMusic = (obj) => {
    this.props.route.params.context.removeMusic(obj);
  };

  render() {
    const { title, artist, album, year, musicList } = this.state;
    return (
      <View sytle={styles.containerNotRetarded}>
        <ImageBackground
          source={require("../assets/400x800.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.containerNotRetarded}>
            <View style={styles.pageHeader}>
              <Text style={styles.pageHeaderText}>Add Music</Text>
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
                style={styles.inputForm}
                name="Album"
                placeholder="Album"
                placeholderStyle={styles.inputFormText}
                placeholderTextColor="#0D0D0D"
                onChangeText={(text) => (this.state.album = text)}
                defaultValue={album}
              />

              <TextInput
                name="Year"
                style={styles.inputForm}
                placeholder="Year"
                placeholderTextColor="#0D0D0D"
                onChangeText={(text) => (this.state.year = text)}
                defaultValue={year}
              />

              <FormButton onPress={this.addMusic} buttonTitle="Add" />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default AddMusic;

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
  containerNotRetarded: {
    flex: 1,
    justifyContent: "center",
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

  pageHeader: {
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
