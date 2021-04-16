import React, { useState, useEffect } from 'react';
import {BsSearch} from 'react-icons/bs'
import "./Message.css"

function Message() {

    const [user, setUser] = useState([]);
    const [messages, setMessages] = useState([]);
    const [displayMessages, setDisplayMessages] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([])

        useEffect(() => {
            fetch("https://mini-twitter-project.herokuapp.com/messages")
              .then(res => res.json())
              .then(
                (result) => {
                  setIsLoaded(true);
                  setUser(result);
                  setMessages(result);
                  setDisplayMessages(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  setIsLoaded(true);
                  setError(error);
                }
              )
          }, [])

          const filterMessages = (str) => {
            console.log(str)
            const results = messages.filter(msg => msg.text.includes(str) || msg.author.name.includes(str) || msg.date.includes(str));
            setDisplayMessages(results)
          }

          if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (<div className="message">
                <input 
                  type="text"
                  placeholder="Search..."
                  className="Searchbar"
                  onChange={(e) => filterMessages(e.target.value)}
                />
                <BsSearch />
                <div className="Tweets"> 
                {displayMessages.map(message => (
                 <div className="Tweet-Container" key={message.id}>
                     {/* https://reactjs.org/docs/lists-and-keys.html */}
                     {/* Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity: */}
                    <div>{message.text}</div>
                    <div>{message.author.name}</div>
                    <div>{message.date}</div>
                    <img src={message.image} width='650'/>
                </div> 
                ))}
                 </div>     </div>      
            );
          }
        }

export default Message;







   // useEffect(() => {
    //     const fetchMessage = async () => {
    //         const messages = await 
    //             .get('http://api.icndb.com/jokes/random')
    //             .then((result) => result.data);
    //             .then ((json) => {
    //               setMessage(json);
    //             })
    //             .catch(console.log('request failed'));
    //         return message;
    //     };
    //     fetchMessage().then((res) => setMessage(res));
    // }, []);