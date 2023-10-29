import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default function CameraComponent() {
  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        ref={(ref) => (cameraRef = ref)}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
      />
      <TouchableOpacity onPress={takePicture}>
        <Text>Take Picture</Text>
      </TouchableOpacity>
    </View>
  );
}
