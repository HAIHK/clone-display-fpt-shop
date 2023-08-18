import './App.scss';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
// import Categori from './components/HomePage/item/Categori';
// import Promotion from './components/HomePage/item/Promotion';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      {/* <Categori />
      <Promotion /> */}
    </div>
  );
}

export default App;
