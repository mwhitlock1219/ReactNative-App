import React, {useEffect, useState} from "react";
import { View, ActivityIndicator , StyleSheet} from "react-native";
import CustomFlatList from "../components/CustomFlatList";
import { fetchAllProducts } from "../api/apiService";

//This screen displays the 'US Products' UI 
//In its current state this screen only shows a scrollable list of products but one could add more functionality 
//to it by making each item 'touchable' so that it displays details of each product such as 'brand', 'min/maxPrice', 'image' etc
const AllProductsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  const getAllProducts = async () => {
    try {
      const response = await fetchAllProducts();
      console.log(response)
      let productList = response.products.map(product => product.name);
      setData(productList);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getAllProducts();
  }, []);
  
  //Until the UI is ready to display data the view provides a loading spinner image for the user
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator 
        size= "large"
        color= "white"
        />
      ) : (
        CustomFlatList(data, "US Products")
      )}
    </View>    
  );
}

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, 
    backgroundColor: 'darkblue',
    justifyContent: 'center'
  }
})

export default AllProductsScreen;