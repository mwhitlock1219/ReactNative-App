import React, {useEffect, useState} from 'react';
import { View, ActivityIndicator , StyleSheet} from 'react-native';
import CustomFlatList from '../components/CustomFlatList';
import { fetchCategories } from '../api/apiService';


//This screen displays the 'Product Categories' UI 
//In its current state this screen only shows a scrollable list of categories but one could add more functionality 
//to it by making each item 'touchable' so that it displays a different view of just that categories products

const ProductCategoriesScreen = () => {  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getCategories = async () => {
    try {
    const response = await fetchCategories();
    let categoryList = response.categories.map(category => category.name)
    setData(categoryList);
} catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
  };

  useEffect(() => {
    getCategories();
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
        CustomFlatList(data, "Product Categories")
      )}
    </View>    
  );
};

// StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, 
    backgroundColor: 'darkblue',
    justifyContent: 'center'
  }
})

export default ProductCategoriesScreen;
