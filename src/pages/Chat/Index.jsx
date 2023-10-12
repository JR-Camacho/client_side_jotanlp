import MainLayout from "../../layouts/MainLayout";

import Title from "../../components/Title";
import ChatCard from "../../components/Chat/ChatCard";

import useApi from "../../hooks/useApi";

import { API_URL } from "../../utils/UtilitiesConts";
import { Send } from "react-bootstrap-icons";

const Index = () => {
  const { loading, isError, data, error, post, setData } = useApi();

  const handleSubmit = async () => {
    await post(
      `${API_URL}/sentiment-analysis-${isEnglish ? "en" : "es"}/`,
      text
    );
  };

  const messages = [
    {
      sender: "BOT",
      timestamp: new Date(),
      text: "You were the Chosen One!",
    },
    {
      sender: "ME",
      timestamp: new Date(),
      text: "I hate you!",
    },
    {
      sender: "ME",
      timestamp: new Date(),
      text: "I hate you!",
    },
    {
      sender: "BOT",
      timestamp: new Date(),
      text: "I hate you!",
    },
    {
      sender: "ME",
      timestamp: new Date(),
      text: "I need you!",
    },
    {
      sender: "BOT",
      timestamp: new Date(),
      text: "I hate you!",
    },
    {
      sender: "BOT",
      timestamp: new Date(),
      text: "I hate you!",
    },
  ];

  return (
    <MainLayout>
      <div className="w-full min-h-screen flex flex-col items-center">
        <Title title={"CHATBOT"} className={"pt-[100px]"} />
        <div className="w-full flex flex-col items-center my-6">
          <div className="w-11/12 sm:w-3/4 flex flex-col h-[60vh] bg-white rounded-2xl shadow-[0_0_40px_5px_rgba(0,0,0,0.3)] p-8">
            <ChatCard messages={messages} />
            <div className="w-full rounded-xl rounded-t-none bg-gray-800 flex justify-between items-center overflow-hidden py-2">
              <input
                type="text"
                placeholder="Type here"
                className="border-none outline-none p-2 w-11/12 bg-gray-800 text-white"
              />
              <Send className="h-6 w-6 mx-2 text-white cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
