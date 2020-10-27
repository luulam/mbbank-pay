import React, { useState } from "react";
import Styled from "./atm-step-2.style";
import {
  ButtonCommon,
  TextCommon,
  ViewCommon,
  TitleCommon,
  ImageCommon,
  CheckBoxCommon,
} from "components";
import images from "assets/images";

const FlowAtmStep1 = ({ onNext, goBack }) => {
  const _onNextScreen = () => {
    onNext && onNext(2);
  };

  const listForm = [
    {
      title: "Mã tham chiếu",
      value: "10929382734837",
      classRight: "text-blue",
    },
    { title: "Loại giao dịch:", value: "Gia hạn thẻ BHYT" },
    { title: "Từ số thẻ:", value: "8787283789781790", classRight: "text-bold" },
    {
      title: "Tới:",
      value: "Bảo hiểm Xã hội quậnn Thanh Xuân ngân hàng Quân đội 002011029288",
    },
    { title: "Số tiền TT dịch vụ", value: "250,000" },
    {
      title: "Phí giao dịch (bao gồm VAT):",
      value: "Miễn phí",
      classRight: "text-blue",
    },
    { title: "Tổng tiền:", value: "250,000", classRight: "text-blue" },
    {
      title: "Số tiền bằng chữ:",
      value: "Hai trăm năm mươi nghìn Việt Nam đồng",
    },
    {
      title: "Nội dung",
      value: "Giao dịch gia hạn thẻ BHYT mã thẻ: GD182887183783",
    },
    {
      title: "Hình thức thanh toán",
      value: "Trong MB",
      classRight: "text-bold",
    },
  ];
  return (
    <Styled>
      <ViewCommon className="ctn-title">
        <TitleCommon level={4}>Xác nhận thanh toán</TitleCommon>
        <TextCommon>
          {"Vui lòng kiểm tra lại thông tin thanh toán của bạn:"}
        </TextCommon>
      </ViewCommon>
      <ViewCommon className={"ctn-form"}>
        {listForm.map(({ title, value, classRight }, index) => {
          return (
            <ViewCommon className="ctn-row" key={index}>
              <TextCommon className="text-left">{title}</TextCommon>
              <TextCommon className={`text-right ${classRight}`}>
                {value}
              </TextCommon>
            </ViewCommon>
          );
        })}
      </ViewCommon>

      <CheckBoxCommon
        title={
          "Tôi đồng ý với Điều khoản thanh toán Dịch vụ công trực tuyển qua kênh điện tử MB"
        }
      />

      <ViewCommon className={"ctn-navigate"}>
        <ImageCommon src={images.icBack} onClick={goBack} />
        <TextCommon className="back" onClick={goBack}>
          Quay về
        </TextCommon>

        <ButtonCommon
          className="btn-submit"
          onClick={() => {
            _onNextScreen();
          }}
        >
          Thanh toán
        </ButtonCommon>
      </ViewCommon>
    </Styled>
  );
};

export default FlowAtmStep1;
