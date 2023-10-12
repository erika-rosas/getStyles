import * as React from "react";
import { IGetSylesProps } from "./IGetSylesProps";
import { SPComponentLoader } from "@microsoft/sp-loader";

const GetStyles: React.FC<IGetSylesProps> = (props) => {
  const { collectionData } = props;
  const getPlaceholderStyles = () => {
    console.log("llege");
    SPComponentLoader.loadCss(
      `https://intellego365.sharepoint.com/sites/CentralAxity/M%C3%A9xico/Consultoria2/SiteAssets/styles/style.css?${Date.now()}`
    );
  };
  // React.useEffect(() => {}, []);
  // if (collectionData !== undefined) {
  //   getPlaceholderStyles(collectionData[0].link);
  // }
  return (
    <div>
      {collectionData !== undefined && collectionData.length > 0
        ? getPlaceholderStyles()
        : "Agrega la url de los styles"}
    </div>
  );
};

export default GetStyles;
