import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTodo = () => {
    if (title.trim() !== '' && description.trim() !== '') {
      setTodoList([...todoList, { id: Date.now().toString(), title, description }]);
      setTitle('');
      setDescription('');
    }
  };

  const deleteTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleHolder}>
        <Text style={styles.appTitle}>📝 My To-Do List 📝</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.textArea}
          placeholder="Description"
          multiline
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add Todo List" onPress={addTodo} disabled={!title || !description} />
      </View>
      <ScrollView style={styles.cardHolder}>
        {todoList.map((item, index) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardText}>{`TITLE: ${item.title}\nDESCRIPTION: ${item.description}`}</Text>
            <View style={styles.buttonView}>
              <Button title="Delete" onPress={() => deleteTodo(index)} />
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Reset" onPress={() => { setTitle(''); setDescription(''); }} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#87CEEB',
    paddingBottom: 20,
  },
  titleHolder: {
    margin: 20,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000080',
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    fontSize: 22,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF', // Change background color to white
    borderColor: '#000080', // Change border color to navy blue
    borderWidth: 2,
  },
  textArea: {
    marginTop: 20,
    width: '80%',
    minHeight: 150,
    fontSize: 18,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF', // Change background color to white
    borderColor: '#000080', // Change border color to navy blue
    borderWidth: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  cardHolder: {
    width: '80%',
  },
  card: {
    flexDirection: 'column',
    backgroundColor: '#FFDBDB',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardText: {
    fontSize: 20,
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    marginLeft: 10,
  },
});
