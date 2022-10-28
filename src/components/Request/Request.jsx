import { useEffect, useState, useRef } from 'react';

import axios from 'axios';
import { Modal } from 'components/Modal';

const RequestModal = () => {
  const controllerRef = useRef(new AbortController());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:4000', {
        signal: controllerRef.current.signal,
      })
      .then(() => {
        console.log('Success');
      })
      .catch(e => {
        if (e.code === 'ERR_CANCELED') {
          alert('Rejected');
        } else {
          alert('Error');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controllerRef.current.abort();
    };
  }, []);

  return (
    <>
      {isLoading && <p>Loading....</p>}

      <button onClick={() => controllerRef.current.abort()} className="btn btn-danger" type="button">
        Cancel request
      </button>
    </>
  );
};

export const Request = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <br />
      <button onClick={toggle} className="btn btn-primary my-4" type="button">
        Open Request modal
      </button>

      {isOpen && (
        <Modal onCloseModal={toggle}>
          <RequestModal />
          <RequestModal />
        </Modal>
      )}
    </>
  );
};
