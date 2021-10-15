import "./app.css";
import "../app-info/app-info";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";
function App() {

    const data = [
        {name: "Dima K", salary: 800, increase: false},
        {name: "Dana M", salary: 1000, increase: false},
        {name: "Kira N", salary: 1500, increase: true},
    ];

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data = {data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App