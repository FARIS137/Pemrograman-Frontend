/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Provinces from "../../components/Provinces/Provinces";
import AddCovidForm from "../../components/AddCovidForm/AddCovidForm";
import { updateProvinces } from "../../Features/ProvincesSlice";

function Provinsicovid() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.provinces.provinceslocal);

  useEffect(() => {
    getHomeProvinces();
  }, []);

  async function getHomeProvinces() {
    dispatch(updateProvinces(data.provinces));
  }

  return (
    <>
      <Hero />
      <Provinces />
      <AddCovidForm  />
    </>
  );
}

export default Provinsicovid;
