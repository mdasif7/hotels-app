import axios from 'axios';
import { getAllHotels } from '../../services/hotelApi';
import {hotelMockData} from "../../MockData/mockData";


jest.mock('axios');
let mockData ={
  data:hotelMockData,
    success: true,
    loading:false
}
beforeEach(() => {
    jest.resetAllMocks();
  });
  it('Get Hotels data API', async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: hotelMockData })
    );

    const entity = await getAllHotels();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(entity).toEqual(mockData);
  });
  
  it(' API Fails', async () => {
    axios.get.mockImplementation(() =>
      Promise.reject("Error")
    );
    const entity = await getAllHotels();
  });