import React from "react";
import { ScrollView, View } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ data, removeTodo }) => {
  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" }}>
      <View style={{ width: "100%" }}>
        {data.map((item) => (
          <TodoItem key={item.id} item={item} removeTodo={removeTodo} />
        ))}
      </View>
    </ScrollView>
  );
};

export default TodoList;
