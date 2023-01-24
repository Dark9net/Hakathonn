import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Review from "./Review";

const Chatbot = () => {
  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#EF6C00",
    headerFontColor: "#fff",
    headerFontSize: "20px",
    botBubbleColor: "#EF6C00",
    botFontColor: "#fff",
    botFontSize: "10px",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  // return (
  // <ThemeProvider theme={theme}>
  //   <ChatBot
  //     headerTitle="Speech Synthesis"
  //
  //     style={{ display: "flex", flexDirection: "column" }}
  //     steps={[
  //       {
  //         id: "0",
  //         message: "Can I talk to you?",
  //         trigger: "1",
  //       },
  //       {
  //         id: "1",
  //         user: true,
  //         trigger: "2",
  //       },

  //       {
  //         id: "2",
  //         message: "What is your name?",
  //         trigger: "3",
  //       },

  //       {
  //         id: "3",
  //         user: true,
  //         trigger: "5",
  //       },
  //       {
  //         id: "4",
  //         message: "Hi {previousValue}, nice to meet you!",
  //         trigger: "5",
  //       },

  //       {
  //         id: "5",
  //         message: "How can I help you?",
  //         end: true,
  //       },
  //     ]}
  //   />
  // </ThemeProvider>

  // );
  return (
    <ThemeProvider theme={theme}>
      <>
        <ChatBot
          speechSynthesis={{ enable: true, lang: "en" }}
          hideBotAvatar={true}
          hideUserAvatar={true}
          steps={[
            {
              id: "0",
              message: "Do you like to talk  with me?",
              trigger: "1",
            },
            {
              id: "1",
              user: true,
              trigger: "2",
            },
            {
              id: "2",
              message: "Welcome to this website ",
              trigger: "3",
            },

            {
              id: "3",
              message: "What is your name?",
              trigger: "4",
            },


            {
              id: "4",
              user: true,
              trigger: "5",
            },

            {
              id: "5",
              message: "Hi {previousValue}! How can I help you?",
              end: true,
            },
          ]}
        />
      </>
    </ThemeProvider>
  );
};

export default Chatbot;
