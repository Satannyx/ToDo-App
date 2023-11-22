import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TodoItem = ({ item, removeTodo }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Button title="Remove" onPress={() => removeTodo(item.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 20,
    marginBottom: 15,
    marginTop: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
  },
});

export default TodoItem;
