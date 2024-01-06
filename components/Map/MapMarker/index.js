import React, { useState } from "react";
import "./styles.css";
// import Popover from "@mui/material/Popover";

const MapMarker = ({ place }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMarkerClick = (event) => {
    console.log("Marker clicked", place?.name);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  console.log("Rendering MapMarker for", place);

  return (
    <div className="marker-container gmap-marker">
      {place && place.name && place.thumbnail && (
        <>
          <div
            className="marker-info"
            aria-describedby={id}
            onClick={handleMarkerClick}
          >
            <div className="info-wrapper wrapper">
              <div className="info-title">
                <span className="title-text">{place.name}</span>
              </div>
              <div
                className="info-image"
                style={{
                  backgroundImage: `url(${place.thumbnail})`,
                }}
              ></div>
            </div>
          </div>

          {/* <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            {place.images && place.images.length > 0 && (
              <div className="popoverMain marker-popover-image bg-white p-4">
                <img
                  className="rounded"
                  src={place.images[0]}
                  alt={place.name}
                />

                <div className="text-gray-800 mt-4">
                  <div className="flex flex-row items-center">
                    <div className="text-xl font-semibold">{place.name}</div>
                    <div className="ml-2 text-gray-500">
                      {place.address.slice(0, 20)}
                    </div>
                  </div>
                  <div className="mt-2 text-gray-600">{place.phone}</div>
                </div>
              </div>
            )}
          </Popover> */}
        </>
      )}

      {!place ||
        !place.name ||
        (!place.thumbnail && (
          <div className="marker-info" onClick={handleMarkerClick}>
            <div className="info-wrapper wrapper">
              <div className="info-title">
                <span className="title-text">Default Place</span>
              </div>
              <div
                className="info-image"
                style={{
                  backgroundImage:
                    'url("https://bolt-gcdn.sc-cdn.net/3/Z2i0CKb1i5GtNvg8xNoP7.256.IRZXSOY?mo=GlgaFhoAGgAyAX06AQRCBgjm_5mrBlBJYAFaEERmTGFyZ2VUaHVtYm5haWyiARQIgAIiDwoCSAISACoHSVJaWFNPWaIBFAiaCiIPCgJIAxIAKgdJUlpYU09Z&uc=73")',
                }}
              ></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MapMarker;
