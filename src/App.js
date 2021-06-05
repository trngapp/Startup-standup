
import './App.css';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom";
import {useEffect,useState} from 'react'
import Chat from './components/Chat'
import Login from './components/Log'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db, { auth } from './firebase'
function App() {

  const [rooms,setRooms]=useState([])
  const [user, setUser]=useState(JSON.parse(localStorage.getItem('user')));
  const  getChannels =()=> {

    db.collection('rooms').onSnapshot((snapshot)=>{
     setRooms(snapshot.docs.map((doc)=>{
      return {id: doc.id, name: doc.data().name}
     }))
    })

  }
  useEffect(() => {
  getChannels();
  }, [])
const signOut = ()=>{
  auth.signOut().then(()=>{
    localStorage.removeItem('user');
    setUser(null);
  })
}

  return (
    <div className="App">
     <Router>
{

    !user ?
    <Login setUser={setUser}/>
    :

       <Container>
         <Header signOut={signOut} user={user}/>
         <Main>
           <Sidebar  rooms={rooms}/>
       <Switch>
         <Route path="/:channelId">
          <Chat  user ={user}/>
        </Route>
<Route path="/">
Select or Create Channel
</Route>


       </Switch>
       </Main>
       </Container>
}
     </Router>
    </div>
  );
}

export default App;
const Container = styled.div `
width:100%;
height:100%;
background:orange;
display:grid;
grid-template-rows: 38px 800px;
`
const Main=styled.div `
 background:white;
 display:grid;
 grid-template-columns: 260px auto;
`
