import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./8.2/homepage";
import Blog from "./8.2/blog";
import AddArticle from "./8.2/dodaj";
import Articlebody from "./8.2/articlebody";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/dodaj" element={<AddArticle/>}/>
        <Route path="/article/:id" element={<Articlebody/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
