import { createContext, useContext, useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const SpinnerContext = createContext();
export function useSpinner() {
  return useContext(SpinnerContext);
}
export const SpinnerProvider = (props) => {
  //   const [spin, setSpin] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  //   useEffect(() => {
  //     setSpin(
  //       <Backdrop
  //         sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
  //         open
  //       >
  //         <CircularProgress color="inherit" />
  //       </Backdrop>
  //     );
  //   }, []);

  return (
    <SpinnerContext.Provider value={[showSpinner, setShowSpinner]}>
      {props.children}
    </SpinnerContext.Provider>
  );
};
