// // File: src/projects/Toggleswitch/ToggleSwitch.jsx
// import { useState } from "react";
// import "./ToggleSwitch.css";
// import { IoIosSwitch } from "react-icons/io";
// import { RiUserSearchFill } from "react-icons/ri";

// export const ToggleSwitch = () => {
//   const [isOn, setIsOn] = useState(true);

//   const handleToggleSwitch = () => {
//     setIsOn(!isOn);
//   };
//   const checkIson = isOn ? "on": "off";
//   const toggleBGcolor = { backgroundColor: isOn ? "#4caf50": "#f44336"}

//   return (
//     <>
//     <h1 style={{ color: "8000", textAlign: "center"}}>
//       Toggle Switch <IoIosSwitch style={{color: "red", textAlign: "center"} }/></h1>
//       <RiUserSearchFill />
//     <div
//       className="toggle-switch"
//       style={toggleBGcolor}
//       onClick={handleToggleSwitch}
//     >
//       <div className={`switch ${checkIson}`}>
//       </div>
//       <span className="switch-state">{checkIson}</span>
//     </div>
//     </>
//   );
// };

// export default ToggleSwitch;
