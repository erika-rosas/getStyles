import * as React from "react";
import { IGetSylesProps } from "./IGetSylesProps";
import { SPComponentLoader } from "@microsoft/sp-loader";

const GetStyles: React.FC<IGetSylesProps> = (props) => {
  const { collectionData } = props;
  const getPlaceholderStyles = () => {
    collectionData.map((list) =>
      SPComponentLoader.loadCss(`${list.link}?${Date.now()}`)
    );
  };

  return (
    <div>
      {collectionData !== undefined
        ? getPlaceholderStyles()
        : "Agrega la o las urls de los styles que deseas"}
    </div>
  );
};

export default GetStyles;
