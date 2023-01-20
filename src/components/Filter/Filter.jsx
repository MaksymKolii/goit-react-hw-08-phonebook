import { React } from 'react';
import { Label, Input } from './Filter.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import { setFilter } from '../../redux/filter/filterSlice';
import { useDispatch } from 'react-redux';
// import { Input,Stack } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange =(ev)=>{
   
  const check = ev.target.value;

  if (check.trim() === '') {
    Notify.warning(`You didn't put anything !`);
   
  }
  dispatch(setFilter(check.trim().toLowerCase()))
  }
 

  return (
//     <Stack spacing={4}>
//   {/* <InputGroup>  */}
//     {/* <InputLeftAddon children='+234' /> */}
//     <Input type='text' name="filter" placeholder='Find contacts by name'width='25rem' color='black'
//          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//               // onChange={ev => dispatch(setFilter(ev.target.value.toLowerCase()))} 
//               onChange={onChange} 
//               />
//   {/* </InputGroup> */}

// </Stack>
<Label>
Find contacts by name
<Input
  type="text"
  name="filter"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={onChange}
  // value={filtered}
/>
</Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  // value: PropTypes.string,
};
