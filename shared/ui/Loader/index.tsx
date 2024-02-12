import { RotatingTriangles } from 'react-loader-spinner';

export const Loader = () => (
  <RotatingTriangles
    visible={true}
    height="80"
    width="80"
    colors={['#1B5299', '#EF8354', '#DB5461']}
    ariaLabel="rotating-triangles-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
);
