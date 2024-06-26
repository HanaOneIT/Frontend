import axios from "axios";

const fetchStoreData = async (storeId) => {
  try {
    const response = await axios.get(`http://localhost:8080/store?storeId=${storeId}`);
    if (response.data) {
      //응답 데이터가 있음
      return response.data;
    } else {
      //없음
      throw new Error("Invalid response structure");
    }
  } catch (error) {
    console.error("(가게 선택 정보 오류) Error fetching store data:", error);
    return null;
    //에러시 null
  }
};

export default fetchStoreData;
