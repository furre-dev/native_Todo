import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import { View, Button } from 'react-native';
import { HeaderButton } from '@react-navigation/native-stack';
import NewListItem from './components/NewListItem';
import {useState} from "react";
import { TodosContext, TodosProvider } from "./ListContext";
import Item from './components/Item';


const Stack = createNativeStackNavigator();

function HeaderRightButton({ navigation }) {
  const handlePress = () => {
    navigation.navigate("NewListItem");
  };

  return (
    <View style={{ marginRight: 10 }}>
      <Button
        onPress={handlePress}
        title="Add Item"
      />
    </View>
  );
}


export default function App() {

  return (
    <TodosProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Todo List",
            headerRight: () => (
          <HeaderRightButton navigation={navigation} />
                ),
              })}
            />
            <Stack.Screen name="NewListItem" component={NewListItem} />
            <Stack.Screen name="Item" component={Item} />
          </Stack.Navigator>
        </NavigationContainer>
    </TodosProvider>
  );
}
