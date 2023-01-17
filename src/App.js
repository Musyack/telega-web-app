import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";


const App = () => {
    const {onToogleButton, tg} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [tg])

    return (
        <div className="App">
            <button onClick={onToogleButton}>toogle</button>
        </div>
    );
};

export default App;