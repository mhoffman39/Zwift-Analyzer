import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      rideData: {},
    };
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.fileData = this.fileData.bind(this);
    this.updateDatabase = this.updateDatabase.bind(this);
  }

  // On file select (from the pop up)
  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = async () => {
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
    //var that = this;
    const options = {
      headers: { "Content-Type": "multipart/form-data" }
    };
    try {
      const response = await axios.post('http://localhost:3005/read', formData, options);
      const rideData = response.data;

      this.updateDatabase(rideData);
    }
    catch (error) {
      console.log(error)
    }
    // axios.post('http://localhost:3005/read', formData, options)
    // .then(function (response) {
    //   //console.log('Response: ',response.data);
    //   that.setState({ rideData: response.data });
    // })
    // .then(
    //   this.updateDatabase()
    // )
    // .catch(function (response) {
    //   console.log(response);
    // });
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

  updateDatabase(data) {
    // if (this.state.rideData.cadence) {
    //   console.log('State: ', this.state.rideData)
    //   axios.post('http://localhost:3005/add', this.state.rideData)
    //   .then(function (res) {
    //     console.log(res)
    //   })
    //   .catch(function (res) {
    //     console.log(res)
    //   })
    // } else {
    //   console.log('hasnt updated yet')
    // }
    console.log('RideData: ', data)
      axios.post('http://localhost:3005/add', data)
      .then(function (res) {
        console.log(res)
      })
      .catch(function (res) {
        console.log(res)
      })
  }

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

