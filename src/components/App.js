import { GlobalStyle } from './GlobalStyle';
import { StickerList } from './StickerList';
import stickers from '../stickers.json';
import { Component } from 'react';

const SelectedLabel = ({ text }) => {
  return <h1>{text}</h1>;
};

export class App extends Component {
  state = {
    selectedStickerLabel: null,
  };

  selectStickerLabel = label => {
    this.setState({
      selectedStickerLabel: label,
    });
  };

  render() {
    return (
      <>
        <SelectedLabel text={this.state.selectedStickerLabel} />
        <StickerList stickers={stickers} onSelect={this.selectStickerLabel} />
        <GlobalStyle />
      </>
    );
  }
}
