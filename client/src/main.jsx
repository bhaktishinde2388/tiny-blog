import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'
import './index.css'
import AllBlog from './views/AllBlog.jsx';
import NewBlog from './views/NewBlog.jsx';
import EditBlog from './views/EditBlog.jsx';
import ReadBlog from './views/ReadBlog.jsx';
import Login from './views/Login.jsx';
import SignUp from './views/SignUp.jsx';


createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Routes>
<Route path="/" element={<AllBlog/>}/>
<Route path="/newblog" element={<NewBlog />}/>
<Route path="/edit/:id" element={<EditBlog />}/>
<Route path="/readblog/:slug" element={<ReadBlog />}/>  
<Route path="/login" element={<Login />}/>  
<Route path="/signup" element={<SignUp />}/>  
<Route path="*" element={<h1 className='text-center'>404 error ,path not match🫥</h1>}/>  
</Routes>
</BrowserRouter>
)
