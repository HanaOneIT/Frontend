import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchStoreData from "../utils/fetchStoreData";
import TopBackNav from "./TopBackNav";

import StoreImage from "../assets/images/Store_detail_image.png";
import EsgActivs from "../assets/images/Esg_Activities.png";

import { FaLeaf, FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RiMegaphoneFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { AiFillClockCircle } from "react-icons/ai";

const StoreDetails = () => {
  const { storeId } = useParams();

  const [thisStore, setThisStore] = useState({
    id: "가게-ID",
    name: "망글이네 공방",
    rating: 4.8,
    esgScore: 1200,
    oneSentence: "망그러졌지만.. 이뻐요 우리 가게...",
    address: "망그러진 마을 망망시 글글동 망곰이네",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //프론트단 테스트용
    if (storeId === "test") {
      setIsLoading(false);
      return;
    }
    const loadStoreData = async () => {
      setIsLoading(true);
      const resData = await fetchStoreData(storeId);
      setThisStore(resData);
      setIsLoading(false);
    };

    loadStoreData();
  }, [storeId]);

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  if (!thisStore) {
    return <div>가게 정보가 없습니다.</div>;
  }

  return (
    <>
      <TopBackNav />{" "}
      <div id="SD_container">
        <div className="image_box">
          <img className="image" src={StoreImage} alt="매장 사진" />
        </div>
        <div className="summary_box">
          <div className="name">{thisStore.name}</div>
          <div className="sentence">
            <RiMegaphoneFill className="megaphone_icon icon" />
            {thisStore.oneSentence}
          </div>
          <div className="numbers_box">
            <div className="left_box">
              <div className="rating">
                <FaStar className="star_icon icon" />
                {thisStore.rating}
              </div>
              <div className="reviews">(2,496)</div>
            </div>
            <div className="right_box">
              <div className="point">
                <FaLeaf className="leaf_icon icon" />
                {thisStore.esgScore}
              </div>
              <div className="duration">(5회/18개월)</div>
            </div>
          </div>
        </div>
        <div className="info_box">
          <div className="locate">
            <IoLocationSharp className="icon" />
            인천 서구 미래로 11 2층
          </div>
          <div className="phone_number">
            <IoIosCall className="icon" />
            0507-1366-8794
          </div>
          <div className="open_time">
            <AiFillClockCircle className="icon" />
            10:00 ~ 20:00
          </div>
        </div>
        <div className="activity_box">
          <div className="title">사장님의 ESG 활동</div>
          <div className="image_box">
            <>
              <img src={EsgActivs} alt="ESG 활동 이미지들" />
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreDetails;