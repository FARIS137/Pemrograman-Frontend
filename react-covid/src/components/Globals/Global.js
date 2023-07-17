import StyledGlobal from "./Global.styled.js";

function Global(props) {
  const { global } = props;

  return (
    <StyledGlobal>
      <div>
        <section>
          <h3>Global Situation</h3>
          <p>Data Covid Berdasarkan Global</p>
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
