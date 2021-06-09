import React from 'react';
import MenuContainer from '../../Components/MenuContainer';
import {
  render,
  cleanup,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import {hotelMockData} from "../../MockData/mockData";


test('renders MenuContainer Successfully', async () => {
    let scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    const {getByTestId } = render(
      <MenuContainer menuItem={hotelMockData.menu[0]}/>
    );
    let ele= getByTestId('Salads');
    fireEvent.click(ele)
  });