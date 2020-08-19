import * as React from 'react'
import { View, Button, Alert } from 'react-native'

import * as ImagePicker from 'expo-image-picker'

import * as firebase from 'firebase'

const UploadScreen = props => {

  const chooseImage = async () => {
    let result = await ImagePicker.launchCameraAsync()
    //let result = await ImagePicker.launchImageLibraryAsync()

    if (!result.cancelled) {
      uploadImage(result.uri, 'test-image.jpg')
      .then(() => {
        Alert.alert("Success")
      })
      .catch((error) => {
        Alert.alert(error)
      })
    }
  }

  const uploadImage = async (uri, imageName) => {
    const response = await fetch(uri)
    const blob = await response.blob()

    var ref = firebase.storage().ref().child('images/' + imageName)
    return ref.put(blob)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
        title='Take a picture or choose an image...' 
        onPress={chooseImage}
      />
    </View>
  )
}

export default UploadScreen