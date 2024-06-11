import React from 'react';
import Uploadphp from './Uploadphp';

const Share = () => {
  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="text-center">
              <p className="text-blue-600 text-2xl font-bold py-2">One-Click Sharing:</p>
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
          <Uploadphp />
        </section>
      </div>
    </section>
  );
};

export default Share;
