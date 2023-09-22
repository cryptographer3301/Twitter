import './App.css';
import SideBar from './components/Side Bar/SideBar'
import MainFeed from './components/Feed/Feed'
import WidgetsFooter from './components/Widgets/Widgets'
import './index.css'

function App() {
  return (
    // BEM
    <div className="app">
      <SideBar />
      <MainFeed />
      <WidgetsFooter />
    </div>
  );
}

export default App;
