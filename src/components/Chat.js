import React,{useEffect,useState}  from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage'
import db from '../firebase'
import {useParams} from 'react-router-dom'
import firebase from 'firebase'
import SelectInput from '@material-ui/core/Select/SelectInput';

function Chat({user}) {

    let  {channelId} = useParams();
const [channel , setChannel]=useState();
const [messages,setMessages]= useState([]);

const getMessages = () =>{
    db.collection('rooms')
    .doc(channelId)
    .collection('messages')
    .orderBy('timestamp','asc')
    .onSnapshot((snapshot) =>{
        let messages= snapshot.docs.map((doc)=>doc.data());
        setMessages(messages);
    })
}

/*const sendMessage = (text) =>{
    if(channelId){
         let payload= {
             text: text,
             timestamp : firebase.firestore.Timestamp.now,
             user: user.name,
             userImage : user.photo
         }
         db.collection("rooms").doc(channelId).collection('messages').add(payload);

    }
}*/
const sendMessage = (text) =>{
    if(channelId){
        let payload ={
            text: user.text,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            user: user.name,
            userImage : user.photo,

        }
        db.collection("rooms").doc(channelId).collection('messages').add(payload);

       // console.log(payload);
   // setInput("");
    }
}
//const [messages,setMessages]=useState();
/*const getMessage=()=>
{
    db.collection('rooms')
    .doc(channelId)
    .collection('messages')
    .orderBy('timestamp','asc')
    .onSnapshot((snapshot)=>{
        let messages=snapshot.docs.map(doc=>doc.data());
        setMessages(messages);


    })
}*/
const getChannel=()=>{
    db.collection('rooms')
    .doc(channelId)
    .onSnapshot((snapshot)=>{
       setChannel(snapshot.data());
    })
}

useEffect(()=>{
getChannel();
getMessages();

},[channelId])

    return (
        <div>
            <Container>
          <Header>
    <Channel>
<ChannelName>
    #{ channel && channel.name}
</ChannelName>
<ChannelInfo>
    best startup community
</ChannelInfo>
    </Channel>
    <ChannelDetail>
<div>
    Details
    </div>

    <InfoOutlinedIcon/>


    </ChannelDetail>
          </Header>
          <MessageContainer>
              {
                  messages.length > 0 &&
                  messages.map((data ,index)=> (
                  <ChatMessage
                  text = {data.text}
                  name = {data.user}
                  image = {data.userImage}
                  timestamp = {data.timestamp}

                  />
                  ))
              }




          </MessageContainer>

          <ChatInput sendMessage ={sendMessage}/>
      </Container>
        </div>
    )
}

export default Chat;
const Container=styled.div`
display:grid;
grid-template-rows: 64px 670px min-content;
`
const Header=styled.div`

padding-left:20px;
padding-right:20px;
display:flex;
align-items:center;
border-bottom: solid rgba(83,39,83,.13);
justify-content:space-between;
`
const MessageContainer=styled.div`
`

const Channel=styled.div`
`
const ChannelDetail=styled.div`
display:flex;
align-items:center;
margin-left:10px;
color:#606060;
`
const ChannelName=styled.div`
font-weight:700;

`
const ChannelInfo=styled.div`
font-weight:400;
color:#606060;
margin-top:8px;



`
