import AgoraUIKit from "agora-react-uikit";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vh;
  height: 100vw;
`;

const Wrapper = styled.div``;

const VideoChat = () => {
  const [videocall, setvideocall] = useState(true);
  const [sec, setsec] = useState(0);
  const [hr, sethr] = useState(0);
  const [min, setmin] = useState(0);
  const rtcProps = {
    appId: "84acd59079ce455c964d396ec6649b77",
    token:
      "007eJxTYHgls0rXd2vpbU5r7SM7aiZsmK5+2ars0rp/NbV3NqvK5zxSYLAwSUxOMbU0MLdMTjUxNU22NDNJMbY0S002MzOxTDI3F3o1P7khkJFhgU4VIyMDBIL4bAzJiTk5uakMDADPvCDW",
    channel: "callme",
  };

  useEffect(() => {
    setTimeout(() => {
      setsec(sec + 1);
      if (sec == 60) {
        setminute();
      }

      if (min == 60) {
        sethour();
      }
    }, 1000);
  }, [sec]);

  const setminute = () => {
    setmin(min + 1);
    setsec(0);
  };

  const sethour = () => {
    sethr(hr + 1);
    setsec(0);
    setmin(0);
  };

  const callbacks = {
    EndCall: () => {
      setvideocall(false);
    },
  };
  return (
    <Container>
      <Wrapper>
        {videocall ? (
          <>
            <div
              style={{
                display: "flex",
                width: "100wh",
                height: "100vh",
              }}
            >
              <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
            </div>
            <div
              style={{
                borderRadius: "50px",
                marginTop: "5%",
                marginRight: "40%",
                marginLeft: "40%",
                boxShadow: "3px 3px 3px green",
                textAlign: "center",
              }}
              className="time"
            >
              {" "}
              {hr}:{min}: {sec}
            </div>
          </>
        ) : (
          <>
            {(window.location.href = "http://localhost:3000/consultant")}
            {/* <button
              className="callme"
              style={{
                borderRadius: "20px",
                backgroundColor: "black",
                border: "none",
                marginLeft: "50%",
                marginTop: "-15px",
                color: "white",
              }}
              onClick={() => setvideocall(true)}
            >
              call me
            </button> */}
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default VideoChat;
