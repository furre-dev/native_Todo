import { useContext } from "react";
import { TodosContext } from "../ListContext";
import { styled } from 'nativewind';
import { View, Button, Text, TouchableOpacity } from "react-native";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton= styled(Button);
const StyledTouchableOpacity = styled(TouchableOpacity);



export default function Item({navigation, route}){
  const { todos, deleteTodo } = useContext(TodosContext);
  const { title } = route.params;

  const handleDelete = (id) => {
    deleteTodo(id);
  }

  return (
        <>
        {todos.map((item) => {
          if(item.id === title){
            return (
              <StyledView className="justify-center items-center h-2/4">
                <StyledText className="text-2xl font-bold">{item.title}</StyledText>
                <StyledText className="text-xl max-w-xs text-center mt-4">{item.description}</StyledText>
                <StyledTouchableOpacity
                onPress={() => {
                  handleDelete(item.id);
                  navigation.navigate("Home");
                }}
                className="mt-10 bg-red-500 w-1/4 h-8 justify-center items-center rounded-md">
                  <StyledText className="text-white text-lg">Delete</StyledText>
                  </StyledTouchableOpacity>
              </StyledView>
            )
          }
        })}
        </>
  )


}