import controlComponent from "./IconifyControl";
import previewComponent from "./IconifyPreview";
import { IconifyWidgetOptions } from "./types";

function Widget(opts: IconifyWidgetOptions = {}) {
  return {
    name: "icon",
    controlComponent,
    previewComponent,
    ...opts,
  };
}

export const WidgetIconify = {
  Widget,
  controlComponent,
  previewComponent,
};

export default WidgetIconify;
