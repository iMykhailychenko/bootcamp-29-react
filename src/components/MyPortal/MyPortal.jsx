import { useState } from 'react';

import { Modal } from 'components/Modal';

export const MyPortal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <br />
      <button type="button" onClick={toggle} className="btn btn-primary my-4">
        toggle
      </button>

      {isOpen && (
        <Modal onCloseModal={toggle}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quisquam voluptatum sequi consequuntur,
            nesciunt dicta repellendus reprehenderit tenetur dignissimos molestiae, expedita laudantium, aliquid saepe
            fuga exercitationem aliquam. Consequatur, ratione dolore.
          </p>
        </Modal>
      )}
    </>
  );
};
