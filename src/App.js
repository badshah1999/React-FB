import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Card from './components/Card/Card';
import '../src/components/index.css'
import StatusUpdate from './components/StatusUpdate/StatusUpdate';
import PostUpdate from './components/PostUpdate/PostUpdate';

function App() {
  return (
    <div className="App">
      <Header/>
      <SideBar/>
      <Card />
      <StatusUpdate/>
      <PostUpdate/>
    </div>
  );
}

export default App;
