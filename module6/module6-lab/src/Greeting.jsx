import React from 'react';

function Greeting(props) {
    

    let messageJSX = <h1>Hello world</h1>
    if(props.name)
        messageJSX = <h1>{props.name}</h1>
      
    return (
        <div>
            {messageJSX}

            <p> 
                {props.children}
            </p>

        </div>
    );
};

export default Greeting;
