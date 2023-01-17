import axios from 'axios';

axios.defaults.baseURL = 'https://yesno.wtf';

export const getYesNoStatus = async () => {
  const {
    data: { answer },
  } = await axios('/api');
  return answer;
};
