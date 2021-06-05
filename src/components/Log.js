import React from 'react'
import styled from'styled-components'
import {auth,provider} from '../firebase'
function Log(props) {
    const SignIn =()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            const newUser ={
   name:result.user.displayName,
   photo:result.user.photoURL,
            }
            localStorage.setItem('user', JSON.stringify(newUser));
            props.setUser(newUser);
        })
        .catch((error)=>{
 alert(error.message)
        })
    }
    return (
       <Container>
<Content>
<SlackImg src=" https://pbs.twimg.com/profile_images/1266732879511318529/yL-CB7y9_400x400.jpg" alt="SS"/>
<h1> Sign in  </h1>
<SignInButton onClick={()=>SignIn()}>
    Sign In With Google
</SignInButton>
</Content>
       </Container>
    )
}

export default Log;
const Container =styled.div
`
width:100%;
height:100vh;
background-color:#f8f8f8;
display:flex;
justify-content:center;
align-items:center;
`
const Content =styled.div
`
background-color:white;
padding :100px;
border-radius: 5px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0/ 24%);
`
const SlackImg =styled.img
`
height:100px;
border-radius:5px;
`
const SignInButton =styled.button
`
margin-top:50px;
border-radius:5px;
cursor:pointer;
`
