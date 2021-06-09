export const idsMock = {
    data: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      33,
      44,
    ],
    success: true,
    loading: false,
  };
  export const idsMockFails = {
    data: [],
    success: false,
    loading: true,
  };
  
  export const articleMokc = {
    by: 'rbanffy',
    descendants: 177,
    time: 1614884827,
    title: 'User engagement” is code for adiction',
    type: 'story',
    url:
      'https://medium.com/swlh/user-engagement-is-code-for-addiction-a2f50d36d7ac',
  };
 export const articleMokcundefined = {
    by: 'rbanffy',
    descendants: 177,
    time: 1614884827,
    title: 'User engagement” is code for adiction',
    type: 'story',
    url:
      'https://medium.com/swlh/user-engagement-is-code-for-addiction-a2f50d36d7ac',
  };

  export const hotelMockData= {
    success: true,
    info: {
        currency_code: "AED",
        currency_symbol: "AED",
        restaurant_name: "Pool",
        restaurant_code: "QA-SUGARMASH",
        image_url: "https://dxp-hospitality-dev-rg-sit-467300-cd2.azurewebsites.net//-/mediadh/dh/hospitality/e-menu/menus/aqpool/aqpool.jpg",
        restaurant_location: "Madinat Jumeirah",
        logo_url: "https://dxp-hospitality-dev-rg-sit-467300-cd2.azurewebsites.net//-/mediadh/dh/hospitality/e-menu/menus/jhrlogo.jpg",
        in_room_dining: false,
        open_for_guest_order: true,
        supported_languages: "en",
        menu_language: "en",
        payment_online_enabled: true,
        payment_to_room_enabled: false,
        charge_to_room_hotels: [
            {
                hotel_code: "",
                hotel_name: "Dar Al Masyaf",
                room_number_fields: [
                    {
                        field_title: "Villa No",
                        field_message: "Enter villa number as per key card",
                        field_max_len: 2
                    },
                    {
                        field_title: "Room No",
                        field_message: "Enter room number as per key card",
                        field_max_len: 2
                    }
                ]
            },
            {
                hotel_code: "",
                hotel_name: "Al Naseem",
                room_number_fields: [
                    {
                        field_title: "Room No",
                        field_message: "Enter room number as per key card",
                        field_max_len: 4
                    }
                ]
            }
        ]
    },
    menu: [
        {
            menu_name: "A La Carte",
            open_for_order: true,
            menu_sections: [
                {
                    section_name: "Food",
                    menu_categories: [
                        {
                            name: "Top Seller",
                            items: [
                                {
                                    id: "99999",
                                    name: "French Fries",
                                    description: "",
                                    price: 30.0,
                                    image: "",
                                    comment_code: "90007"
                                },
                                {
                                    id: "99999",
                                    name: "Grilled Vegetables",
                                    description: "",
                                    price: 20.0,
                                    image: "",
                                    comment_code: "90007"
                                },
                                {
                                    id: "99999",
                                    name: "BANANA  SPLIT [N]",
                                    description: "Banana Split, trio of Ice Cream, Chocolate Sprinkles",
                                    price: 45.0,
                                    image: "https://dxp-hospitality-dev-rg-sit-467300-cd2.azurewebsites.net//-/mediadh/dh/hospitality/e-menu/menus/alnpool/96178.jpg",
                                    comment_code: "90007"
                                },
                                {
                                    id: "99999",
                                    name: "BROWNIE  FROYO [N]",
                                    description: "Rich Brownie, Frozen Vanilla Yoghurt, Chocolate Sauce",
                                    price: 45.0,
                                    image: "https://dxp-hospitality-dev-rg-sit-467300-cd2.azurewebsites.net//-/mediadh/dh/hospitality/e-menu/menus/alnpool/96182.jpg",
                                    comment_code: "90007"
                                }
                            ]
                        },
                        {
                            name: "Salads",
                            items: [
                                {
                                    id: "99999",
                                    name: "Caesar Salad",
                                    description: "Hearts of Romaine, Parmesan Cheese, Crispy Capers, Herb Croutons, Caesar Dressing",
                                    price: 75.0,
                                    image: "https://dxp-hospitality-dev-rg-sit-467300-cd2.azurewebsites.net//-/mediadh/dh/hospitality/e-menu/menus/alnpool/5018.jpg",
                                    comment_code: "90008"
                                },
                               
                            ]
                        },
                        {
                            name: "Snacks",
                            items: [
                                {
                                    id: "99999",
                                    name: "Char Sui Bun",
                                    description: "",
                                    price: 53.0,
                                    image: "",
                                    comment_code: "90007"
                                }
                                
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    time: "13:48",
    day_name: "Wed"
}
