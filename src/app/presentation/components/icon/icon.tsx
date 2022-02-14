import React, { ComponentProps, FC, useEffect, memo } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { createIconSetFromFontello } from 'react-native-vector-icons';

import config from '../../../assets/icons/weather-icons.json';

const WTIcon = createIconSetFromFontello(config);

const availableIcons = config.glyphs.map(glyph => glyph.css);

const Icon: FC<ComponentProps<typeof WTIcon>> = memo(
  ({ name, size, ...rest }) => {
    useEffect(() => {
      const isIconAvailable = availableIcons.includes(name);

      if (!isIconAvailable)
        console.warn(`Icon ${name} doesn't exists on weather-icons`);
    }, [name]);

    return (
      <WTIcon
        {...rest}
        name={name}
        size={size && !Number.isNaN(size) ? RFValue(size) : size}
      />
    );
  },
);

export { Icon };
