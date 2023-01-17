import React, {useEffect} from 'react';
import "./App.css"

const tg = window.Telegram.WebApp
const App = () => {

    useEffect(() => {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close()
    }

    return (
        <div className="App">
          work
            <button onClick={onClose}>закрыть</button>
        </div>
    );
};

export default App;