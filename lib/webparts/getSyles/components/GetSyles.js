import * as React from "react";
import { SPComponentLoader } from "@microsoft/sp-loader";
import styles from "./GetSyles.module.scss";
import { NAMEROUTES } from "../../../constants/routes";
var GetStyles = function (props) {
    var urlStyles = props.urlStyles;
    React.useEffect(function () {
        SPComponentLoader.loadCss("".concat(urlStyles).concat(NAMEROUTES.nameStyles).concat(Date.now()));
    }, []);
    return React.createElement("div", { className: styles.getStyles });
};
export default GetStyles;
//# sourceMappingURL=GetSyles.js.map