import React from "react";

function ListCard({name,url}) {
  return (
    <div>
    
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <img
              src={url}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
               {name}
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {name}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-red-600 cursor-auto my-3">
                  UP TO 10% OFF
                </p>
               
                <div className="ml-auto">
        
                </div>
              </div>
            </div>
          </a>
        </div>
   
    </div>
  );
}

export default ListCard;
