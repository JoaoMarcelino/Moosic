import React from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import FormButton from "../components/FormButton";
import HeaderBar from "../components/HeaderBar";
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
    console.log("add music", this.props.route.params);
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
    this.props.navigation.navigate("MyMusic");
  };

  removeMusic = (obj) => {
    this.props.route.params.context.removeMusic(obj);
  };

  render() {
    const { title, artist, album, year, musicList } = this.state;
    return (
      <SafeAreaView style={styles.safeView}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <ImageBackground
          source={require("../assets/400x800.png")}
          style={styles.backgroundImage}
        >
          <HeaderBar
            backgroundColor="#0D0D0D"
            title="Add Music"
            screenProps={this.props}
            addOnPress={null}
          />
          <View style={styles.container}>
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

              <FormButton
                onPress={() => {
                  if (
                    this.state.title != "" &&
                    this.state.album != "" &&
                    this.state.artist != ""
                  ) {
                    if (this.state.year.match(/^[0-9]+$/) != null) {
                      this.addMusic();
                    } else {
                      alert("Invalid input: Year must be a number");
                    }
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

  safeView: {
    flex: 1,
  },
});
