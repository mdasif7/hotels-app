import React from 'react';
import MainPageContainer from '../../Containers/MainPageContainer';
import {
  render,
  cleanup,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import { getAllHotels } from '../../services/hotelApi';
import {hotelMockData} from "../../MockData/mockData";

beforeEach(cleanup);

jest.mock('../../services/hotelApi', () => ({
  getAllHotels: jest.fn(),
}));

let mockData ={
    data:hotelMockData,
      success: true,
      loading:false
}
let mockDataFail ={
    data:hotelMockData,
      success: false,
      loading:false
}
test('renders the story container with a story', async () => {
  getAllHotels.mockImplementation(() => Promise.resolve(mockData));
  const {getByTestId } = render(
    <MainPageContainer />
  );
  await waitFor(() =>
    expect(getByTestId("Dar Al Masyaf")).toBeTruthy()
  );
});
test('renders the story with API failed', async () => {
    getAllHotels.mockImplementation(() => Promise.resolve(mockDataFail));
   render(
      <MainPageContainer />
    );
   
  });

