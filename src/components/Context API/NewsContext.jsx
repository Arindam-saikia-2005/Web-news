

import { createContext,  useEffect,  useState } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {

    const API_KEY = "bdf1f79659894daf9d8c927d1ee97728";
    const [search ,setSearch] = useState("America");
    const [newsData,setNewsData] = useState([]);

 
    const fetchData = async () =>{
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    }
 
        useEffect(()=> {
            fetchData()
        },[])  
 
   return <NewsContext.Provider value={{setSearch,fetchData,newsData}} >{children}</NewsContext.Provider>

} 
 