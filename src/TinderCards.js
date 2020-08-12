import React, {useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";



function TinderCards() {
    const [people, setPeople] = useState([]);

    //Code that runs based on a condition...
    useEffect(() => {
        const unsubscribe = database
        .collection("people")
        .onSnapshot((snapshot) => 
            //goes through all documents from the new snapshot and sets all of them inside of the people array
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );

        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <div>
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                >
                    <div 
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default TinderCards;
