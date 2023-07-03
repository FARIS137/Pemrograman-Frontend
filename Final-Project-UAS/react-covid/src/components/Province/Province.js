import React from "react";

function Province(props) {
  const { province, index } = props;
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{province.kota}</td>
        <td>{province.kasus}</td>
        <td>{province.sembuh}</td>
        <td>{province.meninggal}</td>
        <td>{province.dirawat}</td>
      </tr>
    </>
  );
}

export default Province;
