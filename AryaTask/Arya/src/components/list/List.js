import React, { useContext, useState } from "react";
import { dataProvider } from "../../context/context";
import { IoClose } from "react-icons/io5";

const List = () => {
    const { data, fetchApi, handleDeleteCard, isLoading, setIsLoading } = useContext(dataProvider);
    const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 6;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      fetchApi();
    }, 3000);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full  gap-y-3  ">
      {currentCards?.map((item) => (
        <div key={item.id} className="flex items-center p-[15px] px-6 bg-white rounded-lg relative" >
          <img
            className="w-[65px] h-[65px] rounded-full"
            src="https://png.pngtree.com/thumb_back/fh260/background/20230516/pngtree-anime-girl-in-a-neon-shirt-with-blue-hair-image_2563735.jpg"
            alt="profil"
          />
          <div className="ml-6">
            <h3 className="text-xl font-bold leading-6 mb-2">
              {item.title.charAt(0).toUpperCase() +
                item.title.slice(0, 60).slice(1)}
              ...
            </h3>
            <p>
              {item.body.charAt(0).toUpperCase() +
                item.body.slice(0, 90).slice(1)}
              ...
            </p>
            <h4 className="font-bold text-gray-400">
              Mon, 21 Dec 2020 14:57 GMT
            </h4>
          </div>
          <div className="absolute right-[-50px] p-1 bg-white rounded-full">
            <IoClose className="text-3xl text-rose-500"/>
          </div>
        </div>
      ))}

<div className="pagination flex items-center justify-center space-x-2 mt-4">
        {[...Array(Math.ceil(data.length / cardsPerPage)).keys()].map(
          (number) => (
            <span
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`pagination-item cursor-pointer px-4 py-2 rounded-full ${
                number + 1 === currentPage
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-200"
              }`}
            >
              {number + 1}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default List;
