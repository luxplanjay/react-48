export const Sticker = ({ sticker: { img, label }, onSelect, isSelected }) => {
  return (
    <div
      style={{ border: '1px solid black', padding: 8, borderRadius: 8 }}
      onClick={() => onSelect(img)}
    >
      <img src={img} alt={label} width={120} />
      {isSelected && <p>{label}</p>}
    </div>
  );
};
