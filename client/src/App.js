import { Route, Routes } from 'react-router-dom';

import Home from "./components/Home";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import UpdatePost from './components/UpdatePost';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/update/:id" element={<UpdatePost />} />
      </Routes>
    </div>
  );
};

export default App;
