
import React, { useState } from 'react';

export default function Announcement() {
   const [type,setType]=useState('student')
    const [inputText, setInputText] = useState('');
    const [chatMessages, setChatMessages] = useState(['Good Morning']);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSend = (event) => {
        event.preventDefault();
        if (inputText.trim() !== '') {
            setChatMessages([...chatMessages, inputText]);
            setInputText('');
        }
    };

    return (
        <div>
            <div href="#" class=" mt-10 block  w-full p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 " style={{paddingRight:10,height:500}}>
                <h5 class="mb-2 pt-2 pb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center mx-auto">Announcements</h5>
                <div className="overflow-y-auto" style={{height:320}}>
                    {chatMessages.map((message, index) => (
                        <div key={index} class="flex items-start gap-2.5 pb-3">
                            <img class="w-10 h-10 rounded-full" src="https://cdn-icons-png.freepik.com/256/7556/7556377.png?ga=GA1.1.1255800410.1704448219&" alt="Jese image"/>
                            <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 hover:bg-violet-300">
                                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                                    <span class="text-sm font-semibold text-gray-900 dark:text-white">You</span>
                                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                                </div>
                                <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{message}</p>
                            </div>
                        </div>
                    ))}
                </div>
               {type=='teacher' && <form onSubmit={handleSend} class="max-w-md mx-auto pt-5">   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Send</label>
                    <div class="relative">
                        <input type="text" value={inputText} onChange={handleInputChange} id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type your message..." required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                    </div>
                </form>}
            </div>
        </div>
    );
}
