import './App.scss';
import PackagesList from './components/PackagesList/PackagesList';
import { data } from '../src/store/data';

function App() {
  return (
    <div className="App">
      <section className="App__container">
        <h1 className="App__caption">Ты сегодня покормил кота?</h1>
        <PackagesList data={data} />
      </section>
    </div>
  );
}

export default App;
