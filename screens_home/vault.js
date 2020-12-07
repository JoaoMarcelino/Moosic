import React from "react";
import { StatusBar, Text, View, StyleSheet } from "react-native";
import FormButton from "../components/FormButton"
global.vaultSwitch = 1;

class Vault extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar backgroundColor="black" barStyle="light-content" />
				<Text>Vault</Text>

				<View style = {styles.container}>
					<View style = {styles.button}>
						<View style = {styles.formButtons}>
							<FormButton
								onPress={()=>{global.vaultSwitch = !global.vaultSwitch;console.log(global.vaultSwitch);}}
								buttonTitle="Mudar"/>								
						</View>
					</View>
				</View>
			</View>
		);
	}
}

export default Vault;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
