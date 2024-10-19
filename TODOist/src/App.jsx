import "./App.css";
import TaskContextProvider from "./contexts/TaskContext";
import Header from "./components/Header";
import Main from "./components/Main";
import FilterSort from "./components/FilterSort";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <TaskContextProvider>
      <div className="app">
        <Header />
        <Main />
        <FilterSort />
        <TaskList />
        <Footer />
      </div>
    </TaskContextProvider>
  );
}
