import React, { useEffect, useState } from "react";
import StyledIndonesia from "./Indonesian.styled.js";

function Indonesian() {
  const [indonesian, setIndonesian] = useState([]);

  useEffect(() => {
    fetch(`https://covid-fe-2023.vercel.app/api/indonesia.json`)
      .then((response) => response.json())
      .then((data) => {
        setIndonesian(data.indonesia);
      });
  }, []);
  return (
    <StyledIndonesia>
      <div>
        <section>
          <h3>Indonesia Situation</h3>
          <p>Data Covid Berdasarkan Indonesia</p>
          <div className="Group">
            {indonesian.map((data) => (
              <div className="card" key={data.status}>
                <h2 >{data.status}</h2>
                <p
                  className={
                    data.status === "confirmed"
                      ? "confirmed"
                      : data.status === "recovered"
                      ? "recovered"
                      : "death"
                  }
                >
                  {data.total}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </StyledIndonesia>
  );
}

export default Indonesian;
