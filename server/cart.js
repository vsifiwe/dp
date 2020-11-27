import AsyncStorage from "@react-native-async-storage/async-storage";

let object = {
	cart: [],
};

export async function getCart() {
	try {
		const value = await AsyncStorage.getItem("@cart");
		if (value !== null) {
			console.log(JSON.parse(value));
			return JSON.parse(value);
		}
	} catch (e) {
		return object;
	}
}

async function saveCart(item) {
	try {
		const jsonValue = JSON.stringify(item);
		await AsyncStorage.setItem("@cart", jsonValue);
	} catch (e) {
		console.error(e);
	}
}

export async function addToCart(item) {
	try {
		const value = await getCart();
		if (value !== null) {
			value.cart.push(item);
			saveCart(value);
		}
	} catch (error) {
		console.error(error);
	}
}

export async function removeFromCart(id) {
	try {
		const value = await getCart();
		var removeIndex = value.cart
			.map(function (item) {
				return item.index;
			})
			.indexOf(id);
		value.cart.splice(removeIndex, 1);
		saveCart(value);
	} catch (error) {
		console.error(error);
	}
}
