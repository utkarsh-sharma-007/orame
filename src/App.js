import logo from './logo.svg';
import './App.css';
import Table from './Components/Table'


function App() {
  return (
    <>
      <div className="App">
        <div id="custom-loader" className={'loader'} style={{display: "none"}}>
          <div className={'lds-ring'}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Table/>
      </div>
    </>
  );
}

export default App;
