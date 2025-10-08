import './App.css'
import Lista from './components/Lista'

function App() {

    const meusItens = ['Laranjinha🍊 ' , 'Maçãzinha🍎' , 'Ameixinha🫐', 'Uvinha🍇']

  return (
    <div className='App'>
      <h1> 🍓 Renderização De Lista 🍓</h1>
      <Lista itens={meusItens}/>
      <Lista itens= {[]}/>
    </div>
  )
}

export default App
