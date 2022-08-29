import { useState } from 'react';
import { Box } from './Box';
import { Sticker } from './Sticker';

export const StickerList = ({ stickers }) => {
  const [selectedSticker, setSelectedSticker] = useState(null);

  return (
    <Box as="ul" display="flex" gridGap={4} p={2}>
      {stickers.map((sticker, idx) => (
        <li key={idx}>
          <Sticker
            sticker={sticker}
            isSelected={selectedSticker === sticker.img}
            onSelect={setSelectedSticker}
          />
        </li>
      ))}
    </Box>
  );
};
