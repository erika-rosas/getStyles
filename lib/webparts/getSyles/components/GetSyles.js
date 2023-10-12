import * as React from "react";
import { SPComponentLoader } from "@microsoft/sp-loader";
var GetStyles = function (props) {
    var collectionData = props.collectionData;
    // const [inter, setInter] = React.useState<boolean>(false);
    var getPlaceholderStyles = function () {
        // if (!inter) {
        //   collectionData.map((list) =>
        //     SPComponentLoader.loadCss(`${list.link}?${Date.now()}`)
        //   );
        //   setInter(true);
        // }
        collectionData.map(function (list) {
            return SPComponentLoader.loadCss("".concat(list.link, "?").concat(Date.now()));
        });
    };
    // React.useEffect(() => {}, []);
    // if (collectionData !== undefined) {
    //   getPlaceholderStyles(collectionData[0].link);
    // }
    return (React.createElement("div", null, collectionData !== undefined
        ? getPlaceholderStyles()
        : "Agrega la url de los styles"));
};
export default GetStyles;
//# sourceMappingURL=GetSyles.js.map