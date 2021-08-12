import Button from 'react-bootstrap/Button';

const UploadButton = ({ onClick }) => {

  return (
    <Button variant="primary" onClick={onClick}>Upload</Button>
  )
}

export default UploadButton;