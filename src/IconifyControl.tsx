import React from "react";
import { Icon } from "@iconify/react";
import { CmsWidgetControlProps } from "decap-cms-core";
import { IconWidgetOptions } from "./types";

export default class IconifyControl extends React.Component<CmsWidgetControlProps> {
  state = {
    search: "",
    icons: [] as string[],
  };

  searchIcons = async (query: string) => {
    if (!query) {
      this.setState({ icons: [] });
      return;
    }

    const { collection = "mdi", filter } = this.props
      .widget as IconWidgetOptions;

    try {
      const res = await fetch(
        `https://api.iconify.design/search?query=${encodeURIComponent(
          query
        )}&limit=20&prefix=${collection}`
      );
      const data = await res.json();
      const icons: string[] = data.icons || [];
      this.setState({
        icons: filter ? icons.filter((icon) => filter.test(icon)) : icons,
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    this.setState({ search: query });
    this.searchIcons(query);
  };

  handleIconSelect = (iconName: string) => {
    this.props.onChange(iconName);
    this.setState({ search: "", icons: [] });
  };

  isValid = () => {
    const required = this.props.field?.get("required") ?? true;
    if (required && !this.props.value) {
      return {
        error: { message: this.props.t("editor.editorWidgets.required") },
      };
    }
    return true;
  };

  render() {
    const {
      value,
      forID,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
      t,
    } = this.props;
    const { search, icons } = this.state;

    return (
      <div
        className={classNameWrapper}
        style={{ backgroundColor: "#dfdfe3", padding: "0" }}
      >
        {value && (
          <div
            title={value}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5em",
              position: "relative",
            }}
          >
            <Icon
              icon={value}
              style={{ fontSize: "2em", margin: "8px 0 8px 8px" }}
            />
            <span
              style={{
                fontSize: "0.9em",
                color: "#666",
                fontFamily: "inherit",
              }}
            >
              {value.split(":")[1]}
            </span>
            <button
              type="button"
              aria-label={t("editor.editorWidgets.datetime.clear")}
              onClick={() => this.handleIconSelect("")}
              style={{
                background: "none",
                border: "none",
                padding: "4px",
                cursor: "pointer",
                color: "#666",
                borderRadius: "3px",
                margin: "8px 8px 8px auto",
              }}
              onMouseDown={(e) => e.preventDefault()}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Icon icon="mdi:close" />
            </button>
          </div>
        )}
        <input
          id={forID}
          value={search}
          onChange={this.handleSearchChange}
          placeholder={t("mediaLibrary.mediaLibraryModal.search")}
          type="search"
          onFocus={setActiveStyle}
          onBlur={setInactiveStyle}
          autoComplete="off"
          style={{
            width: "100%",
            backgroundColor: "white",
            border: "none",
            borderRadius: "3px",
            padding: "16px 20px",
            fontSize: "1em",
            outline: "none",
          }}
        />
        {icons.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridAutoRows: "46px",
              gap: "4px",
              fontSize: "1.2em",
              padding: "8px",
            }}
          >
            {icons.map((iconName) => (
              <div
                key={iconName}
                title={iconName.split(":")[1]}
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  borderRadius: "3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2em",
                }}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => this.handleIconSelect(iconName)}
              >
                <Icon icon={iconName} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
