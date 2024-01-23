import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Cards from './Cards';
import { dataProvider } from '../../context/context';
import List from '../list/List';
import Modal from '../Modal';


const Content = () => {
  const { deletedCard } = useContext(dataProvider);

  return (
    <div className='w-full p-16 overflow-y-auto'>
      <Modal />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/lists" element={<List />} />
      </Routes>
      {
          deletedCard.length > 0 && (
            <div className='w-full border-t-2 border-indigo-500 mt-12'>
              <h2 className='text-2xl font-bold'>Delete Data Store Here</h2>
              <div className="flex w-full flex-wrap gap-x-4 gap-y-5">
      {deletedCard?.map((item, i) => (
        <div key={i} className="w-[280px] mt-4 bg-white px-6 py-2 rounded-xl flex flex-col justify-between">
         
         <div>
         <div className="w-full relative">
          </div>
          <h3 className="mt-4 text-xl font-bold leading-6 mb-2">
            {item.title.charAt(0).toUpperCase() +
              item.title.slice(0, 30).slice(1)}
            ...
          </h3>
          <p>
            {item.body.charAt(0).toUpperCase() +
              item.body.slice(0, 50).slice(1)}
            ...
          </p>
         </div>

          <div>
            <h4 className="font-bold text-gray-400">
              Mon,21 Dec 2020 14:57 GMT
            </h4>
            <img
              className="mb-3 mt-3 rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
              alt="cardImage"
            />
          </div>
        </div>
      ))}
    </div>
            </div>
           
          )
        }
    </div>
  )
}

export default Content
