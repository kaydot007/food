import { StyleSheet, FlatList, View, Text, SafeAreaView } from "react-native";
import RestaurantItem from "../../components/RestaurantItem";
import restaurants from "../../../assets/data/restaurants.json";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <Text style={{
        fontSize: 25,
        fontWeight: 600,
        marginTop: 10,
        textAlign: "center"
      }}>Resturant</Text>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});
