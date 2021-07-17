import './App.css';
import SidePanel from './components/SidePanel/SidePanel'
import Chat from './components/Chat/Chat'
import { Route } from 'react-router-dom';
import FeedContainer from './components/Feed/FeedContainer';

function App() {
  return (
    <div className="App">
     <SidePanel/>
     <div className="content">
       <Route path="/feed">
         <FeedContainer/>
       </Route>
     </div>
     
     <Chat/>
    </div>
  );
}

export default App;
