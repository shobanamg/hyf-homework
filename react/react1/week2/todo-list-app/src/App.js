import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { TodoContextProvider } from "./context/TodoContext";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoContextProvider>
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
