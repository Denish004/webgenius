import React, { useState } from 'react';
import axios from 'axios';

import AdvancedDropzoneDemo from '../Components/FileUpload';

function UploadContainer() {
  const [course, setCourse] = useState('');

  return (
    <div className="flex-col m-24 bg-slate-50 p-10 shadow-lg shadow-violet-500" style={{borderRadius:5,backgroundImage:"url('https://hack-x-celerate.vercel.app/static/media/pattern4.d70898849577572cae6e.png')"}}>
        <label></label>
      <input placeholder='Course' type='text' className='mb-10 ' style={{backgroundColor:'rgb(226 213 246)',borderRadius:5}} value={course} onChange={(e) => setCourse(e.target.value)}></input>
      <AdvancedDropzoneDemo course={course} />
    </div>
  );
}

export default UploadContainer;
