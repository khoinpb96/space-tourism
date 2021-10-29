import Header from "../components/Header";
import "../scss/Crew.scss";
import crew1 from "../assets/crew/douglas-hurley.png";
import crew2 from "../assets/crew/mark-shuttleworth.png";
import crew3 from "../assets/crew/victor-glover.png";
import crew4 from "../assets/crew/anousheh-ansari.png";
import { useState } from "react";

export default function Crew({ renderData }) {
  const images = [crew1, crew2, crew3, crew4];
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(renderData[index]);

  return (
    <main className="crew">
      <Header />
      <div className="crew-wrapper wrapper">
        <div className="crew__header">
          <h5>
            <span>02</span>Meet your crew
          </h5>
        </div>
        <div className="crew__container">
          <div className="crew__content">
            <h4>{data.role}</h4>
            <h3>{data.name}</h3>
            <p>{data.bio}</p>
            <div className="crew__navigator">
              {renderData &&
                renderData.map((e, i) => {
                  return (
                    <div
                      className={index === i ? "dot active" : "dot"}
                      key={e.name}
                      onClick={() => {
                        setData(renderData[i]);
                        setIndex(i);
                      }}
                    />
                  );
                })}
            </div>
          </div>
          <div
            className="crew__image"
            style={{
              background: `url(${images[index]})center bottom /contain  no-repeat`,
            }}
          />
        </div>
      </div>
    </main>
  );
}
