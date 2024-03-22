import {
    Dropzone,
    FileMosaic,
    FullScreen,
    ImagePreview,
    VideoPreview,
  } from "@files-ui/react";
import axios from "axios";
  import * as React from "react";

  import { ref, uploadBytes, getDownloadURL} from "firebase/storage";
  import { storage} from "../firebase.config";
  
  const BASE_URL =
   "https://www.myserver.com";
  
  export default function AdvancedDropzoneDemo({course}) {
  
   const [extFiles, setExtFiles] = React.useState([]);
   const [imageSrc, setImageSrc] = React.useState(undefined);
   const [videoSrc, setVideoSrc] = React.useState(undefined);
   const [URL, setURL]= React.useState([])
  //  console.log('Course:', course);

   const updateFiles = (incommingFiles) => {
    //  console.log("incomming files", incommingFiles);
     setExtFiles(incommingFiles);
    
   };
   const onDelete = (id) => {
     setExtFiles(extFiles.filter((x) => x.id !== id));
   };
   const handleSee = (imageSource) => {
     setImageSrc(imageSource);
   };
   const handleWatch = (videoSource) => {
     setVideoSrc(videoSource);
   };
   const handleStart =  (filesToUpload) => {
     console.log("advanced demo start upload", filesToUpload);
   };
   const handleFinish = async (uploadedFiles) => {
    console.log("advanced demo finish upload", uploadedFiles);
    for( let i=0; i< uploadedFiles.length;i++){
      const imageRef = ref(storage, `/${course}/${uploadedFiles[i].name}`);

      const result = await uploadBytes(imageRef,uploadedFiles[i])
      .then((snapshot)=>{
        console.log("success");
        getDownloadURL(snapshot.ref).then((newurl)=>{
          console.log(newurl);
          setURL(URL => [newurl,...URL]);
          console.log(URL);
          
        });

        // axios.get('http://localhost:3001/submit', {
        //   params: {
        //     course:course
        //   }

        // })
        //   .then(function (response) {
          
        //     const json = response.json();
        //     console.log(json);
        //     const { course, ...rest } = json;
        // setURL(URL => [...URL, ...rest]);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
     

    
     
        
   
          axios.post("http://localhost:8080/submit",[course,...URL])
          .then((response) => {
            // console.log(response);
            const data = response.data; 
         
            console.log({...data} + "uploaded successfully")
          });

      

      })

    }
    console.log(URL);
   
    const url = 'http://localhost:8080/multiple';
    const formData = new FormData();
    console.log('Course:', course);
    console.log('FormData:', formData);
    formData.append('course', course);
    
    for (let i = 0; i < uploadedFiles.length; i++) {
        formData.append('files', uploadedFiles[i].file);
      }
    axios.post(url, formData, {
        headers: {
            
            'Content-Type': 'multipart/form-data',
              // Ensure correct Content-Type header
        },
    })
    .then((response) => {
        // console.log(response.data);
      
    })
    .catch((error) => {
        console.error("Error uploading files: ", error);
    });
};



   const handleAbort = (id) => {
     setExtFiles(
       extFiles.map((ef) => {
         if (ef.id === id) {
           return { ...ef, uploadStatus: "aborted" };
         } else return { ...ef };
       })
     );
   };
   const handleCancel = (id) => {
     setExtFiles(
       extFiles.map((ef) => {
         if (ef.id === id) {
           return { ...ef, uploadStatus: undefined };
         } else return { ...ef };
       })
     );
   };
   return (
     <>
       <Dropzone
            color="#6200EE"
          onChange={updateFiles}
          minHeight="195px"
          value={extFiles}
    
          maxFiles={3}
          maxFileSize={2 * 1024*1024}
          label="Drag'n drop files here or click to browse"
          
          uploadConfig={{
            // autoUpload: true
            url: BASE_URL + "/file",
            cleanOnUpload: true,
          }}
          onUploadStart={handleStart}
          onUploadFinish={handleFinish}
          fakeUpload
          
          actionButtons={{
            position: "after",
            abortButton: {},
            deleteButton: {},
            uploadButton: {},
            color:"rgb(197 169 246)"
          }}
       >
         {extFiles.map((file) => (
           <FileMosaic
             {...file}
             key={file.id}
             onDelete={onDelete}
             onSee={handleSee}
             onWatch={handleWatch}
             onAbort={handleAbort}
             onCancel={handleCancel}
             color="rgb(197 169 246)"
             alwaysActive
             preview
             info
           />
         ))}
       </Dropzone>
       <FullScreen
         open={imageSrc !== undefined}
         onClose={() => setImageSrc(undefined)}
       >
         <ImagePreview src={imageSrc} />
       </FullScreen>
       <FullScreen
         open={videoSrc !== undefined}
         onClose={() => setVideoSrc(undefined)}
       >
         <VideoPreview src={videoSrc} autoPlay controls />
       </FullScreen>
     </>
   );
  }