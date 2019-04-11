import React from 'react';
import Select from 'react-select';

const RegistrationForm = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const props = {
     
    isSearchable: false,
    // isClearable: false,
  }
  return (
    <div>
      RegistrationForm
      <Select 
        options={options}
        {...props}
      />
    </div>
  )
}
export default RegistrationForm;
