
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";




import "./App.css";
import { NewsProvider } from "./components/Context API/NewsContext.jsx";

const App = () => {
  return (
    <NewsProvider>
    <header>
      <Header/>
     </header>
     <main>
      <Outlet/>
     </main>
     <footer>
       <Footer/>
     </footer>
    
    </NewsProvider>
     
  )
}

export default App;