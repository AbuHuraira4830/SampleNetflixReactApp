import React from "react";
import Card from "./components/Card/Card";
import Sdata from "./Sdata";
import "./components/Card/Card.css";

const App = () => {
  return (
    <>
      <h1 className="heading_style">Top Netflix Series of all time IMDB</h1>
      <div className="grid">
      {Sdata.map((val) => (
        <Card
          key={val.id}
          name={val.name}
          seriesLink={val.seriesLink}
          about={val.about}
          rating={val.rating}
          description={val.description}
          stars={val.stars}
          votes={val.votes}
          year={val.year}
          imgsrc={val.imgsrc}
          id={val.id}
        />
      ))}
      </div>
    </>
  );
};

export default App;
