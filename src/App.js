import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUser from "./Page/Users/List/ListUser";
import Detail from "./Page/Users/Detail/Detail";
import Album from "./Page/Users/Album/Album";
import ListPhoto from "./Page/Users/ListPhoto/ListPhoto";
import DetailPhoto from "./Page/Users/DetailPhoto/DetailPhoto";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListUser />} />
          <Route path="/users/:id_user/:name" element={<Detail />} />
          <Route path="/album/:id_user/:name" element={<Album />} />
          <Route path="/list-photo/:id_album" element={<ListPhoto />} />
          <Route path="/photo/:title/:photo" element={<DetailPhoto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
