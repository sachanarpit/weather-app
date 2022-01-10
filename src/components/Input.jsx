import { useEffect, useState } from "react";
import styled from "styled-components";

const InputBox = styled.div`
  border: 1px solid gray;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 90%;
  box-align: right;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 500;
  &:active {
    border: 1px solid transparent;
    border: none;
    outline: none;
  }
`;

const Icon = styled.img`
  width: 5%;
`;

export const InputDiv = () => {
  const [text, setText] = useState();
  const [data, setData] = useState();
  const [locationStatus, setLocaionStatus] = useState(false);
  const [location, setLocation] = useState({});

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  };

  if (locationStatus === false) {
    getLocation();
    setLocaionStatus(true);
  } else {
    console.log(location);
  }

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const resJson = await resp.json();
    setData(resJson.data);
  };

  const handleChangeInp = (e) => {
    let txt = e.target.value;
    setText(txt);
    console.log(location);
  };

  return (
    <>
      <InputBox>
        <Icon src="https://img.icons8.com/material-outlined/50/000000/marker.png" />

        <Input onChange={handleChangeInp} value={text} />

        <Icon src="https://img.icons8.com/material-outlined/50/000000/search--v1.png" />
      </InputBox>
    </>
  );
};
