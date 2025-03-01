import React from "react";
import { Icon } from "@iconify/react";
import { CmsWidgetPreviewProps } from "decap-cms-core";

export default class IconifyPreview extends React.Component<CmsWidgetPreviewProps> {
  render() {
    const { value } = this.props;
    if (!value) return null;

    return (
      <div style={{ fontSize: "2em" }}>
        <Icon icon={value} />
      </div>
    );
  }
}
