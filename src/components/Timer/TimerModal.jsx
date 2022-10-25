import { Component } from 'react';

import { Modal } from 'components/Modal';

import { Timer } from './Timer';

export class TimerModal extends Component {
  state = {
    isModalOpen: false,
  };

  toggle = () => {
    this.setState(prevState => {
      return { isModalOpen: !prevState.isModalOpen };
    });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <>
        <button type="button" className="btn btn-primary mb-4" onClick={this.toggle}>
          Open timer
        </button>

        {isModalOpen && (
          <Modal onCloseModal={this.toggle}>
            <Timer />
          </Modal>
        )}
      </>
    );
  }
}
