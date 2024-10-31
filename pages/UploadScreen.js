import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Import from expo-image-picker
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wvqofttxahchtirsvngy.supabase.co'; // Your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2cW9mdHR4YWhjaHRpcnN2bmd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NDI1NjUsImV4cCI6MjA0NTAxODU2NX0.cEJ3xPVbysvrysTnYaxZTGN0LX89YxcNXLGcGGw6wfI';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const UploadPage = () => {
    const [imageUri, setImageUri] = useState(null);

    const requestCameraPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Camera permission is required to take a picture.');
        }
    };

    useEffect(() => {
        requestCameraPermissions();
    }, []);
 

    const uploadPhoto = async () => {
        const options = {
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        };

        const response = await ImagePicker.launchCameraAsync(options);
        
        if (!response.canceled) {
            setImageUri(response.uri);
            
            const imageData = await fetch(response.uri);
            const blob = await imageData.blob();
            const filePath = `uploads/${response.uri.split('/').pop()}`; // Get the file name
            
            const { data, error } = await supabase.storage.from('clothing-photos').upload(filePath, blob);

            if (error) {
                Alert.alert('Error uploading image:', error.message);
            } else {
                Alert.alert('Image uploaded successfully!');
            }
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Take a Picture" onPress={uploadPhoto} />
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
