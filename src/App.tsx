import './App.css'
import { RecoilRoot } from 'recoil'
import BasicForm from './components/BasicForm'
import ReactHookForm from './components/ReactHookForm'
import TodoList from './components/TodoList'

function App() {

  return (
    <div className="App">
      <RecoilRoot>
        {/* <ReactHookForm /> */}
        <TodoList />
      </RecoilRoot>
    </div>
  )
}

export default App
