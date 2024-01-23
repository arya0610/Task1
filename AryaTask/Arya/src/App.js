
import './App.css';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="flex h-screen bg-slate-200">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
