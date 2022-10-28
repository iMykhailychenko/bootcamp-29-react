import { useEffect } from 'react';

import { PropTypes } from 'prop-types';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-portal');

export const Modal = ({ children, title = 'My modal', onCloseModal }) => {
  // const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleKeyModalClose = event => {
      if (event.code === 'Escape') {
        onCloseModal();
        // console.log(counter);
      }
    };

    window.addEventListener('keydown', handleKeyModalClose);

    return () => {
      window.removeEventListener('keydown', handleKeyModalClose);
    };
  }, [onCloseModal]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className="modal-backdrop fade show" />

      <div className="modal fade show" style={{ display: 'block' }} onClick={handleBackdropClick}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>

              <button type="button" className="btn-close" aria-label="Close" onClick={onCloseModal} />
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>,
    modalRoot,
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyModalClose);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyModalClose);
//   }

//   handleKeyModalClose = event => {
//     if (event.code === 'Escape') {
//       this.props.onCloseModal();
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onCloseModal();
//     }
//   };

//   render() {
//     const { children, title = 'My modal', onCloseModal } = this.props;

//     return (
//       <>
//         <div className="modal-backdrop fade show" />

//         <div className="modal fade show" style={{ display: 'block' }} onClick={this.handleBackdropClick}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">{title}</h5>

//                 <button type="button" className="btn-close" aria-label="Close" onClick={onCloseModal} />
//               </div>

//               <div className="modal-body">{children}</div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

Modal.propType = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

// const reactDOM = {
//   createRoot: () => {},
//   createPortal: () => {},
// };

// reactDOM.createPortal()
