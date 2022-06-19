import './App.scss';
import PackageList from './components/PackageList/PackageList';
import { data } from '../src/store/data';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <h1 className="App__caption">Ты сегодня покормил кота?</h1>
        <PackageList data={data} />
      </div>
    </div>
  );
}

export default App;
