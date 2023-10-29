import React, {useEffect, useState} from "react";
import { View, ActivityIndicator } from "react-native";
import CustomFlatList from "../components/CustomFlatList";


const AllProductsScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  const getAllProducts = async () => {
    const url = "https://api2.shop.com/AffiliatePublisherNetwork/v2/products?publisherId=test&locale=en_US&site=shop&shipCountry=US&perPage=50&onlyMaProducts=false"
    try {
      let response = await fetch(url);
      const json = await response.json();
      let productList = json.products.map(product => product.name);
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
  
  return (
    <View style={{flex: 1, padding: 10,backgroundColor: "darkblue"}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        CustomFlatList(data, "US Products")
      )}
    </View>    
  );
}

export default AllProductsScreen;