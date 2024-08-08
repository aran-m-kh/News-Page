import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/rootLayout";
import Home from "./pages/home";
import News from "./pages/new";
import Popular from "./pages/popular";
import Trending from "./pages/trending";
import Categories from "./pages/Categories";
import { NewsPageProvider } from "./contex/newsPageContex";
function App() {
  
    return (
        
        <NewsPageProvider>
            <RootLayout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/new" element={<News/>} />
                    <Route path="/popular" element={<Popular/>} />
                    <Route path="/trending" element={<Trending/>}/>
                    <Route path="/Categories" element={<Categories/>}/>
                </Routes>
            </RootLayout>
        </NewsPageProvider>
    )
}

export default App
