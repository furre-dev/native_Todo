import React, { useContext, useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { withExpoSnack } from "nativewind";
import { styled } from "nativewind";
import { TodosContext } from "../ListContext";

const StyledInput = styled(TextInput);
const StyledView = styled(View);
const StyledTouchableOpacity = styled(TouchableOpacity);

function NewListItem() {
  const { handleAddTodo } = useContext(TodosContext);


  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <StyledView className="flex h-3/4 items-center justify-center space-y-5">
      <StyledInput
        placeholder="Title"
        className="bg-slate-300 border-[1px] border-slate-400 text-black w-2/4 rounded-md px-3 h-10"
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <StyledInput
        placeholder="Description"
        className="bg-slate-300 border-[1px] border-slate-400 text-black w-2/4 rounded-md px-3 h-10"
        onChangeText={(text) => {
          setDesc(text);
        }}
      />
      <StyledTouchableOpacity
        onPress={() => handleAddTodo(title, desc)}
        className="w-2/4 bg-red-500 flex justify-center items-center rounded-lg py-4"
      >
        <Text
          style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}
        >
          Create Item!
        </Text>
      </StyledTouchableOpacity>
    </StyledView>
  );
}

export default withExpoSnack(NewListItem);
