import {useState} from 'react';
import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import Main from "./components/UI/Main";

function App() {
  const [pageLanguage, setPageLanguage] = useState<string>('PT');

  function toggleLanguage (){
    if(pageLanguage === 'PT') return setPageLanguage('EN');
    if(pageLanguage === 'EN') return setPageLanguage('PT')
  }
  return (
    <>
      <Header toggleLanguage={toggleLanguage} language={pageLanguage}/>
      <Main language={pageLanguage} />
      <Footer />
    </>
  )
}

export default App
