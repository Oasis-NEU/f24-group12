import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, StyleSheet, Alert } from 'react-native';
import supabase from './supabase-service';

const HomeScreen = () => {
  const [shirts, setShirts] = useState([]);

  const fetchShirtImages = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('uploads')
        .list('', { limit: 100 });

      if (error) {
        console.error('Error fetching images:', error.message);
        Alert.alert('Error', 'Could not fetch shirt images.');
        return;
      }

      const shirtImages = data.map(item => ({
        id: item.id,
        uri: supabase.storage.from('uploads').getPublicUrl(item.name).data.publicUrl,
      }));

      setShirts(shirtImages);
    } catch (error) {
      console.error('Error:', error.message);
      Alert.alert('Error', 'Something went wrong while loading images.');
    }
  };

  useEffect(() => {
    fetchShirtImages();
  }, []);

  // Memoized Image component for optimal rendering
  const RenderShirtImage = React.memo(({ uri }) => (
    <Image source={{ uri }} style={styles.shirts} />
  ));

  return (
    <FlatList
      data={shirts}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      renderItem={({ item }) => <RenderShirtImage uri={item.uri} />}
      contentContainerStyle={styles.shirtCategory}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: '#f8f8f8',
  },
  shirtCategory: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  shirts: {
    width: 175,
    height: 175,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default HomeScreen;
