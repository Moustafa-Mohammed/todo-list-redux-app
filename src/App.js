import Typography from "@mui/material/Typography";
import Input from "./components/input/Input";
import TodoList from "./components/TodoList/TodoList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Typography variant="h3" color="secondary">
        Todo App
      </Typography>
      <Input />
      <TodoList />
    </div>
  );
}

export default App;
