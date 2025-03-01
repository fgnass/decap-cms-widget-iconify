# Iconify Widget for Decap CMS

A custom widget for [Decap CMS](https://decapcms.org/) (formerly Netlify CMS) that allows you to search and select icons from [Iconify](https://iconify.design/) collections.

## Installation

```bash
npm install decap-cms-widget-iconify
# or
yarn add decap-cms-widget-iconify
```

## Usage

```js
import CMS from 'decap-cms-app';
import { DecapCmsWidgetIcon } from 'decap-cms-widget-iconify';

// Register the widget
CMS.registerWidget(DecapCmsWidgetIcon.Widget());
```

### Configuration

You can configure the widget with the following options:

```js
CMS.registerWidget(
  DecapCmsWidgetIcon.Widget({
    // The Iconify collection to use (default: 'mdi')
    collection: "material-symbols-light",
    
    // Optional regex filter to limit icons
    filter: /-outline-rounded$/,
  })
);
```

### Field Configuration

Use the widget in your Decap CMS configuration:

```yaml
# In your config.yml
fields:
  - label: 'Icon'
    name: 'icon'
    widget: 'icon'
```

## Features

- Search for icons from Iconify collections
- Preview selected icons
- Filter icons by collection or pattern
- Seamless integration with Decap CMS

## Development

```bash
# Install dependencies
npm install

# Build the widget
npm run build
```

## License

MIT
