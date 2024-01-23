import React, { useEffect, useContext, useState, setIsLoading } from "react";
import { IoClose } from "react-icons/io5";
import { dataProvider } from "../../context/context";

const Cards = () => {
  const { data, fetchApi, handleDeleteCard, isLoading, setIsLoading } = useContext(dataProvider);
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      fetchApi();
    }, 5000);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const cardsPerPage = 6;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className="flex flex-wrap justify-around gap-y-5">
      {currentCards.map((item) => (
        <div
          key={item.id}
          className="w-[280px] bg-white px-6 py-2 rounded-xl flex flex-col justify-between"
        >
          <div>
            <div className="w-full relative">
              <IoClose
                onClick={() => handleDeleteCard(item.id)}
                className="absolute right-[-10px] text-2xl text-red-500 cursor-pointer"
              />
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
              Mon, 21 Dec 2020 14:57 GMT
            </h4>
            <img
              className="mb-3 mt-3 rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
              alt="cardImage"
            />
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

export default Cards;
