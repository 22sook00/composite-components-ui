import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Loading = ({ delay = true }) => {
  const [view, setView] = useState(!delay);

  useEffect(() => {
    const time = setTimeout(() => {
      setView(true);
    }, [500]);

    return () => {
      clearTimeout(time);
    };
  }, []);
  return <>{view && <Container>로딩</Container>}</>;
};

export default Loading;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 9999;
  overflow: hidden;
`;
