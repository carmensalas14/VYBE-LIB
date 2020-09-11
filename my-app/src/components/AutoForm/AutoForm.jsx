import React, { useState } from 'react';
import FormField1 from '../FormField/FormField1/FormField-1';
import FormField2 from '../FormField/FormField2/FormField-2';
import FormField3 from '../FormField/FormField3/FormField-3';
import Button from '../Button/Button';

import './Autoform.css';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  label {
    font-size: 18px;
  }
  @media (min-width: 340px) {
    label {
      font-size: 25px;
    }
  }
`;
const Field = ({ field, onChange }) => {
  // spreading all other attributes to component
  const { label, ...attributes } = field;
  return (
    <StyledDiv>
      <label className="label">{label}</label>
      {(() => {
        switch (attributes.formfield_type) {
          // more  cases can be added for selects etc.
          case 'FormField2':
            return (
              <FormField2 onChange={onChange} {...attributes}></FormField2>
            );
          case 'FormField3':
            return (
              <FormField3 onChange={onChange} {...attributes}></FormField3>
            );
          default:
            return (
              <FormField1 onChange={onChange} {...attributes}></FormField1>
            );
        }
      })()}
    </StyledDiv>
  );
};

const AutoForm = ({ form, onSubmit }) => {
  // fields state - array of objs
  const [fields, setFields] = useState(
    form.fields.map((field) => ({
      ...field,
      name: field.name || field.label,
      value: '',
    }))
  );

  // handling input change to update value
  // triggered when during input onChange
  const handleChange = (e) => {
    const name = e.target.getAttribute('name');

    const newFields = fields.map((field) => {
      return field.name === name ? { ...field, value: e.target.value } : field;
    });
    setFields(newFields);
  };

  //   handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // submit an obj of only field names and values
    const formData = fields.reduce((fields, field) => {
      return { ...fields, [field.name]: field.value };
    }, {});

    // the cb function that was passed down as a prop
    onSubmit(formData);
  };

  return (
    <form data-testid="autoform" onSubmit={handleSubmit}>
      {/* mapping over fields array state */}
      {fields.map((field, index) => (
        <Field key={index} field={field} onChange={handleChange} />
      ))}
      <Button color={form.config.buttonColor} type="submit">
        {form.config.buttonText || 'Submit'}
      </Button>
    </form>
  );
};

export default AutoForm;
