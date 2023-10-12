import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { IReadonlyTheme } from "@microsoft/sp-component-base";
export interface IGetSylesWebPartProps {
    description: string;
}
export default class GetSylesWebPart extends BaseClientSideWebPart<IGetSylesWebPartProps> {
    private _isDarkTheme;
    private _environmentMessage;
    render(): void;
    protected onInit(): Promise<void>;
    private _getUrlStyle;
    private _getEnvironmentMessage;
    protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=GetSylesWebPart.d.ts.map