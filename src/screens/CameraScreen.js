import React, { useEffect, useRef} from 'react';
import { RNCamera } from 'react-native-camera';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { request, RESULTS, PERMISSIONS_ANDROID, PERMISSIONS_IOS } from 'react-native-permissions';


const CameraScreen = () => {
  const cameraRef = useRef(null);

  // ASK USER FOR PERMISSIONS TO CAMERA BASED ON PLATFORM
  const requestCameraPermission = async () => {
    if (Platform.OS === 'ios') {
      const result = await request(PERMISSIONS_IOS.CAMERA);
      if (result === RESULTS.GRANTED) {
        console.log('Camera permission granted IOS');
      }
    } else {
      const result = await request(PERMISSIONS_ANDROID.CAMERA);
      if (result === RESULTS.GRANTED) {
        console.log('Camera permission granted ANDROID');
      }
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        captureAudio={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default CameraScreen;
