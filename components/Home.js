import { Text, View, Button } from 'react-native';
import {useNavigation} from "@react-navigation/native"
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';
import { useContext, useEffect } from 'react';
import { TodosContext } from "../ListContext";



const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton= styled(Button);


function HomeScreen() {
  const { todos, setTodos } = useContext(TodosContext);

  const navigation = useNavigation();

  console.log("1")
  console.log(todos)

  return (
    <StyledView className="flex pt-16 items-center">
      <StyledText className="text-6xl">Todo Listd</StyledText>
      {todos && todos.map((item, index) => {
        return(
        <StyledView key={index} className="bg-red-500 w-3/5 py-1 px-3 rounded-lg flex-row justify-between my-3">
          <StyledText className="text-3xl text-white">{item.title}</StyledText>
          <StyledText 
          onPress={() => {navigation.navigate("Item", {title: item.id})}}
          type="button" className="text-2xl text-white">></StyledText>
      </StyledView>
        )
      })}
    </StyledView>
  );
}


export default withExpoSnack(HomeScreen);
