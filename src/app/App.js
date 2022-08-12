import './App.css';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom'
import PersistMemberStore from './setup/redux/PersistMemberStore'
import setupAxios from './setup/axios/setupAxios';
import Routes from './routing/Routes';
function App() {
  setupAxios(axios, PersistMemberStore);
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
