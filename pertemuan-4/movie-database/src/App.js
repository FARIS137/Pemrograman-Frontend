
import './App.css';

import Footer from './components/Footer.js';
import Header from './components/Header';
import Main from './components/Main';
import Hello from './components/Hello';

function App() {
  return (
  <div>   
    <h2>This is Create React App</h2>
      <Header />
      <Main />
      <Hello name="Aufa"/>
      <Footer />
  </div>
  );
}
export default App;
