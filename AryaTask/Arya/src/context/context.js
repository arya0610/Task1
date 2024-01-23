import React, { createContext, useState } from "react";
import axios from "axios";

const dataProvider = createContext();
const ContextProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [deletedCard, setDeletedCard] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let [isOpen, setIsOpen] = useState(false)

    function handleDeleteCard(id) {
        const deletedData = data.filter((e) => e.id === id);
        setDeletedCard((prvData) => [...prvData, ...deletedData]);
        setData(data.filter((item) => item.id !== id));
    }

    function closeModal() {
        setIsOpen(false)
      }
    
      function openModal() {
        setIsOpen(true)
      }

    const fetchApi = () => {
        setTimeout(async() => {
         try {
           const response = await axios.get(
             "https://jsonplaceholder.typicode.com/posts"
           );
           setData(response.data);
           setIsLoading(false);
         } catch (error) {
           console.error("Error fetching data:", error);
           setIsLoading(false);
         }
        }, 5000)
       };

    return (
        <dataProvider.Provider
            value={{
                data,
                setData,
                deletedCard,
                handleDeleteCard,
                fetchApi,
                isLoading,
                setIsLoading,
                isOpen, 
                setIsOpen,
                closeModal,
                openModal,
            }}
        >
            {children}
        </dataProvider.Provider>
    )
}

export { dataProvider, ContextProvider };



