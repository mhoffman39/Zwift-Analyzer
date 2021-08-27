import Form from 'react-bootstrap/Form';

const FileInput = ({ onChange }) => {

  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Label>Select FIT file to upload...</Form.Label>
      <Form.Control type="file" onChange={onChange} />
    </Form.Group>
  )
}

export default FileInput;