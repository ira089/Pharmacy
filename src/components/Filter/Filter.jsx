import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import {addCategory, addQuery} from '../../redux/search/searchSlice';
import styles from './filter.module.css';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';

const Filter = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = ({ target }) => {
    setSearch(target.value.trim());
  };

  const handleChangeCategory = value => {
    setCategory(value.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addQuery(search));
    dispatch(addCategory(category));
    console.log('first')
  };
 

  return (
    <form className={styles.wrapForma} onSubmit={handleSubmit}>
       <Select
          options={options}
          onChange={handleChangeCategory}
        //   styles={customStyles}
          placeholder={'Product category'}
        />
        <label>
        <input
        className={styles.searchFormInput}
        onChange={handleChange}
        type="text"
        name="serch"
        value={search}
        placeholder="Search medicine"
      />
      <span className={styles.searchFormButtonLabel}></span>
      <Icon width={16} height={16} name={'icon-loofah'} />
        </label>
       
       <Button type="submit" >
       Filter
      </Button>
    </form>
  )
}

export default Filter