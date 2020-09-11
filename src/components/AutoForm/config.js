export default {
  config: {
    buttonText: 'Send',
    buttonColor: '#90bbfd',
  },
  fields: [
    {
      formfield_type: 'FormField1',
      type: 'text',
      label: 'Name',
      color: '#bb9ece',
      placeholder: 'carmen',
      required: true,
    },
    {
      formfield_type: 'FormField3',
      type: 'date',
      label: 'Date',
      color: '#a4c5b7',
      placeholder: '1/25/20',
      required: true,
    },
    {
      formfield_type: 'FormField2',
      type: 'password',
      label: 'Password',
      color: '#8d99d6',
      placeholder: 'password',
      required: true,
    },
  ],
};
