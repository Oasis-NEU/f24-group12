import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { decode } from 'base64-arraybuffer'; // import base64-arraybuffer for decoding base64
import supabase from './supabase-service'; 
import { removeBackground } from 'react-native-background-remover';

const UploadPage = () => {
    const [imageUri, setImageUri] = useState(null);

    // request camera permissions
    const requestCameraPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Camera permission is required to take a picture.');
        }
    };

    // request permissions on component mount
    useEffect(() => {
        requestCameraPermissions();
    }, []);

    // function to launch the camera and take a picture
    const takePhoto = async () => {
        try {
            const options = {
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                base64: true,
            };

            const response = await ImagePicker.launchCameraAsync(options);

            // if the user didn't cancel, set the image uri to display it
            if (!response.canceled && response.assets && response.assets.length > 0) {
                const base64Data = response.assets[0].base64; // get the base64 data
                const uri = response.assets[0].uri;
                setImageUri(uri); // access the uri from the assets array
                const fileName = uri.split('/').pop(); // get the file name from the uri


                // decode the base64 string to an arraybuffer
                const decodedData = decode(base64Data);

                // get the file type (extension) from the uri
                const fileType = uri.split('.').pop();
                const contentType = `image/${fileType}`;

                // upload the decoded image data to supabase storage
                const { data, error } = await supabase.storage
                    .from("uploads")
                    .upload(fileName, decodedData, {
                        contentType, // set mime type
                        cacheControl: '3600',
                        upsert: false,
                    });

                if (error) {
                    Alert.alert('Upload failed!', error.message);
                } else {
                    Alert.alert('Upload successful!');
                }
            }
        } catch (error) {
            Alert.alert('Error', 'Something went wrong while uploading the photo.');
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Take a Picture" onPress={takePhoto} />
            {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        marginTop: 20,
        width: 300,
        height: 300,
        borderRadius: 10,
    },
});

export default UploadPage;
