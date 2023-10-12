import * as React from "react";
import { SPComponentLoader } from "@microsoft/sp-loader";
var GetStyles = function (props) {
    var collectionData = props.collectionData;
    var getPlaceholderStyles = function () {
        collectionData.map(function (list) {
            return SPComponentLoader.loadCss("".concat(list.link, "?").concat(Date.now()));
        });
    };
    return (React.createElement("div", null, collectionData !== undefined
        ? getPlaceholderStyles()
        : "Agrega la o las urls de los styles"));
};
export default GetStyles;
//# sourceMappingURL=GetSyles.js.map