import React, { useState, useEffect } from 'react';
import { Button, Text, SafeAreaView, ScrollView, StyleSheet, Image, View, Alert } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';

export default function AlbumsScreen() {
  const [albums, setAlbums] = useState([]);
  const [hasPermission, setHasPermission] = useState(false);

  // Request permission for accessing media library
  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {albums && albums.map((album) => (
          <AlbumEntry key={album.id} album={album} />
        ))}
      </ScrollView>
      <ImagePickerExample />
    </SafeAreaView>
  );
}

// Component for picking an image from the library
function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Permission required', 'Please grant access to your media library.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

// Component for displaying album entries and their assets
function AlbumEntry({ album }) {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function getAlbumAssets() {
      const albumAssets = await MediaLibrary.getAssetsAsync({ album });
      setAssets(albumAssets.assets);
    }
    getAlbumAssets();
  }, [album]);

  return (
    <View style={styles.albumContainer}>
      <Text>
        {album.title} - {album.assetCount ?? 'no'} assets
      </Text>
      <View style={styles.albumAssetsContainer}>
        {assets && assets.map((asset) => (
          <Image key={asset.id} source={{ uri: asset.uri }} style={styles.assetImage} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  albumContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  albumAssetsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  assetImage: {
    width: 50,
    height: 50,
    margin: 5,
  },
  image: {
    width: 200,
    height: 200,
  },
});
