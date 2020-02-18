import React, { Component } from "react";

import SignupPage from "./SignupPage.js";
import Carousel from "./Carousel.js";
import FaceBook from "./FaceBook.js";
import DriverCard from "./DriverCard.js";
import Rating from "./Rating.js";
import CreditCard from "./CreditCard.js";
import IdCard from "./IdCard.js";
import Greetings from "./Greetings";

// import ReactDOM from "react-dom";

// WRITE RANdom FunCTION TO DO
const Random = props => {
  return (
    <div>
      Random value between {props.min} and {props.max} =>
      {/* {this.randomvalue} */}
    </div>
  );
};

// CoNsT BOX COLOR
// const BoxColor = props => {
//   const style = `${props.r},${props.g},${props.b}`;
//   return (
//     <h1 style={style}>
//       {props.r} {props.g} {props.b}
//     </h1>
//   );
// };

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        {/* TODO: Use the IdCard component */}

        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig </Greetings>
        <Greetings lang="fr">François</Greetings>
        {/* TODO: Use the Greetings component */}

        <Random min={1} max={6} />
        <Random min={1} max={100} />
        {/* 
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} /> */}

        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
        <div>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>
        <div>
          <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
              model: "Toyota Corolla Altis",
              licensePlate: "CO42DE"
            }}
          />
          <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
              model: "Audi A3",
              licensePlate: "BE33ER"
            }}
          />
        </div>
        <div>
          <LikeButton /> <LikeButton />
        </div>

        <div>
          <ClickablePicture
            img="/img/persons/maxence.png"
            imgClicked="/img/persons/maxence-glasses.png"
          />
        </div>
        <div>
          <Carousel
            imgs={[
              "https://randomuser.me/api/portraits/women/1.jpg",
              "https://randomuser.me/api/portraits/men/1.jpg",
              "https://randomuser.me/api/portraits/women/2.jpg",
              "https://randomuser.me/api/portraits/men/2.jpg"
            ]}
          />
        </div>
        {/* <Dice /> */}
        {/* <NumbersTable limit={12} /> */}
        <FaceBook />
        <SignupPage />
      </div>
    );
  }
}

class LikeButton extends Component {
  state = {
    count: 0
  };

  oneUp = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return <button onClick={this.oneUp}>{this.state.count} Like</button>;
  }
}

class ClickablePicture extends Component {
  state = {
    img: this.props.img
  };

  changeImg = () => {
    if (this.state.img === this.props.img) {
      this.setState({ img: this.props.imgClicked });
    } else if (this.state.img === this.props.imgClicked) {
      this.setState({ img: this.props.img });
    }
  };

  render() {
    return <img onClick={this.changeImg} src={this.state.img} alt="bla"></img>;
  }
}

// class Dice extends Component {
//   state = {
//     img: ["/img/dice3.png", "/img/dice-empty.png", "/img/dice6.png"]
//   };

//    randomDice = ()=>{
//      this.setState({
//       img: img[Math.floor(Math.random() * img.length)]
//       });
//     };

//   render() {
//     return (
//       <div>
//         <img onClick={this.randomDice} src={this.state.img[0]></img>>
//       </div>
//     );
//   }
// }

export default App;
