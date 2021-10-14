import { NextPage } from 'next'
import { ReservationModal } from '../src/components/reservation-modal'
import { ConfirmationModal } from '../src/components/confirmationModal';
import { useState } from 'react';
import React from 'react';
import GlobalStyle from '../src/globalStyles';
import ReservationContent from '../src/components/pages/reservation';


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

  return (
    
    <React.Fragment>
      <GlobalStyle/>
      <ReservationContent/>
      {/* Modal */}
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

