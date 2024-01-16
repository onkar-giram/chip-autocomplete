import React, { useState, useEffect } from 'react';
import UserRed from '../assets/user-red.png'

export default function Chip() {

    const allItems = [
        ["Bhagyashri Thombre", "bhagyashri@gmail.com"], 
        ["Onkar Giram", "onkar@gmail.com"], 
        ["Shubham Thombre", 'shubham@gmail.com'],
        ["Rajeshre Thombre", 'rajeshri@gmail.com']]
  
    const [inputValue, setInputValue] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
  
    const filteredItems = allItems.filter(
        item => !selectedItems.includes(item[0]) && item[0].toLowerCase().includes(inputValue.toLowerCase())
      );
    
      const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setShowSuggestions(true);
      };
    
      const handleItemClick = (item) => {
        setSelectedItems([...selectedItems, item[0]]);
        setInputValue('');
        setShowSuggestions(false);
      };
    
      const handleChipRemove = (item) => {
        const updatedSelectedItems = selectedItems.filter(selectedItem => selectedItem !== item);
        setSelectedItems(updatedSelectedItems);
      };


        return (   
            <div className="App p-4">
            <div className="relative w-full">
              <div className="flex flex-wrap items-center">
                {selectedItems.map((item) => (
                  <div key={item} className="flex relative top-2 bg-gray-300 text-gray-600 font-medium rounded-full px-2 py-1 m-2 cursor-pointer">
                  <img src={UserRed} className='w-5 h-5 mx-1 relative top-[2px]' /> {item}
                    
                    <span
                      className="ml-2"
                      onClick={() => handleChipRemove(item)}
                    >
                      &#10006;
                    </span>
                  </div>
                ))}
                <div>
                    <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder="Type to search..."
                    className="p-2 outline-none focus:ring-0 border-transparent  mt-4 w-[400px] rounded-md flex-grow selection:border-transparent focus:border-transparent"
                    />

                    {showSuggestions && (
                        <div className="absolute max-w-[400px] flex flex-col z-10 bg-white border rounded-md mt-2 w-full">
                        
                        {filteredItems.map((item) => (
                            <div
                            key={item}
                            className="p-2 margin-auto cursor-pointer hover:bg-gray-200"
                            onClick={() => handleItemClick(item)}
                            >
                            <div className='flex justify-between'>
                            <div className='flex '>
                                <img src={UserRed} className='w-5 h-5 mx-3 relative top-[2px]' />
                                {item[0]}
                            </div>
                             <span className='text-slate-500'>{item[1]}</span></div> 
                            </div>
                        ))}
                        </div>
                    )}    
                </div>
                
              </div>

            </div>
          </div>
                    );
}



/* 


    const allItems = ["Bhagyashri Thombre", "Onkar Giram", "Ganesh Bansa"]
  
    const [inputValue, setInputValue] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
  
    const filteredItems = allItems.filter(
        item => !selectedItems.includes(item) && item.toLowerCase().includes(inputValue.toLowerCase())
      );
    
      const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setShowSuggestions(true);
      };
    
      const handleItemClick = (item) => {
        setSelectedItems([...selectedItems, item]);
        setInputValue('');
        setShowSuggestions(false);
      };
    
      const handleChipRemove = (item) => {
        const updatedSelectedItems = selectedItems.filter(selectedItem => selectedItem !== item);
        setSelectedItems(updatedSelectedItems);
      };

*/