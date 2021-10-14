import { NextPage } from 'next'
import React, { Fragment } from 'react';
import ReservationContent from '../src/components/pages/reservation'
import GlobalStyle from '../src/globalStyles';

const Reservation: NextPage = () => {
  return (
  <Fragment>
    <GlobalStyle />
      <ReservationContent/>
  </Fragment>
  )
}

export default Reservation;