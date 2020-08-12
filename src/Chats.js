import React from 'react';
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Billie"
                message="Hello there :)"
                timestamp="40 minutes ago"
                profilePic="https://c.ndtvimg.com/2020-03/r23rm1q8_billie-eilish-body-shaming_120x90_11_March_20.jpg"
            /> 
            <Chat
                name="Ylva"
                message="Hei kjekken :P"
                timestamp="2 hours ago"
                profilePic="https://kommunikasjon.ntb.no/data/images/00582/89babc63-fe27-40df-ae3c-d4aa6f804563.jpg"
            /> 
            <Chat
                name="Madison"
                message="You look good! <3"
                timestamp="1 week ago"
                profilePic="https://img1.nickiswift.com/img/gallery/the-truth-about-madison-beer/intro-1585512050.jpg"
            /> 
            <Chat
                name="Martine"
                message="Er du en delfin?"
                timestamp="48 minutes ago"
                profilePic="https://dbstatic.no/71928773.jpg?imageId=71928773&x=0&y=0&cropw=100&croph=40.068027210884&width=640&height=385"
            />    
        </div>
    )
}

export default Chats;
