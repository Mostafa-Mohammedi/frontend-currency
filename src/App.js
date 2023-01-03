import './App.css';
import CurrencyCalculator from './Currency/CurrencyCalculator';
import CurrencyTable from './Currency/CurrencyTable';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';


const App = () =>  {

  return (
    <div className="App">
      <Navbar/>
      <CurrencyTable/>
      <CurrencyCalculator/>
      <Footer/> 
    </div>
  );
}

export default App;
