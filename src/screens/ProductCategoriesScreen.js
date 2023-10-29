import React, {useEffect, useState} from 'react';
import { View, ActivityIndicator } from 'react-native';
import CustomFlatList from '../components/CustomFlatList';

const ProductCategoriesScreen = () => {  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  const getCategories = async () => {
    const url = "https://api2.shop.com/AffiliatePublisherNetwork/v2/categories?publisherId=TEST&locale=en_US&site=shop&shipCountry=US&onlyMaProducts=true&api_key=76b99147dd61464cb77bd62fb3e5ee41"  
    try {
      let response = await fetch(url);
      const json = await response.json();
      let newList = json.categories.map(category => category.name)
      console.log(newList)
      setData(newList);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getCategories();
  }, []);
  
  return (
    <View style={{flex: 1, padding: 10,backgroundColor: "darkblue"}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        CustomFlatList(data, "Product Categories")
      )}
    </View>    
  );
};

export default ProductCategoriesScreen;
