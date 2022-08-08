import { Component } from 'react';

export class Sticker extends Component {
  // state = {
  //   isOpen: false,
  // };

  // toggleLabel = () => {
  //   this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  // };

  render() {
    const {
      onSelect,
      onToggle,
      sticker: { img, label },
      isSelected,
    } = this.props;
    return (
      <div
        style={{ border: '1px solid black', padding: 8, borderRadius: 8 }}
        onClick={() => {
          onSelect(label);
          onToggle(img);
          // this.toggleLabel();
        }}
      >
        <img src={img} alt={label} width={120} />
        {/* {this.state.isOpen && <p>{label}</p>} */}
        {isSelected && <p>{label}</p>}
      </div>
    );
  }
}
