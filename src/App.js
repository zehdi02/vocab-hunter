import "./App.css";
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content';
import Dictionary from './components/Dictionary/Dictionary';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content />
      <Dictionary />
    </div>
  );
}

export default App;
