"use client";
import styled from "styled-components";
import NetworkMyConnectItem from "./NetworkMyConnectItem";

const NetworkMyConnectView: React.FC<{ data: any }> = ({ data }) => {
  return (
    <RecentConnectWrapper>
      <StyleWrapper>
        <NetworkConnectionUnderLine />
        <NewConnectionLetter>recent connections</NewConnectionLetter>
        <NetworkConnectionUnderLine />
      </StyleWrapper>
      <ItemWrapper>
        {data.map((data: any) => (
          <NetworkMyConnectItem data={data} />
        ))}
      </ItemWrapper>
    </RecentConnectWrapper>
  );
};

export default NetworkMyConnectView;

const RecentConnectWrapper = styled.div`
  width: 850px;
`;

const NetworkConnectionUnderLine = styled.div`
  width: 310px;
  height: 1px;
  background: #e7e7e7;
`;

const NewConnectionLetter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Gotham Pro;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

const StyleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
const ItemWrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2x2 그리드 설정
  gap: 10px;
`;
