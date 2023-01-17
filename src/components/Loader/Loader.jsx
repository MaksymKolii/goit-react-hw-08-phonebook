import { Triangle, Rings } from 'react-loader-spinner';

import { LoaderClass } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderClass>
      <Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderClass>
  );
};

export const LoaderRings = () => {
  return (
    <LoaderClass>
      <Rings
        height="80"
        width="80"
        color="#4fa94d"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </LoaderClass>
  );
};
