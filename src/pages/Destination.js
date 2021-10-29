import { useState } from "react";
import Header from "../components/Header";
import "../scss/Destination.scss";
import europa from "../assets/destination/europa.png";
import mars from "../assets/destination/mars.png";
import moon from "../assets/destination/moon.png";
import titan from "../assets/destination/titan.png";

export default function Destination({ renderData }) {
  const images = [europa, mars, moon, titan];
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(renderData[index]);

  return (
    <main className="dest">
      <Header />
      <div className="destination wrapper">
        <div className="destination__header">
          <h5>
            <span>01</span>Pick your destination
          </h5>
        </div>

        <div className="destination__container">
          <div
            className="destination__image"
            style={{
              background: `url(${images[index]}) center bottom / contain no-repeat `,
            }}
          />

          <div className="destination__content">
            <div className="destination__content__navigation">
              {renderData.map((e, i) => {
                return (
                  <span
                    className={index === i ? "nav-text active" : "nav-text"}
                    key={e.name}
                    onClick={() => {
                      setData(renderData[i]);
                      setIndex(i);
                    }}
                  >
                    {e.name}
                  </span>
                );
              })}
            </div>
            <div className="destination__content__detail">
              <h2>{data.name}</h2>
              <p>{data.description}</p>
              <div className="row">
                <div className="col">
                  <span className="sub-heading2">AVG. DISTANCE</span>
                  <span className="sub-heading1">{data.distance}</span>
                </div>
                <div className="col">
                  <span className="sub-heading2">Est. travel time</span>
                  <span className="sub-heading1">{data.travel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
