import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EployeesList from '../employees-list/employees-list';
import EployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


function App() {

    const data = [
        { name: "John Smith", salary: 800, increase: true },
        { name: "Ann Rise", salary: 3000, increase: false },
        { name: "Oli Sykes", salary: 700, increase: true },
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EployeesList data={data} />
            <EployeesAddForm />
        </div>
    )
}

export default App;