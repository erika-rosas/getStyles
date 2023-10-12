import * as React from "react";
import { IGetSylesProps } from "./IGetSylesProps";
import { SPComponentLoader } from "@microsoft/sp-loader";

const GetStyles: React.FC<IGetSylesProps> = (props) => {
  const { collectionData } = props;
  // const [inter, setInter] = React.useState<boolean>(false);

  const getPlaceholderStyles = () => {
    // if (!inter) {
    //   collectionData.map((list) =>
    //     SPComponentLoader.loadCss(`${list.link}?${Date.now()}`)
    //   );
    //   setInter(true);
    // }
    collectionData.map((list) =>
      SPComponentLoader.loadCss(`${list.link}?${Date.now()}`)
    );
  };
  // React.useEffect(() => {}, []);
  // if (collectionData !== undefined) {
  //   getPlaceholderStyles(collectionData[0].link);
  // }
  return (
    <div>
      {collectionData !== undefined
        ? getPlaceholderStyles()
        : "Agrega la url de los styles"}
    </div>
  );
};

export default GetStyles;
