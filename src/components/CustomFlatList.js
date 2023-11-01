import React from "react";
import { View, Text, FlatList, StyleSheet} from 'react-native';


//the CustomFlatList component is resusable accross a couple screens.
//By creating a custom styled FlatList is keeps our UI clean of extra styling 
//and formatting and allows us to use the same code is several areas

const CustomFlatList = (data, title) => {
  const flatListItemSeparator = () => {
    return (
    <View style={styles.flatListItemSeparator}/>
    );
  }
  
  const flatListHeader = (title) => {
    return (
    <View style={styles.flatListHeader} >
      <Text style={styles.flatListHeaderTitle}>{title}</Text>
    </View>
    );
  }

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>
        {item}
      </Text>
    </View>
  )

  return (
  <FlatList
    data={data}
    ListHeaderComponent = {flatListHeader(title) }   
    ItemSeparatorComponent = {flatListItemSeparator }
    keyExtractor={(item) => item.key}
    renderItem={renderItem}
    style={{backgroundColor:'#B3DEF7'}}
  />
  )
}

// StyleSheet
const styles = StyleSheet.create({
    item: {
      padding: 3,
      marginVertical: 8,
      marginHorizontal: 16,
      justifyContent: 'center',
    },
    itemTitle: {
      fontSize: 15,
    },
    flatListItemSeparator: {
      height: 1,
      width: "100%",
      backgroundColor: "#000"
    },
    flatListHeader: {
      width: "100%",
      alignSelf: "center"
    },
    flatListHeaderTitle: {
      fontWeight: '400', 
      flex: 1, 
      alignSelf: "center", 
      fontSize: 40
    }
  })

  export default CustomFlatList;