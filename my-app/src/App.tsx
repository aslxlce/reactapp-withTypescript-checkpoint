import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

const App: React.FC = () => {
    return (
        <div>
            <h1>Welcome to My TypeScript React App</h1>
            <Greeting name="John Doe" />
            <Counter />
        </div>
    );
};

export default App;
