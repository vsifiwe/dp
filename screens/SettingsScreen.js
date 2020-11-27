import * as React from "react";
import { Layout, Button, Text, Icon, Divider } from "@ui-kitten/components";
import { ThemeContext } from "../theme-context";
import { getCart, removeFromCart } from "../server/cart";

const FacebookIcon = (props) => <Icon name="facebook" {...props} />;

function deleteitem() {
	removeFromCart(1);
}

function SettingsScreen({ navigation }) {
	const themeContext = React.useContext(ThemeContext);

	return (
		<Layout
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text>Settings screen</Text>
			<Button
				status={"info"}
				accessoryLeft={FacebookIcon}
				onPress={() => navigation.navigate("Details")}
			>
				Go to Details
			</Button>
			<Divider />
			<Button status={"info"} onPress={themeContext.toggleTheme}>
				Dark Mode?
			</Button>
			<Divider />
			<Button status={"info"} onPress={getCart}>
				Cart
			</Button>
			<Divider />
			<Button status={"info"} onPress={deleteitem}>
				Delete
			</Button>
		</Layout>
	);
}

export default SettingsScreen;
