import React from "react";
import useStore from "../../store/useStore";
import sportLoop from "../../Assets/bands/sport-loop.png";
import braidedLoop from "../../Assets/bands/braided-loop.png";

const BandSelection = () => {
  const { bands, selectedBand, setBand } = useStore();

  // Map band IDs to images
  const bandImages = {
    "sport-loop": sportLoop,
    "braided-loop": braidedLoop,
  };

  const handleSelection = (bandId) => {
    setBand(bandId);
  };

  return (
    <div>
      <h2>Select Band</h2>
      <div>
        {bands.map((band) => (
          <button
            key={band.id}
            onClick={() => handleSelection(band.id)}
            style={{
              border: selectedBand === band.id ? "2px solid blue" : "1px solid gray",
            }}
          >
            {/* Use the bandImages map */}
            <img src={bandImages[band.id]} alt={band.name} width={100} />
            <p>{band.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BandSelection;


