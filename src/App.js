import './assets/css/App.css';
import Header from './components/HeaderComponent';
import Section from './components/SectionComponent';
import Footer from './components/FooterComponent';
// import Router from './Router';

function App() {
  return (
    <div className="App">
      {/* <Router /> */}
      <Header />
      <Section />
      <Footer />
      
      {/* <header className="App-header">
       
      </header> */}
    </div>
  );
}

export default App;
