import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form'

import './app.css'

function App() {

   const data = [
      {name: 'Alex', salary: 800, increase: false},
      {name: 'Victor', salary: 3000, increase: true},
      {name: 'Vlad', salary: 5000, increase: false},
   ];

   return (
      <div className="app">
         <AppInfo/>
         
            <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
            
            </div>
            
            <EmployersList data={data}/>
            <EmployersAddForm/>

      </div>
   );
}

export default App;