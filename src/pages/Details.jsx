import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Details() {
  let { id } = useParams();

  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      await axios
        .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then((ans) => {
          setBook(ans.data);
        })
        .catch((err) => {
          setBook([]);
        });
    };
    getBook();
  }, []);
  const regex = /(<([^>]+)>)/gi;


  return (
    <>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-3/6 lg:w-2/5 w-80 md:block hidden">
          <img
            className="w-9/12"
            alt="img "
            src={book.volumeInfo?.imageLinks?.thumbnail}
          />
        </div>
        <div className="md:hidden"></div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">
              {book.volumeInfo?.categories}
            </p>

            <h1
              className="
            lg:text-2xl
            text-xl
            font-semibold
            lg:leading-6
            leading-7
            text-gray-800
            mt-2
            "
            >
              {book.volumeInfo?.title}
            </h1>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">
              Author: {book.volumeInfo?.authors}
            </p>
          </div>

          <a
            className="
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
          text-base
          flex
          items-center
          justify-center
          leading-none
          text-white
          bg-gray-800
          w-full
          py-4
          hover:bg-gray-700
          "
       href={book.volumeInfo?.previewLink}

          >
       
              Buy Now
          </a>
          <div>
            {
              <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
                {book.volumeInfo?.description
                  ?.replace(regex, "")
                  .substring(0, 250)}
              </p>
            }
            <p className="text-base leading-4 mt-7 text-gray-600">
              Published Date: {book.volumeInfo?.publishedDate}
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600">
              Publisher: {book.volumeInfo?.publisher}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              Height: {book.volumeInfo?.dimensions?.height}
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600">
              thickness:{book.volumeInfo?.dimensions?.thickness}
            </p>

            <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
              width: {book.volumeInfo?.dimensions?.width}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
