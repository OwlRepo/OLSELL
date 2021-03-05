import React, { ReactNode, useEffect, useState } from "react";

export const LiveVideoContext = React.createContext([]);

interface Props {
  arrayOfData: [];
}

export const LiveVideoContextProvider: React.FC<Props> = (props) => {
  const { children, ...restProps } = props;
  // const [contextBindedValue, setContextBindedValue] = useState([]);

  // useEffect(() => {
  //   setContextBindedValue(props.arrayOfData);
  // }, []);

  return (
    <LiveVideoContext.Provider value={props.arrayOfData}>
      {children}
    </LiveVideoContext.Provider>
  );
};
