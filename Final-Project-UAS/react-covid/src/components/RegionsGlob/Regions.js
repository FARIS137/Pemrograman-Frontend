import StyledRegionsGlob from "./Regions.styled.js";
import protection from "./protection-1.png";
import smileIcon from "./smilling.png";
import skullIcon from "./skull.png";

function Regions(props) {
  const { regions } = props;

  return (
    <StyledRegionsGlob>
      <div>
        <section>
          <h1>Situation by Regions</h1>
          <h3>Bacaan Pilihan Covid</h3>
          <div className="cardContainer">
            {regions.map((data) => (
              <div className="card" key={data.name}>
                <h2>{data.name}</h2>
                <div className="group">
                  <p>Confirmed</p>
                  <p className="confirmed">
                    {data.numbers.confirmed}
                    <img src={protection} alt="mask icon" />
                  </p>
                </div>
                <div className="group">
                  <p>Recovered</p>
                  <p className="recovered">
                    {data.numbers.recovered}
                    <img src={smileIcon} alt="smile icon" />
                  </p>
                </div>
                <div className="group">
                  <p>Death</p>
                  <p className="death">
                    {data.numbers.death}
                    <img src={skullIcon} alt="skull icon" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </StyledRegionsGlob>
  );
}

export default Regions;
