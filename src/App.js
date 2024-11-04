import './App.css';
import { Completerange } from './components/Completerange';
import { Contactus } from './components/Contactus';
import { Footer } from './components/Footer';
import { Herosection } from './components/Herosection';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}

    <Herosection/>

      {/* Complete Range */}

    <Completerange/>

      {/* Info Section */}
     <Contactus/>

      {/* Footer */}

      <Footer />
    </>
  );
}

export default App;
