import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";
import Header from "./components/Header/Header";


const App = () => {
    const {onToogleButton, tg} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [tg])

    return (
        <div className="App">
            <button onClick={onToogleButton}>toogle</button>
            <Header/>
        </div>
    );
};

export default App;