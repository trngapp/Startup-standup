import React from 'react'
import styled from 'styled-components'
import db from '../firebase'
import {useHistory} from 'react-router-dom'
function Sidebar(props) {
    const history=useHistory();

    const goToChannel =(id)=>{
if(id)
{
    history.push(`/${id}`)
}
    }
    const addchannel = ()=>{
        const promptName=prompt("Enter Channel name");
        if(promptName)
        {

            db.collection('rooms').add({
                name:promptName
            })
        }
    }
    return (
        <Container>
<Workspace>

    <Name>
        Tarang
        </Name>
        <NewMessage>
        </NewMessage>
</Workspace>
<MainChannel>
    {
        sidebarItems.map(item=>(
<MainChannelItems>
    {item.icon}
    {item.text}

</MainChannelItems>
        ))
    }
    </MainChannel>
    <ChannelContainer>
        <NewChannel>
<div>
    Channels
</div>


        </NewChannel>
        <ChannelList>
            {
            props.rooms.map(item=>(
                <Channel onClick={()=> goToChannel(item.id)}>
               #{item.name}
               </Channel>
            )
            )
            }

  </ChannelList>


    </ChannelContainer>

            </Container>

    )
}

export default Sidebar

const Container= styled.div`
background:#FFA500;
`
const Workspace= styled.div`
color:white;
height:64px;
display:flex;
align-items : center;
paddding-left:19px;
justify-content:space-between;
border-bottom: 1px solid #532753;
`
const Name= styled.div`

`
const NewMessage= styled.div`

width: 36px ;
height: 36px;
background: white;
color:#3F0E40;
fill:#3F0E40;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:20px;
cursor:pointer;

`
const MainChannel= styled.div`

`
const MainChannelItems= styled.div`
color:black;
display: grid;
grid-template-columns: 15% auto;
height:28px;
align-items:center;
padding-left:19px;

:hover{
    background:white;
}
cursor:pointer;

`
const ChannelContainer = styled.div`
color:black;
margin-top:10px;
`
const NewChannel= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:19px;
padding-left:19px;
cursor:pointer;



`
const ChannelList= styled.div`

`
const Channel= styled.div`
height:28px;
display:flex;
align-items:center;
cursor:pointer;
padding-left:19px;
:hover{
    background:white;
}

`
