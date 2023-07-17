import StyledIndonesia from "./Indonesian.styled.js";

function Indonesian(props) {
  const { indonesian } = props;

  return (
    <StyledIndonesia>
      <div>
        <section>
          <h3>Indonesia Situation</h3>
          <p>Data Covid Berdasarkan Indonesia</p>
          <div className="Group">
            {indonesian.map((data) => (
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
    </StyledIndonesia>
  );
}

export default Indonesian;
