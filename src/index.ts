import controlComponent from "./IconifyControl";
import previewComponent from "./IconifyPreview";
import { IconWidgetOptions } from "./types";

function Widget(opts: IconWidgetOptions = {}) {
  return {
    name: "icon",
    controlComponent,
    previewComponent,
    ...opts,
  };
}

export const DecapCmsWidgetIcon = {
  Widget,
  controlComponent,
  previewComponent,
};

export default DecapCmsWidgetIcon;
