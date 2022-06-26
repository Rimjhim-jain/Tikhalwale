import React, { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {CreateContainer} from './components';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';
import {Header,Footer} from './components';
import {HomeContainer} from './components';


const App = () => {
  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async() => {
    await getAllFoodItems().then(data => {
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data,
      });
    });
  };

  useEffect(()=> {
    fetchData();
  },[]);

  return (
  <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary" >
      <Header />
    <main className=' mt-14 px-4 md:mt-20 md:px-16 py-4 w-full'>
        <Routes>
          <Route path='/*' element={<HomeContainer/>}/>
          <Route path='/createItem' element={<CreateContainer/>}/>
        </Routes>
      </main>

      <Footer/>
    </div>
  </AnimatePresence>
  )
}

export default App;