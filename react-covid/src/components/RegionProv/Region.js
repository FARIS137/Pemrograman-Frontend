import React from "react";

function Region(props) {
  const { region, index } = props;
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{region.name}</td>
        <td>{region.numbers.confirmed}</td>
        <td>{region.numbers.recovered}</td>
        <td>{region.numbers.death}</td>
        <td>{region.numbers.treatment}</td>
      </tr>
    </>
  );
}

export default Region;
