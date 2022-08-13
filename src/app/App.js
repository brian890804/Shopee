import './App.css';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom'
import PersistMemberStore from './setup/redux/PersistMemberStore'
import setupAxios from './setup/axios/setupAxios';
import MainRoutes from './routing/MainRoutes';
function App() {
  setupAxios(axios, PersistMemberStore);
  return (
    <BrowserRouter>
        <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
