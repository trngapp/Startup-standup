import React from 'react'
import styled from 'styled-components'
function ChatMessage({text,name,image,timestamp}) {
    return (
        <Container>
<UserAvatar>
    <img src= {image}/>
</UserAvatar>
<MessageContent>
    <Name>
    {name}
<span> {new Date(timestamp.toDate()).toUTCString()} </span>
    </Name>
    <Text>
{text}
    </Text>
</MessageContent>
        </Container>
    )
}

export default ChatMessage
const Container=styled.div
`
padding:8px 20px;
display:flex;
align-items:center;
cursor:pointer;
:hover{
    background: rgb(96,97,96);
    color:white;
}

`
const MessageContent=styled.div
`
`
const Name=styled.div
`
font-weight:900;
font-size:15px;
line-height:1.4;
span{
    font-weight:400;
    color:rgb(96 ,97, 96);
    font-size:13px;

}
`
const UserAvatar=styled.div
`
width:36px;
height:36px;
overflow:hidden;
margin-right:8px;
img{
    width:100%;
}
`
const Text=styled.div
`
`
