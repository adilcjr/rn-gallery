import React, { useEffect, useState } from 'react'
import { View, Text, Button, Image } from 'react-native'

import * as firebase from 'firebase'

const HomeScreen = props => {
  const [url, setUrl] = useState('')

  useEffect(() => {
    async function loadImage() {
      try {
        const reference = await firebase.storage().ref('images/test-image')
        //const downloadUrl = await reference.getDownloadURL()
        //if (downloadUrl && downloadUrl.length > 0)
        await reference.getDownloadURL()
          .then((downloadUrl) => {
            setUrl(downloadUrl)
          })
        
      } catch(error) {
        console.log(error)
      }
    }
    loadImage()
    console.log(url)
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
        title='Upload Photos'
        onPress={() => props.navigation.navigate('upload')}
      />
      <View>
        <Image source={{ uri: url}} />
        <Text>Saved image</Text>
      </View>
    </View>
  )
}

export default HomeScreen