import './App.css';
import Header from './components/Header/Header';
import '../src/Reset/Reset.css';
import '../src/Vars/Vars.css';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
