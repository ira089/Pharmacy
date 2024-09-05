import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import {addCategory, addQuery} from '../../redux/search/searchSlice';
import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';
import {options} from '../../helpers/options';
import customStyles from './customStyles';
import styles from './filter.module.css';

const Filter = () => {
    
    const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
// console.log(search)
// console.log(category)
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
    
  };
 

  return (
    <form className={styles.wrapForma} onSubmit={handleSubmit}>
       <Select
          options={options}
          onChange={handleChangeCategory}
          styles={customStyles}
          placeholder={'Product category'}
        />
        <label className={styles.searchFormLabel}>
        <input
        className={styles.searchFormInput}
        onChange={handleChange}
        type="text"
        name="serch"
        value={search}
        placeholder="Search medicine"
      />
    
      <div className={styles.searchFormIcon}>
      <Icon width={16} height={16} name={'icon-loofah'} />
      </div>
      
        </label>
       
       <Button style={{ color: '#fff', width: '116px', height: '44px' }} type="submit" >
        <Icon className={styles.icon} width={14} height={12} name={'icon-filter'}/>
       Filter
      </Button>
    </form>
  )
}

export default Filter