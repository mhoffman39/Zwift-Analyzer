import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectButton from './SelectButton';
import FileInput from './FileInput';
import Power from './Power';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // On file select (from the pop up)
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // On file upload (click the upload button)
  const onFileUpload = async () => {
    // Create a new formData object
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "fitFile", selectedFile, //selectedFile.name
    );
    // Details of the uploaded files
    console.log(selectedFile);

    // Request made to the backend api
    const options = {
      headers: { "Content-Type": "multipart/form-data" }
    };
    try {
      const response = await axios.post('http://localhost:3005/read', formData, options);
      const rideData = response.data;

      updateDatabase(rideData);
    }
    catch (error) {
      console.log(error)
    }
  };

  // File content to be displayed after file upload is complete
  const fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <br />
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>
          <p>File Type: FIT</p>
          <p>
            Last Modified:{" "}
            {selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  const updateDatabase = data => {
    // console.log('RideData: ', data)
      axios.post('http://localhost:3005/data', data)
      .then(function (res) {
        console.log('Database updated!');
      })
      .catch(function (res) {
        console.log(res);
      })
  }
  return (
    <div>
      <h1>
        Zwift Analyzer
      </h1>
      <div>
        <FileInput onChange={onFileChange} />
        <SelectButton onClick={onFileUpload} label={'Upload'} />
      </div>
      {fileData()}
      <Power />
    </div>
  );
}

export default App;

