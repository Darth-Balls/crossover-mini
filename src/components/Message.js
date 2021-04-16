
function Message() {

//     const [message, setMessage] = useState([]);

//     useEffect(() => {
//         const fetchMessage = async () => {
//             const messages = await 
//                 .get('http://api.icndb.com/jokes/random')
//                 .then((result) => result.data);
//                 .then ((json) => {
//                   setMessage(json);
//                 })
//                 .catch(console.log('request failed'));
//             return message;
//         };
//         fetchMessage().then((res) => setMessage(res));
//     }, []);

import React, { useState, useEffect } from 'react';

function Message() {

    const [message, setMessage] = useState([]);

    useEffect(() => {
        const fetchMessage = async () => {
            const messages = await 
                .get('http://api.icndb.com/jokes/random')
                .then((result) => result.data);
                .then ((json) => {
                  setMessage(json);
                })
                .catch(console.log('request failed'));
            return message;
        };
        fetchMessage().then((res) => setMessage(res));
    }, []);

//     function getMessage(
//    url = "http://api.icndb.com/jokes/random"
//    )    {
//         fetch(url)
//             .then((res) => res.json())
//             .then((json) => {
//                 setMessage(json.value.joke)
//             })
//             .catch(() => console.log("Chuck Noris says Blyat"));
//     }

//         useEffect(getMessage, []);

//         return [message, getMessage]
    return (
        <div>

        </div>
    )
}

export default Message;
