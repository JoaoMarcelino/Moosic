import React from "react";
import { StatusBar, Text, View, StyleSheet, FlatList } from "react-native";
import FormButton from "../components/FormButton";

const INITIAL_STATE = {
  title: "Africa",
  artist: "Toto",
  album: "Toto IV",
  loading: false,
  musicList: null,
};

class MyMusic extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    this.willFocusListener = this.props.navigation.addListener("focus", () => {
      this.componentWillFocus();
    });
  }

  componentWillFocus() {
    this.updateMusic2();
  }
  updateMusic2() {
    let musicList = [];
    let object = {};
    console.log(this.props.route.params.context.musics());
    this.props.route.params.context.musics().then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        object = doc.data();
        object.id = doc.id;
        musicList.push(object);
      });
      this.setState({ musicList });
    });

    console.log(musicList);
  }

  updateMusic(item) {
    this.props.route.params.context.removeMusic(item);
    let musicList = [];
    let object = {};
    console.log(this.props.route.params.context.musics());
    this.props.route.params.context.musics().then((querySnapshot) => {
      querySnapshot.forEach(function (doc) {
        object = doc.data();
        object.id = doc.id;
        if (object.id != item.id) {
          musicList.push(object);
        }
      });
      this.setState({ musicList });
    });

    console.log(musicList);
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

  render() {
    const { musicList } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Text>My Music</Text>
        <FormButton
          onPress={() =>
            this.props.navigation.navigate("AddMusic", { musicList })
          }
        />
        <FlatList
          data={musicList}
          extraData={musicList}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.item}>
                {item.title} by {item.artist}
              </Text>
              <View style={styles.form}>
                <FormButton
                  onPress={() => {
                    this.updateMusic(item);
                  }}
                  buttonTitle="Remove"
                />
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

export default MyMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
