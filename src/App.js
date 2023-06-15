import './App.css';
import DisplayDetails from './components/DisplayDetails';
import AddContent from './components/AddContent';

function App() {
  return (
    
    <div className="App">
      <br/>
<DisplayDetails/>
{/* To display details of a paragraph on toggle & display count of no. of times button is clicked */}
<br/>
<AddContent />
{/* Input data & click 'add' button , on 'add' click= data is displayed on screen and every 5th element have blue background */}
    </div>
  );
}

export default App;
