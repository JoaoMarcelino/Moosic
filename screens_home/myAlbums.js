import React from "react";
import { StatusBar, Text, View, StyleSheet, FlatList } from "react-native";
import FormButton from "../components/FormButton";
const initial_state = {
  title: "",
  artist: "",
  year: "",
  loading: false,
  albumList: null,
};

class MyAlbums extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initial_state };
    this.context = this.props.route.params.context;
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

  render() {
    const { albumList } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Text>My Albums</Text>
        <FlatList
          data={albumList}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.item}>
                {item.title} by {item.artist}
              </Text>
              <View style={styles.form}>
                <FormButton
                  onPress={() =>
                    this.props.route.params.context.removeAlbum(item)
                  }
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

export default MyAlbums;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
