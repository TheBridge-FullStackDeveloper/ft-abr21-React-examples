import { BrowserRouter} from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Main/>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
