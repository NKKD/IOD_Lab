import React from 'react';
import Greeting from './Greeting.jsx';
import BigCats from './Bigcats.jsx';
import Emoji from './Emoji.jsx'

const App = () => {
    return (
        <div>
            <h1>Welcome to My App</h1>

            <Greeting />

            <Greeting name="aaa" />

            <Greeting name="bbb">
                hello hello
            </Greeting>

            <BigCats/>

            <Emoji/>

        </div>


    );
};

export default App;
