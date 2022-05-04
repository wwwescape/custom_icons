# custom_icons

Use your own SVG icons in Home Assistant.

## Installation instructions

- Copy the contents of `custom_components/` to `<your config dir>/custom_components/`.

- Copy the contents of `www/` to `<your config dir>/www/`.

- Restart Home Assistant.

- Go to `Congiguration > Devices & Services`. Click `Add Integration`. Select `Custom Icons`.

## Usage

### Use your icon

Place your SVG icons in `<your config dir>/www/custom_icons/`.

The icon set is prefixed by: `ci:`. Then comes the filename.

So,

- If you have added `<your config dir>/www/custom_icons/icon1.svg`, use `ci:icon1`.
- If you have added `<your config dir>/www/custom_icons/icon2.svg`, use `ci:icon2`.
- And so on.

### Grouped prefixes

You can use grouped prefixes instead of `ci:` by creating a subfolder inside the `custom_icons` folder and adding a ([namespace object](#Namespace)) in `<your config dir>/www/custom_icons/namespaces.json`.

## Namespace

| Name     | Type   | Requirement  | Description                                                                      |
| -------- | ------ | ------------ | -------------------------------------------------------------------------------- |
| name     | string | **Required** | Name of the subfolder                                                            |
| fallback | string | **Optional** | A fallback SVG string to use instead when icons that don't exists are referenced |

Sample namespaces.json:

```
[
   {
    "name": "hue",
    "fallback": "M20.672 9.6c-2.043 0-3.505 1.386-3.682 3.416h-.664c-.247 0-.395.144-.395.384 0 .24.148.384.395.384h.661c.152 2.09 1.652 3.423 3.915 3.423.944 0 1.685-.144 2.332-.453.158-.075.337-.217.292-.471a.334.334 0 0 0-.15-.242c-.104-.065-.25-.072-.422-.02a7.93 7.93 0 0 0-.352.12c-.414.146-.771.273-1.599.273-1.75 0-2.908-1.023-2.952-2.605v-.025h5.444c.313 0 .492-.164.505-.463v-.058C23.994 9.865 21.452 9.6 20.672 9.6zm2.376 3.416h-5l.004-.035c.121-1.58 1.161-2.601 2.649-2.601 1.134 0 2.347.685 2.347 2.606zM9.542 10.221c0-.335-.195-.534-.52-.534s-.52.2-.52.534v2.795h1.04zm4.29 3.817c0 1.324-.948 2.361-2.16 2.361-1.433 0-2.13-.763-2.13-2.333v-.282h-1.04v.34c0 2.046.965 3.083 2.868 3.083 1.12 0 1.943-.486 2.443-1.445l.02-.036v.861c0 .334.193.534.519.534.325 0 .52-.2.52-.534v-2.803h-1.04zm.52-4.351c-.326 0-.52.2-.52.534v2.795h1.04v-2.795c0-.335-.195-.534-.52-.534zM3.645 9.6c-1.66 0-2.31 1.072-2.471 1.4l-.135.278V7.355c0-.347-.199-.562-.52-.562-.32 0-.519.215-.519.562v5.661h1.039v-.015c0-1.249.72-2.592 2.304-2.592 1.29 0 2.001.828 2.001 2.332v.275h1.04v-.246c0-2.044-.973-3.17-2.739-3.17zM0 16.558c0 .347.199.563.52.563.32 0 .519-.216.519-.563v-2.774H0zm5.344 0c0 .347.2.563.52.563s.52-.216.52-.563v-2.774h-1.04z"
  }
]
```

The icon set is now prefixed by: `ci-hue:`. Then comes the filename.

So,

- If you have added `<your config dir>/www/custom_icons/hue/bulbs-sultan.svg`, use `ci:bulbs-sultan`.
- If you have added `<your config dir>/www/custom_icons/hue/heroes-huego.svg`, use `ci:heroes-huego`.
- And so on.

- If you use try to use an icon that doesn't exist, for example `ci:missing-icon.svg`, then the fall back for `hue` will be used.

The icons are useable anywhere in Home Assistant - not only in Lovelace!

## FAQ

### Can I set this up in configure.yaml instead?

Yes.

```yaml
custom_icons:
```

## Icon Best Practices

To make sure all my SVGs work well with this integration, I usually refer to Simple Icons's contributing guide. ([Follow steps 2-6 from the Adding or Updating an Icon section](https://github.com/simple-icons/simple-icons/blob/develop/CONTRIBUTING.md#adding-or-updating-an-icon)).

## Special thanks

This work is heavily based on [hass-simpleicons](https://github.com/vigonotion/hass-simpleicons) by Tom Schneider. Thank you!