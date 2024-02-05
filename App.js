import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

const resList = [
  // Res-1
  {
    info: {
      id: "514729",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "i0wdxy1pfb7zhyuivtow",
      locality: "Shanti Nagar",
      areaName: "Udhna Gam",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "4961",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹159",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/la-pinoz-pizza-shanti-nagar-udhna-gam-surat-514729",
      type: "WEBLINK",
    },
  },
  // Res-2
  {
    info: {
      id: "138863",
      name: "MP Partha and Omlette",
      cloudinaryImageId: "3ed4c6caff2ea0b068032712f71420ab",
      locality: "saliyawade market",
      areaName: "Zapa Bazar",
      costForTwo: "₹250 for two",
      cuisines: ["Mughlai", "Biryani", "Street Food"],
      avgRating: 4.2,
      parentId: "139737",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mp-partha-and-omlette-saliyawade-market-zapa-bazar-surat-138863",
      type: "WEBLINK",
    },
  },
  // Res-3
  {
    info: {
      id: "456090",
      name: "Mahalaxmi Juice And Fast Food Corner",
      cloudinaryImageId: "zklivmqduux38pw9ikax",
      locality: "Rushabh Char Rasta",
      areaName: "Adajan Patiya",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream", "Burgers", "Pizzas", "Salads", "Beverages"],
      avgRating: 4.7,
      veg: true,
      parentId: "273935",
      avgRatingString: "4.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mahalaxmi-juice-and-fast-food-corner-rushabh-char-rasta-adajan-patiya-surat-456090",
      type: "WEBLINK",
    },
  },
  // Res-4
  {
    info: {
      id: "79442",
      name: "Asal Amdavadi Tava Fry",
      cloudinaryImageId: "ac39e0e3c484b512066755efca3e4ac6",
      locality: "Borwada",
      areaName: "Rander",
      costForTwo: "₹350 for two",
      cuisines: ["North Indian", "Biryani", "Thalis", "Tandoor"],
      avgRating: 4.1,
      parentId: "36677",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 7.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "7.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/asal-amdavadi-tava-fry-borwada-rander-surat-79442",
      type: "WEBLINK",
    },
  },
  // Res-5
  {
    info: {
      id: "71471",
      name: "The Glorious Restaurant",
      cloudinaryImageId: "156ab20103b55aa122fc572180034b9e",
      locality: "Shantinagar Society",
      areaName: "Adajan Gam",
      costForTwo: "₹220 for two",
      cuisines: [
        "Pastas",
        "Chinese",
        "North Indian",
        "Burgers",
        "Ice Cream",
        "Pizzas",
        "Biryani",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "208953",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹175 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-glorious-restaurant-shantinagar-society-adajan-gam-surat-71471",
      type: "WEBLINK",
    },
  },
  // Res-6
  {
    info: {
      id: "76475",
      name: "Jakaas Chinese Fast Food",
      cloudinaryImageId: "ngajktrkoa9iins4iwxh",
      locality: "Vir Arjun Marg",
      areaName: "Adajan Gam",
      costForTwo: "₹400 for two",
      cuisines: ["Chinese", "Fast Food", "Street Food"],
      avgRating: 4.5,
      veg: true,
      parentId: "109236",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹175 OFF",
        subHeader: "ABOVE ₹399",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/jakaas-chinese-fast-food-vir-arjun-marg-adajan-gam-surat-76475",
      type: "WEBLINK",
    },
  },
  // Res-7
  {
    info: {
      id: "100721",
      name: "McDonald's",
      cloudinaryImageId: "405645b3118d83e89db4c65361e43733",
      locality: "Reliance Mall",
      areaName: "Rustampura",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 02:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹1000",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-reliance-mall-rustampura-surat-100721",
      type: "WEBLINK",
    },
  },
  // Res-8
  {
    info: {
      id: "205488",
      name: "Jay Jalaram Thali",
      cloudinaryImageId: "56d5abe62452d827b7480c4f5515460a",
      locality: "Kaji Maidan",
      areaName: "Gopipura",
      costForTwo: "₹200 for two",
      cuisines: [
        "Thalis",
        "Gujarati",
        "North Indian",
        "Punjabi",
        "Chinese",
        "Biryani",
      ],
      avgRating: 3.9,
      veg: true,
      parentId: "110113",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/jay-jalaram-thali-kaji-maidan-gopipura-surat-205488",
      type: "WEBLINK",
    },
  },
  // Res-9
  {
    info: {
      id: "65028",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Athwa",
      areaName: "Athwa",
      costForTwo: "₹350 for two",
      cuisines: [
        "Fast Food",
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.1,
      parentId: "2",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-athwa-surat-65028",
      type: "WEBLINK",
    },
  },
  // Res-10
  {
    info: {
      id: "74644",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "VIP Road",
      areaName: "Vesu",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-vip-road-vesu-surat-74644",
      type: "WEBLINK",
    },
  },

  // Res-11
  {
    info: {
      id: "236083",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "LP Savani Road",
      areaName: "Adajan Gam",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.1,
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-lp-savani-road-adajan-gam-surat-236083",
      type: "WEBLINK",
    },
  },
  // Res-12
  {
    info: {
      id: "124605",
      name: "Radha Krishna Restaurant",
      cloudinaryImageId: "v9grf1tjqyxwfhquaemr",
      locality: "Majura Gate",
      areaName: "Athwa",
      costForTwo: "₹250 for two",
      cuisines: ["South Indian", "North Indian", "Chinese", "Juices"],
      avgRating: 4.6,
      veg: true,
      parentId: "164165",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-01 23:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/radha-krishna-restaurant-majura-gate-athwa-surat-124605",
      type: "WEBLINK",
    },
  },
  // Res-13
  {
    info: {
      id: "74453",
      name: "Domino's Pizza",
      cloudinaryImageId: "bz9zkh2aqywjhpankb07",
      locality: "Sheetal Shopping Square",
      areaName: "Athwa",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      veg: true,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-02-02 01:55:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-sheetal-shopping-square-athwa-surat-74453",
      type: "WEBLINK",
    },
  },
  // Res
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} className="img-logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, costForTwo, cuisines } =
    resData?.info;

  return (
    <div className="rest-card">
      <h2 className="rest-name">{name}</h2>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt={{ name } + "image"}
        className="rest-img"
      />
      <h4 className="rest-name">{costForTwo}</h4>
      <h4 className="rest-name">{cuisines.join(", ")}</h4>
      <h4 className="rest-name">
        <i className="fa-regular fa-star" id="icon-star"></i>
        {avgRating}
      </h4>
      <h4 className="rest-name">
        <i className="fa-regular fa-clock" id="icon-timer"></i>
        {String(resData.info.sla.deliveryTime) + " minutes"}
      </h4>

      {/* <h1 className="rest-name"> {props.name} </h1>

      
      <h3 className="rest-name">{props.cuisine}</h3>
      
       */}
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-text-field"
        placeholder="Find your favourite Resturants"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <SearchBar></SearchBar>

      <div className="rest-container">
        <ResturantCard resData={resList[0]}></ResturantCard>
        <ResturantCard resData={resList[1]}></ResturantCard>
        <ResturantCard resData={resList[2]}></ResturantCard>
        <ResturantCard resData={resList[3]}></ResturantCard>
        <ResturantCard resData={resList[4]}></ResturantCard>
        <ResturantCard resData={resList[5]}></ResturantCard>
        <ResturantCard resData={resList[6]}></ResturantCard>
        <ResturantCard resData={resList[7]}></ResturantCard>
        <ResturantCard resData={resList[8]}></ResturantCard>
        <ResturantCard resData={resList[10]}></ResturantCard>
        <ResturantCard resData={resList[11]}></ResturantCard>

        {/* <ResturantCard
          restName="Starbucks"
          cuisine="Ham & Swiss on Baguette , Chicken & Bacon on Brioche "
          imgSource="https://mcdonough.com/wp-content/uploads/2020/09/starbucks-logo-png-transparent.png"
          rating="4.4 Stars"
          delTime="40 minutes"
        />
        <ResturantCard
          restName="Dominos Pizza"
          cuisine="Order Domino's pizza, pasta, sandwiches & more"
          imgSource="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/2036px-Domino%27s_pizza_logo.svg.png"
          rating="4.2 Stars"
          delTime="25 minutes"
        />
        <ResturantCard
          restName="Burger King"
          cuisine="Whopper patty, topped with cheese, thick-cut smoked bacon"
          imgSource="https://logowik.com/content/uploads/images/310_burgerking.jpg"
          rating="3.2 Stars"
          delTime="55 minutes"
        />
        <ResturantCard
          restName="Tim Hortons"
          cuisine="Home of Canada's favourite coffee"
          imgSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjR7SoKEYqzAxY9koSsVBHlBfSHRUOs5J_47jebp50rRtanT77Hk1lQBN569uQQvpYNFY&usqp=CAU"
          rating="4.0 Stars"
          delTime="15 minutes"
        />
        <ResturantCard
          restName="Boston Pizza"
          cuisine="pizza, pasta, burgers, appetizers, salads and more"
          imgSource="https://upload.wikimedia.org/wikipedia/en/2/20/Boston_Pizza.svg"
          rating="5.0 Stars"
          delTime="28 minutes"
        />

        <ResturantCard
          restName="Subway"
          cuisine="submarine sandwiches (subs), wraps, salads, and drinks."
          imgSource="https://cdn.freebiesupply.com/logos/large/2x/subway-11-logo-png-transparent.png"
          rating="4.9 Stars"
          delTime="35 minutes"
        />

        <ResturantCard
          restName="Ginos Pizza"
          cuisine="Pizza resturant"
          imgSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCS66oTaCNZ7xduIzTM7gx1Hb5yrEl0rPpvoSWX2Zdw&s"
          rating="3.5 Stars"
          delTime="45 minutes"
        />

        <ResturantCard
          restName="Wendys"
          cuisine="Chicken Nuggets, Beaf, Eggs"
          imgSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2w3HAVufZroDs8DBYwBq2ofwml6a0t2BFIyDFjigtoA&s"
          rating="5.0 Stars"
          delTime="65 minutes"
        /> */}
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout></Applayout>);
