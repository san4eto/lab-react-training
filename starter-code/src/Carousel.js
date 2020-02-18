import React, { Component } from "react";
class Carousel extends Component {
  state = {
    img: this.props.imgs[0]
  };

  rightClick = () => {
    if (this.state.img === this.props.imgs[0]) {
      this.setState({ img: this.props.imgs[1] });
    }
    if (this.state.img === this.props.imgs[1]) {
      this.setState({ img: this.props.imgs[2] });
    }

    if (this.state.img === this.props.imgs[2]) {
      this.setState({ img: this.props.imgs[3] });
    } else if (this.state.img === this.props.imgs[3]) {
      this.setState({ img: this.props.imgs[1] });
    }
  };

  leftClick = () => {
    if (this.state.img === this.props.imgs[0]) {
      this.setState({ img: this.props.imgs[3] });
    }
    if (this.state.img === this.props.imgs[3]) {
      this.setState({ img: this.props.imgs[2] });
    }

    if (this.state.img === this.props.imgs[2]) {
      this.setState({ img: this.props.imgs[1] });
    } else if (this.state.img === this.props.imgs[1]) {
      this.setState({ img: this.props.imgs[0] });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.leftClick}>click here </button>
        <img src={this.state.img} alt="bla"></img>
        <button onClick={this.rightClick}>click here </button>
      </div>
    );
  }
}
export default Carousel;
