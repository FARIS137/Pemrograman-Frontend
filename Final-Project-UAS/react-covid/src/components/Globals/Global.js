import React, { useEffect, useState } from "react";
import StyledGlobal from "./Global.styled.js";

function Global() {
  const [global, setGlobal] = useState([]);

  useEffect(() => {
    fetch(`https://covid-fe-2023.vercel.app/api/global.json`)
      .then((response) => response.json())
      .then((data) => {
        setGlobal(data.global);
      })
  }, []);
    return (
      <StyledGlobal>
      <div>
        <section>
          <h3>Global Situation</h3>
          <p >Data Covid Berdasarkan Global</p>
          <div className="Group">
            {global.map((data) => (
              <div className="card" key={data.status}>
                <h2>{data.status}</h2>
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
      </StyledGlobal>
    );
    
}

export default Global;
