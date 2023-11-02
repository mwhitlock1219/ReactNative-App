import React, { useEffect, useRef} from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { request, RESULTS, PERMISSIONS_ANDROID, PERMISSIONS_IOS, PERMISSIONS  } from 'react-native-permissions';


const CameraScreen = () => {
  const cameraRef = useRef(null);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'ios') {
      const result = await request(PERMISSIONS_IOS.CAMERA);
      console.log("result" + result)
      if (result === RESULTS.GRANTED) {
        console.log('Camera permission granted');
      }
    } else {
      const result = await request(PERMISSIONS_ANDROID.CAMERA);
      if (result === RESULTS.GRANTED) {
        console.log('Camera permission granted');
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
