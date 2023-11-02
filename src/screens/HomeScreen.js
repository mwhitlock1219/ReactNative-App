import React from "react";
import { View, Text, Image, ScrollView, Button , StyleSheet} from "react-native";

//This screen displays the 'Home' UI 
//In its current state this screen only shows a scrollable view with some basic buttons to take you to other views
//but one could edit this view to include more information about the app and use a tabBar Navigator rather than 
//buttons for changing views.

const HomeScreen = ({navigation}) => {

  const handleOpenCamera = () => {
    navigation.navigate('Camera');
  };

    return (
      <View style={styles.container}>
      <ScrollView>
        <Text style={styles.homeTitle}>Welcome to Shop Mobile! </Text>
        <Text style={styles.intro}>
          A simple app created using React Native to look thru some products available on {'\n'} Market America.
        </Text>
        <Image
          source={{
            uri: 'https://images.marketamerica.com/site/br/images/pages/company/company__building.jpg',
          }}
          style={styles.imageStyling}
        />
        <View style={styles.button}>
          <Button
            onPress={() => {
              navigation.navigate('Product Categories')
            }}
            title='Product Categories'
            color={'white'}
          />
        </View>
  
        <View style={styles.button}>
          <Button
            onPress={() => {
              navigation.navigate('All Products')
            }}
            title='All Products'
            color={'white'}
          />
         </View>
  
         <View style={styles.button}>
          <Button
            onPress={() => {
              handleOpenCamera()
              console.log("camera pressed")
            }}
            title='Open Camera'
            color={'white'}
          />
         </View>
      </ScrollView>
      <View style={styles.buttonContainerontainer}>
        
        </View>
      </View>  
    )

}

// StyleSheet
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30, 
      backgroundColor: '#B3DEF7',
      alignItems: 'center',
      justifyContent: 'center'
    },
    homeTitle: {
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 10,
      fontSize: 25
    },
    intro: {
      padding: 10,
      textAlign: 'center',
      fontSize: 15
    },
    imageStyling: {
      width: '100%', 
      height: 200,
      borderRadius: 20,
      objectFit: 'fill',
      resizeMode: 'contain',
      marginTop: 20,
      marginBottom: 20
    },
    button: {
      margin: 5,
      backgroundColor: 'blue',
      borderRadius: 15,
      width: 150,
      alignSelf: 'center'
      
    }
  })

export default HomeScreen;


