import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

class Todo {
  constructor(
    readonly id: number,
    readonly text: string,
    public completed: boolean,
    readonly createdAt: ReturnType<Date["getTime"]>,
    readonly editedAt: ReturnType<Date["getTime"]>,
    readonly deletedAt: ReturnType<Date["getTime"]> | undefined
  ) {}
}

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");

  function addTodo() {
    const date = new Date().getTime();
    if (inputText.trim()) {
      setTodos([
        ...todos,
        new Todo(todos.length + 1, inputText, false, date, date, undefined),
      ]);
    }
    setInputText("");
  }

  function checkTodo(todo: Todo) {
    setTodos(
      todos.map((oldTodo) =>
        oldTodo.id === todo.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : oldTodo
      )
    );
  }

  function deleteTodo(todo: Todo) {
    setTodos(
      todos.map((oldTodo) => {
        return oldTodo.id === todo.id
          ? {
              ...todo,
              deletedAt: new Date().getTime(),
            }
          : oldTodo;
      })
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>TODO: </Text>
          {Boolean(todos.length > 0) &&
            todos
              .filter((todo) => !todo.deletedAt)
              .map((todo) => {
                return (
                  <View
                    key={todo.id + "-" + todo.createdAt + "-" + todo.text}
                    style={styles.todoContainer}
                  >
                    <TouchableOpacity
                      style={styles.todoItem}
                      onPress={() => checkTodo(todo)}
                      onLongPress={() => {
                        Alert.alert("삭제", "이 todo를 삭제하시겠습니까?", [
                          { text: "취소", style: "cancel" },
                          {
                            text: "삭제",
                            style: "destructive",
                            onPress: () => deleteTodo(todo),
                          },
                        ]);
                      }}
                    >
                      <Ionicons
                        name={todo.completed ? "checkbox" : "square-outline"}
                        size={24}
                        color={todo.completed ? "black" : "gray"}
                      />
                      <Text>{todo.text}</Text>
                      <Text>
                        <Ionicons
                          name={"time"}
                          size={12}
                          color={todo.completed ? "black" : "gray"}
                        />

                        {new Date(todo.createdAt).toLocaleString("ko-KR", {
                          month: "2-digit",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
        </View>

        {/* Input - 바닥에 붙음 */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="what can I do?"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={addTodo}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 3,
    padding: 12,
    marginTop: 20,
    width: "100%",
    backgroundColor: "#fff",
  },
  todoContainer: {
    marginBottom: 10,
    width: "100%",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
  },
  todoMetadataText: {
    fontSize: 11,
    color: "#999",
  },
});
