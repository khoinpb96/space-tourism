import Header from "../components/Header";
import "../scss/Technology.scss";
import tech1 from "../assets/technology/launch-vehicle-portrait.jpg";
import tech2 from "../assets/technology/spaceport-portrait.jpg";
import tech3 from "../assets/technology/space-capsule-portrait.jpg";
import tech4 from "../assets/technology/launch-vehicle-landscape.jpg";
import tech5 from "../assets/technology/spaceport-landscape.jpg";
import tech6 from "../assets/technology/space-capsule-landscape.jpg";
import { useState } from "react";

export default function Technology({ renderData }) {
  const images = [tech1, tech2, tech3];
  const imagesMobile = [tech4, tech5, tech6];
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(renderData[index]);
  console.log(data);
  return (
    <main className="tech">
      <Header />
      <div className="technology wrapper">
        <div className="technology__header">
          <h5>
            <span>03</span>SPACE LAUNCH 101
          </h5>
        </div>
        <div className="technology__container">
          <div
            className="technology__image--mobile"
            style={{
              background: `url(${imagesMobile[index]}) center center / cover no-repeat `,
            }}
          />
          <div className="technology__content">
            <div className="technology__navigator">
              {renderData.map((e, i) => {
                return (
                  <h4
                    className={index === i ? "active" : undefined}
                    key={i}
                    onClick={() => {
                      setData(renderData[i]);
                      setIndex(i);
                    }}
                  >
                    {i + 1}
                  </h4>
                );
              })}
            </div>
            <div className="technology__content__header">
              <p>THE TERMINOLOGY…</p>
              <h3>{data.name}</h3>
              <p>{data.description}</p>
            </div>
          </div>
          <div
            className="technology__image"
            style={{ background: `url(${images[index]})` }}
          />
        </div>
      </div>
    </main>
  );
}
