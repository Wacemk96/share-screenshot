'use client';
import React, {useRef, useState} from 'react';

const Image = ({params}) => {
  const [isCopied, setCopied] = useState(false);
  const imageUrl = useRef(null);
  let url = `https://app.waseemk.com/uploads/images/${params.slug}`;
  const copylink = () => {
    if (imageUrl.current) {
      const url = imageUrl.current.value;
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setCopied(true);
          console.log(url);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
        });
    }
  };
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <p className="text-green-600 text-2xl font-bold py-2">One-Click Sharing:</p>
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-black md:text-5xl lg:text-6xl lg:max-w-7xl">
                Share Screenshots Instantly <br />{' '}
                <span>
                  Sharing <span className="text-green-600">Made Simple</span>
                </span>
              </h1>
              <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-600 lg:px-10 rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Share Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          id="intro"
          className="min-h-screen w-full mt-10"
        >
          <div className="flex gap-3 py-5 items-center">
            {/* {isCopied ? (
              <p className="text-green-600 font-bold py-5 text-center">Link has been Copied</p>
            ) : null} */}
            <button
              onClick={copylink}
              type="button"
              class="mb-2 md:mb-0 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Copy
            </button>
            {isCopied ? (
              <p className="text-green-600 font-bold text-center">Link has been Copied</p>
            ) : (
              <input
                ref={imageUrl}
                type="text"
                value={`http://localhost:3000/images/${params.slug}`}
                className="w-full py-2 bg-blue-100 border px-2"
                readOnly
              />
            )}
          </div>
          <img
            src={url}
            alt=""
          />
        </section>
      </div>
    </section>
  );
};

export default Image;
