import React from 'react'
import {View, Text, Button} from 'react-native'

export default function Home({navigation}){
    return(
        <View>
            <Text>Bem vindo!</Text>
            <Button title="Sobre o App"
            color='#0000ff'
            onPress={()=> navigation.navigate('Sobre')}
            />
        </View>
    )
}
