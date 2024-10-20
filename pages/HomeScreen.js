import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
  // Sample data with local PNG images
  const shirts = [
    { id: 1, uri: require('../uploads/shirt1.png') },
    { id: 2, uri: require('../uploads/shirt2.png') },
    { id: 3, uri: require('../uploads/shirt3.png') },
  ];

  const pants = [
    { id: 1, uri: require('../uploads/pant1.png') },
    { id: 2, uri: require('../uploads/pant2.png') },
    { id: 3, uri: require('../uploads/pant3.png') },
  ];

  const shoes = [
    { id: 1, uri: require('../uploads/shoe1.png') },
    { id: 2, uri: require('../uploads/shoe2.png') },
    { id: 3, uri: require('../uploads/shoe3.png') },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.shirtCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {shirts.map((shirt) => (
            <Image
              key={shirt.id}
              source={shirt.uri} // Use the require path
              style={styles.shirts}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.pantCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {pants.map((pant) => (
            <Image
              key={pant.id}
              source={pant.uri} // Use the require path
              style={styles.pants}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.shoeCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {shoes.map((shoe) => (
            <Image
              key={shoe.id}
              source={shoe.uri} // Use the require path
              style={styles.shoes}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  shirtCategory: {
    marginTop: 20,
    marginBottom: 20,
  },
  shoeCategory: {
    marginTop:-30,
    marginBottom: 0,
  },
  pantCategory: {
    marginTop: -20,
    marginBottom: 10,
    flexDirection: 'row',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  shirts: {
    width: 175, 
    height: 175, 
    marginRight: 10,
    borderRadius: 10, 
  },
  pants: {
    width: 200, 
    height: 300, 
    marginRight: 10,
    resizeMode: 'contain',
    flexDirection: 'row',
  },
  shoes: {
    width: 200, 
    height: 150, 
    marginRight: 15,
    borderRadius: 10, 
  },
});

export default HomeScreen;
