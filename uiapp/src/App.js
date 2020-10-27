import logo from './logo.svg';
import './App.css';
import { observer } from "mobx-react-lite";
import useStores from './stores/useStores';

const App = observer(( )=>{
  const {uiState} = useStores();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ready to start <code>`coding`</code>.
        </p>
        <p>Window Size: {uiState.windowDimensions.width} x {uiState.windowDimensions.height}</p>
      </header>
    </div>
  );
});

export default App;
