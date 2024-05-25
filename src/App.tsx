import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CreateContactForm from './components/createContactForm';
import Navbar from './components/navbar';
import Charts from './pages/charts';
import { Provider } from 'react-redux';
import { store } from './store/store';
import EditContactForm from './components/editContact';


function App() {
  return (
    <Provider store={store} >
      <div className="w-full h-screen max-h-auto">

      <BrowserRouter>

        <div className='flex  w-full h-auto'>
        
          {/* SIDENAVBAR */}
          <div className='w-fit m-0 h-screen'>
            <Navbar />
          </div>
          
          {/* HEADER */}
          <div className=' flex flex-col w-full '>
              <header className='h-10 text-center py-1 text-xl font-bold white bg-slate-300 border-2 border-b-gray-400'>
                Contact Page
              </header>

              {/* BODY - CONTENT */}
              <div className='w-full h-full mb-8'>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/create' element={<CreateContactForm />} />
                  <Route path='/edit/:id' element={<EditContactForm />} />
                  <Route path='/charts' element={<Charts />} />
                </Routes>
              </div>
          </div>
          </div>


        {/* FOOTER */}
        <footer className="bg-gray-300  border-2  border-t-slate-400 mt-8 mb-0 w-full h-16"> 
          <p className="text-center py-5 font-medium">Designed and Developed by Dharshan</p>
        </footer>
      </BrowserRouter>

      </div>
    </Provider>
  );
}

export default App;
