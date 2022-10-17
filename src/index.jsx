import React from 'react';

import ReactDOM from 'react-dom/client';

import imageJson from './assets/images.json';

// const img = src => {
//   return React.createElement('img', { src, width: '300px', height: '300px' });
// };

// const obj = { name: 'Bob' };
// const { name } = obj;
// obj.email -> indefined

// && ||

// const Avatar = ({ src = imageJson[0] }) => {
const Avatar = ({ src }) => {
  return <img src={src || imageJson[0]} width="100px" height="100px" alt="" />;
};

/* {src && <img src={src} width="100px" height="100px" alt="" />} */

const Wrapper = () => {
  return (
    <>
      <Avatar />
      <Avatar src={imageJson[1]} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Wrapper />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
