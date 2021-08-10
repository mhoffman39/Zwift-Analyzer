import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = {
    selectedFile: null
  };

  // On file select (from the pop up)
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
      // Details of the uploaded files
      console.log(this.state.selectedFile);

      // Request made to the backend api
      // Send formData object
      //axios.post("http://localhost:3005/read", formData);
      // var request = new XMLHttpRequest();
      // request.open("POST", "http://localhost:3005/read");
      // request.send(formData);
      axios({
        method: "post",
        url: "http://localhost:3005/read",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (response) {
          console.log(response);
        });
    };

    // File content to be displayed after file upload is complete
    fileData = () => {
      if (this.state.selectedFile) {
        return (
          <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Type: {this.state.selectedFile.type}</p>
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
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

    render() {
      return (
        <div>
            <h1>
              Zwift Analyzer
            </h1>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}

        </div>
      );
    }
  }

  export default App;

