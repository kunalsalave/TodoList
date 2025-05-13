import React from "react"

const EventProps = () => {
  const HandleWelcomeUser = (User) => {
    alert(`Hey ${User}`);
  };
  const HandleHover = () => {
    alert(`Hey this is a Hover`);
  };
  return (
    <>
      <WelcomeUser onClick={() => HandleWelcomeUser("Kunal")}
        onMouseEnter={HandleHover}
      />
    </>
  );
};
const WelcomeUser = (props) => {
  return (
    <>
      <button onClick={props.onClick}>Click Me</button>
      <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
    </>
  );
};
export default EventProps;
