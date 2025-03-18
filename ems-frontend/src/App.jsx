import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponenet from './components/HeaderComponenet'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <div className='wrapper'>
        <HeaderComponenet></HeaderComponenet>
        <div className='content'>
          <Routes>
            {/* // http://localhost:3000 */}
            <Route path='/' element = {<ListEmployeeComponent></ListEmployeeComponent>}>
          
            {/* // http://localhost:3000 */}
            <Route path='/employees' element = {<ListEmployeeComponent></ListEmployeeComponent>}></Route></Route>
          
            {/* // http://localhost:3000/employees */}
            <Route path='/add-employee' element = {<EmployeeComponent></EmployeeComponent>}></Route>
          
            {/* // http://localhost:3000/edit-employee/1 */}
            <Route path='/edit-employee/:id' element = {<EmployeeComponent></EmployeeComponent>}></Route>
          </Routes>
          </div>
        < FooterComponent></FooterComponent>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
