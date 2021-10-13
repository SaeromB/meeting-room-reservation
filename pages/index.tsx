import type { NextPage } from 'next'
import { ReservationModal } from '../src/components/reservation-modal'
import { ConfirmationModal } from '../src/components/confirmationModal';
import { useState } from 'react';
import React from 'react';

const useModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(!isShown);
  return {
    isShown,
    toggle,
 
  };
};


const Home: NextPage = () => {
  const { isShown, toggle } = useModal();
  const onConfirm = () => toggle();
  const onCancel = () => toggle();


  const content = <React.Fragment>modal</React.Fragment>;

  return (
    <React.Fragment>
      <button onClick={toggle}>Open modal</button>
      <ReservationModal
        isShown={isShown}
        hide={toggle}
        headerText=""
        modalContent={
          <ConfirmationModal
            onConfirm={onConfirm}
            onCancel={onCancel}
            message="회의내용"
          />
        }
      />
    </React.Fragment>
  )
}

export default Home

