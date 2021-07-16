import './App.css';
import SidePanel from './components/SidePanel/SidePanel'
import Feed from './components/Feed/Feed'
import Chat from './components/Chat/Chat'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <SidePanel/>
     <div className="content">
       <Route path="/feed" component={Feed}/>
     </div>
     
     <Chat/>
    </div>
  );
}

export default App;
