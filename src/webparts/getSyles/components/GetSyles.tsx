import * as React from "react";
import { IGetSylesProps } from "./IGetSylesProps";
import { SPComponentLoader } from "@microsoft/sp-loader";
import styles from "./GetSyles.module.scss";
import { NAMEROUTES } from "../../../constants/routes";

const GetStyles: React.FC<IGetSylesProps> = (props) => {
  const { urlStyles } = props;
  React.useEffect(() => {
    SPComponentLoader.loadCss(
      `${urlStyles}${NAMEROUTES.nameStyles}${Date.now()}`
    );
  }, []);

  return <div className={styles.getStyles} />;
};

export default GetStyles;
