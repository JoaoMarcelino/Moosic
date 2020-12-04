import React from "react";
import { Text, View, StyleSheet } from "react-native";
import FormButton from "../components/FormButton";

const INITIAL_STATE = {
  title: 'Africa',
  artist: 'Toto',
  album: 'Toto IV',
};

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  addMusic = () => {
    console.log(this.props.route.params.context);
    this.props.route.params.context.addMusic(INITIAL_STATE)
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Search</Text>
        <FormButton
								onPress={this.addMusic}
								buttonTitle="PRESS THIS"
							/>
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
