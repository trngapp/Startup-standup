import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpIcon from '@material-ui/icons/Help';

function Header({user,signOut})
{
    return(
        <Container>
            <Main>
                <AccessTimeIcon/>
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..."/>

                    </Search>
                </SearchContainer>
                <HelpIcon/>

            </Main>
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png" } alt="user"/>
                </UserImage>
            </UserContainer>
        </Container>
    )
}
export default Header

const Container =styled.div`
background: light-orange;
color:white;
display:flex;
align-items:center;
justify-content:center;
position :relative;
border-bottom: solid grey;


`
const Main =styled.div`
display:flex;
margin-right:16px;
margin-left:16px;

`
const UserContainer =styled.div`
display:flex;
align-items:center;
padding-right:16px;
position:absolute;
right:0;
`
const SearchContainer =styled.div`
min-width:400px;
margin-left:16px;
margin-right:16px;
`
const Search=styled.div`
box-shadow: inset 0 0 0 1px rgb(104,76,104);
width:100%;
border-radius: 6px;
display: flex;
align-items:center;
input{
    background-color:transparent;
    border:none;
    padding-right:6px;
    padding-left:6px;
    color:white;
    padding-top:4px;
    padding-bottom:4px;

}
input:focus{
    outline:none;
}
`
const Name =styled.div`
padding-right:16px;
`
const  UserImage =styled.div`
width:28px;
height:28px;
border:2px solid white;
border-radius:3px;
cursor:pointer;
img{
    width:100%;
}
`