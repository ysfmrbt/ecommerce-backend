import "@radix-ui/themes/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Articles
import ListArticles from "./components/articles/ListArticles";
import EditArticle from "./components/articles/EditArticle";
import InsertArticle from "./components/articles/InsertArticle";
import ViewArticle from "./components/articles/ViewArticle";
// Categories
import ListCategories from "./components/categories/ListCategories";
import EditCategorie from "./components/categories/EditCategorie";
import InsertCategorie from "./components/categories/InsertCategorie";
import ViewCategorie from "./components/categories/ViewCategorie";
// Scategories
import ListScategories from "./components/scategories/ListScategories";
import EditScategorie from "./components/scategories/EditScategorie";
import InsertScategorie from "./components/scategories/InsertScategorie";
import ViewScategorie from "./components/scategories/ViewScategorie";
import Liste from "./Liste";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/articles" element={<ListArticles />} />
          <Route path="/articles/add" element={<InsertArticle />} />
          <Route path="/articles/view/:id" element={<ViewArticle />} />
          <Route path="/articles/edit/:id" element={<EditArticle />} />
          <Route path="/categories" element={<ListCategories />} />
          <Route path="/categories/add" element={<InsertCategorie />} />
          <Route path="/categories/view/:id" element={<ViewCategorie />} />
          <Route path="/categories/edit/:id" element={<EditCategorie />} />
          <Route path="/scategories" element={<ListScategories />} />
          <Route path="/scategories/add" element={<InsertScategorie />} />
          <Route path="/scategories/view/:id" element={<ViewScategorie />} />
          <Route path="/scategories/edit/:id" element={<EditScategorie />} />
          <Route path="/" element={<Liste />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
