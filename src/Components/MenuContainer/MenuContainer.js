import React, { useState, useEffect, useRef } from "react";
import Noimage from "../../MockData/no-image.jpg";

const MenuContainer = (menuItems) => {

  let refs = {};
  const generateRefs = (headerRef) => {
    refs = headerRef.reduce((acc, value) => {
      acc[value.name] = React.createRef(null);
      return acc;
    }, {});
  };
  const generateSectionsHeaders = (item) => {
    generateRefs(item.menu_categories);
    let headers = item.menu_categories.map((header,i) => (
      <h2 key={header.name+i} data-testid={header.name} onClick={() => handleClick(header.name)}>{header.name}</h2>
    ));
    return headers;
  };
  const handleClick = (id) =>
   /* istanbul ignore next */
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const generateSectionsItems = (item) => {
    let headers = item.menu_categories.map((header, i) => (
      <div key={`${header.name}-${i}`} ref={refs[header.name]}>
        <h3>{header.name}</h3>
        {header.items.map((item) => generateCard(item))}
      </div>
    ));
    return headers;
  };
  const generateCard = (item) => {
    let card = (
      <div key={`${item.image}-${item.name}`} className="item-card">
        <div className="item-image">
          <img
            src={`${item.image ? item.image : Noimage}`}
            alt="No Img Available"
          />
        </div>
        <div className="item-details">
          <p className="item-name">{item.name}</p>
          <p className="item-price">AED {item.price}</p>
          <p className="item-description">
            {item.description ? item.description : "-"}
          </p>
        </div>
      </div>
    );
    return card;
  };
  return (
    <div className="menu-container">

      <div className="menu-categories">
        {menuItems.menuItem.menu_sections.map((item) =>
          generateSectionsHeaders(item)
        )}
      </div>
      <h3 className="menu-type-name"> BREAKFAST {menuItems.menuItem.menu_name}</h3>
      <div className="menu-items">
        {menuItems.menuItem.menu_sections.map((item) =>
          generateSectionsItems(item)
        )}
      </div>
    </div>
  );
};

export default MenuContainer;
