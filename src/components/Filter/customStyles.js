

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    fontFamily: 'Inter',
    background: '#fff',
    borderRadius: '60px',
      padding: '0 12px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '12px',
    lineHeight: '150%',
    justifyContent: 'space-between',
    minWidth: '214px',
    borderColor: state.isFocused ? '#59b17a' : 'rgba(29, 30, 33, 0.1)',
    boxShadow: state.isFocused ? '#59b17a' : '0 0 0 1px transparent',

    
  }),
  placeholder: provided => ({
    ...provided,
    color: 'rgba(29, 30, 33, 0.4)',
  }),
  input: provided => ({
    ...provided,
    color: '#1d1e21',
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    color: 'rgba(38, 38, 38, 0.6)',
    fontFamily: 'Inter',
    fontSize: '12px',
    lineHeight: '150%',
    borderRadius: '15px',
    background: '#fff',
    boxShadow: 'transparent',
    overflow: 'scroll',
  }),
  valueContainer: provided => ({
    ...provided,
   padding:  '0',
   cursor: 'text',
  }),
};

export default customStyles;
