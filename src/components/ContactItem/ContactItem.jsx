import PropTypes from 'prop-types';
import { Span, P} from './ContactItem.styled';
import { contactsOperations } from 'redux/contacts';
import { IconButton } from '../IconButton/IconButton';

import { ReactComponent as DeleteIcon } from 'Icons/delete2.svg';
import { useDispatch } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Avatar from 'react-avatar';
import Box from '@mui/material/Box';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();


  const onDeleteContact = () => {
    dispatch(contactsOperations.deleteContact(id));
    Notify.success(`Contact successfully removed`);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'start',  alignItems :'center',mb:'0.5rem'}}>
        {' '}
        <Span>
          <Avatar name={name} size="35" round={true} />
        </Span>
        <P>
          Name:<Span>{name}</Span>
        </P>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'start',  alignItems :'center'  }}>
        <P>
          Phone number:<Span>{number}</Span>
        </P>
      
      <IconButton onClick={onDeleteContact} aria-label="Удалить контакт">
        {/* {isDeleting && <LoaderRings />} */}
        <DeleteIcon width={20} height={20}></DeleteIcon>
      </IconButton>
      </Box>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
};
