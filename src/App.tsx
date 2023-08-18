import './App.scss';
import AppRoutes from './router';
import {Loading} from "./components/Loading";
import {RootState} from "./store";
import {useSelector} from "react-redux";

function App() {
    const isLoading = useSelector((state: RootState) => state.app.isLoading);

    return <>
        {isLoading && <Loading/>}
        <AppRoutes/>
    </>
}

export default App;
