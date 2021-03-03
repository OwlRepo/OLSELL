import React from "react";

export const LiveVideoContext = React.createContext({
  albumId: String,
  id: String,
  title: String,
  imgUrl: String,
  thumbnailUrl: String,
});
