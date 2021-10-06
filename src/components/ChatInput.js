import React ,{useState} from 'react'
import styled from 'styled-components'
function ChatInput({sendMessage}) {

    const [input,setInput]=useState("");
    const send = (e)=>{
          e.preventDefault();
          if(!input) return;
          sendMessage(input)
    }
    return (
        <Container>
         <InputContainer>
         <form>
<input
onChange={(e) => setInput(e.target.value)}
type="text"
value={input}
 placeholder="Message here..."/>
<SendButton
type="submit"
onClick={send} >
    <Send/>


</SendButton>
</form>



         </InputContainer>
        </Container>


    )
}

export default ChatInput
const Container=styled.div`

padding-left:20px;
padding-right:20px;
padding-bottom:24px;
`
const InputContainer=styled.div`
border:1px solid #8D8D8E;
border-radius:4px;
form{
    display: flex;
    height:42px;
    align-items:center;
    padding-left:10px;
    input{
        flex:1;
        border:none;
        font-size:13px;
    }
    input:focus{
        outline:none;
    }
}

`
const SendButton=styled.button`
margin-right:5px;
cursor:pointer;


`
const Send=styled(SendIcon)`

color:#D9D9D9

`

