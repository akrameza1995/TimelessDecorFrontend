import React from 'react';

function HomeStagingApp() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center space-y-8">
      <nav className="w-full bg-white shadow p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Timeless Decor</div>
        <div className="space-x-4">
          <a href="#" className="text-blue-500">Login</a>
          <a href="#" className="text-white bg-blue-500 px-4 py-2 rounded">Sign Up</a>
        </div>
      </nav>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Unlock Airbnb Market Data & Insights</h1>
        <p className="text-gray-600 mt-4">Unlock the Potential of Any US Market with Customizable Short Term Rental Data</p>
      </div>
      <div className="w-full max-w-xl">
        <input type="text" placeholder="Enter an address, neighborhood, city or ZIP code" className="w-full p-4 border rounded-l-lg" />
        <button className="bg-blue-500 text-white p-4 rounded-r-lg">Start Analyzing</button>
      </div>
    </div>
  );
}

export default HomeStagingApp;
