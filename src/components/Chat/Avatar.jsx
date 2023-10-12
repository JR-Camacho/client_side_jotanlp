const Avatar = ({ icon }) => {
  return (
    <div className="chat-image avatar">
      <div className="w-10 p-2 rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
};

export default Avatar;
