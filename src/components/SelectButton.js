import Button from 'react-bootstrap/Button';

const SelectButton = ({ label, onClick }) => {

  return (
    <Button variant="primary" onClick={onClick}>{label}</Button>
  )
};

export default SelectButton;