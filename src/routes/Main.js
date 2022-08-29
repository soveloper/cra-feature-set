import { useEffect } from "react";

function Main() {
  useEffect(() => {
    // fetch('http://apis.data.go.kr/1613000/ArvlInfoInqireService/getSttnAcctoArvlPrearngeInfoList?serviceKey=qVrWsKAq9dHNcIaT3aCAV9vbnZqNx2Nx9gfS2UNBjYEDpEKsP%2FCZqBh1VZAoeMPhiKikHP%2F5JQEnW%2B1%2FUn0Rig%3D%3D&cityCode=25&nodeId=DJB8001793&numOfRows=10&pageNo=1&_type=json')
    fetch('http://apis.data.go.kr/1613000/BusSttnInfoInqireService/getSttnNoList?serviceKey=qVrWsKAq9dHNcIaT3aCAV9vbnZqNx2Nx9gfS2UNBjYEDpEKsP%2FCZqBh1VZAoeMPhiKikHP%2F5JQEnW%2B1%2FUn0Rig%3D%3D&cityCode=25&nodeNm=전통시장&nodeNo=44810&numOfRows=10&pageNo=1&_type=json')
      .then((response) => response.json())
      .then((data) => console.log(data.response))
  }, []);

  return (
    <div>
      <h1>Main Page</h1>
    </div>
  );
}

export default Main;