import styled from "styled-components";
import { InputDiv } from "./Input";

const MainDiv = styled.div`
  padding-left: 10%;
  padding-right: 10%;
`;

export const WeatherApp = () => {
  return (
    <MainDiv>
      <InputDiv />
    </MainDiv>
  );
};
