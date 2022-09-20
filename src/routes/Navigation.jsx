import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import Home from '../screens/Home'
import About from '../screens/About'
const Stack = createStackNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen 
                  name="Home" 
                  component={Home} 
                  options={{
                       title: 'Fatec Itu',
                       headerStyle: {backgroundColor: '#002984'},
                       headerTintColor: '#FFFF00'
                          }}
                          />
                <Stack.Screen name="Sobre" component={About} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}