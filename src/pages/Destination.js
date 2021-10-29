import { useState } from "react";
import Header from "../components/Header";
import "../scss/Destination.scss";

export default function Destination({ renderData }) {
  const [data, setData] = useState(renderData[0]);
  console.log(data);
  console.log(data.images.png);

  return (
    <main className="dest">
      <Header />
      <div className="destination">
        <div className="destination__header">
          <h5>
            <span>01</span>Pick your destination
          </h5>
        </div>

        <div className="destination__container">
          <div className="destination__image">
            <img
              src={process.env.PUBLIC_URL + data.images.png}
              alt={data.name}
            />
          </div>

          <div className="destination__content">
            <div className="destination__content__navigation">
              {renderData.map((e, i) => {
                return (
                  <span
                    className="nav-text"
                    key={e.name}
                    onClick={() => {
                      setData(renderData[i]);
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
