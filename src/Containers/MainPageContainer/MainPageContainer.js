import React, { useEffect, useState } from "react";
import { getAllHotels } from "../../services/hotelApi";
import MenuContainer from "../../Components/MenuContainer";
import "./MainPageContainer.scss";

const MainPageContainer = () => {
  const [hotelData, setHotelData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllHotels().then((data) => {
      if (data && !data.success) setError(true);
      setHotelData(data);
    });
  }, []);

  return hotelData.success && !hotelData.loading && hotelData.data ? (
    <div className="hotel-wrapper-container">
      <div class="hotel-image-container">
        {/* // <img class="hotel-image" src={`${hotelData.data.info.image_url}`}/> */}
        <div>
          <div
            class="hotel-image"
            style={{
              backgroundImage: `url(${hotelData.data.info.image_url})`,
            }}
          >
            <div className="hotel-name">
              {hotelData.data.info.restaurant_name} :{" "}
              {hotelData.data.info.restaurant_code}
            </div>
          </div>
          <div className="hotel-names">
            Hotel Names:
            {hotelData.data.info.charge_to_room_hotels.map((item) => {
              return <li data-testid={`${item.hotel_name}`}> {item.hotel_name}</li>;
            })}
          </div>
        </div>
      </div>
      {hotelData.data.menu.map((items) => {
        return <MenuContainer menuItem={items} />;
      })}
    </div>
  ) : (
    "No Data in API"
  );
};

export default MainPageContainer;
