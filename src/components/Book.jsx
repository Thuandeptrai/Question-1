import axios from "axios";
import { useContext, useEffect, useState } from "react";
function Book({ query, author }) {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      if (query !== "") {
        await axios
          .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
          .then((ans) => {
            if (query !== undefined) {
              setBook(ans.data.items);
            }
          })
          .catch((err) => {
            setBook([]);
          });
      }
    };

    getBook();
  }, [query]);
  return (
    <>
      {book === undefined || book.length === 0 ? (
        <div className="grid place-items-center ">
          <h1 className="text-lg  font-bold">Not Found</h1>
        </div>
      ) : (
        <>
          <div className="container  mx-auto max-w-screen-lg px-3">
            <ul className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-5">
              
              
              {
              book.map((data, id) => (
                <li
                  key={id}
                  className="relative group flex items-center  mb-3.5 sm:mb-0"
                >
                  <div>
                    <a
                      href={`/book/${data.id}`}
                      className="text-sm md:text-base font-bold mb-3 max-w-xs ml-auto"
                    >
                      {data.volumeInfo.title}
                    </a>
                    <img
                      src={data.volumeInfo?.imageLinks?.thumbnail}
                      className="ml-20"
                      alt="Thumb"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Book;
