import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";
import Header from "./components/Header/Header";
import { Route, Routes} from "react-router-dom";
import Form from "./components/Form/Form";
import ProductList from "./components/ProductList/ProductList";


const App = () => {
    const {tg} = useTelegram()

    useEffect(() => {
        tg.ready()
    }, [tg])

    return (
        <div className="App">

            <Header/>
            <Routes>
                <Route path={'/form'} element={<ProductList/>}/>
                <Route index element={<Form/>}/>
            </Routes>
        </div>
    );
};

export default App;