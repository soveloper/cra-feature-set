import { useEffect } from "react";
import styles from './Main.module.css';

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Arrive from "../components/Arrive";
import Navigation from "../components/layout/Navigation";

function Main() {
  /* useEffect(() => {
    // fetch('http://apis.data.go.kr/1613000/ArvlInfoInqireService/getSttnAcctoArvlPrearngeInfoList?serviceKey=qVrWsKAq9dHNcIaT3aCAV9vbnZqNx2Nx9gfS2UNBjYEDpEKsP%2FCZqBh1VZAoeMPhiKikHP%2F5JQEnW%2B1%2FUn0Rig%3D%3D&cityCode=25&nodeId=DJB8001793&numOfRows=10&pageNo=1&_type=json')
    fetch('http://apis.data.go.kr/1613000/BusSttnInfoInqireService/getSttnNoList?serviceKey=qVrWsKAq9dHNcIaT3aCAV9vbnZqNx2Nx9gfS2UNBjYEDpEKsP%2FCZqBh1VZAoeMPhiKikHP%2F5JQEnW%2B1%2FUn0Rig%3D%3D&cityCode=25&nodeNm=전통시장&nodeNo=44810&numOfRows=10&pageNo=1&_type=json')
      .then((response) => response.json())
      .then((data) => console.log(data.response))
  }, []); */

  return (
    <div>
      <Header />
      <div id={styles.wrapper}>
        adfadsfasfasd
      </div>
      <Footer />
    </div>
  );
}

export default Main;