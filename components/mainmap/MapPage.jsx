"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { getPlaceData } from "../Map/api/index";
import Map from "../Map";
import axios from "axios";

const MapPage = () => {
  const [places, setPlaces] = useState([]);

  const [coords, setCoords] = useState({ lat: 20.5937, lng: 78.9629 });
  const [boundaries, setBoundaries] = useState(null);

  useEffect(() => {
    // pass boundaries.sw boundaries.ne to getPlaceData
    if (boundaries) {
      console.log(boundaries);
      getPlaceData(boundaries.sw, boundaries.ne).then((data) => {
        setPlaces(data);
        console.log("data", data);
      });
    }
  }, [boundaries]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    // Update isMobile state on window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [PlacesData, setPlacesData] = useState([]);
  useEffect(() => {
    const fetchMapData = async () => {
      const response = await axios.get(
        "http://43.204.166.53:8080/api/mapPlaces"
      );
      console.log("api response", response.data);
      setPlacesData(response.data);
    };
    fetchMapData();
  }, []);
  return (
    <>
      {!isMobile && <Header />}
      <Map
        setBoundaries={setBoundaries}
        coords={coords}
        places={places}
        PlacesData={PlacesData}
      />
    </>
  );
};

export default MapPage;
