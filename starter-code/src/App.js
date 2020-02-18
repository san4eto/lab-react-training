import React, { Component } from "react";
import profiles from "./data/berlin.json";
// import ReactDOM from "react-dom";
// import React from "react";
// import ReactDOM from "react-dom";

const IdCard = props => {
  return (
    <div>
      <img src={props.picture} alt=" Person"></img>
      <ul>
        <li>LastName: {props.lastName}</li>
        <li>FirstName: {props.firstName}</li>
        <li>Gender: {props.gender}</li>
        <li>Height: {props.height}</li>
        {/* <li>birth= {formatDate(props.birth)}</li> */}
      </ul>
    </div>
  );
};

const Greetings = props => {
  return (
    <div>
      <h2>
        {props.lan} {props.children}
      </h2>
    </div>
  );
};

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

const CreditCard = props => {
  const cardNum = props.number.slice(-4);
  const style = { backgroundColor: props.bgColor };
  return (
    <div
      type={props.type}
      number={props.number}
      bank={props.bank}
      owner={props.owner}
      style={style}
      color="white"
    >
      <ul>
        <li>{props.bank}</li>
        <li>
          Expires{props.expirationMonth}/{props.expirationYear}{" "}
        </li>
        <li>{props.owner}</li>
        <li>**** **** **** **** {cardNum}</li>
      </ul>
    </div>
  );
};

const Rating = props => {
  const rate = Math.floor(props.children);
  const stars = "★".repeat(rate);
  const whiteStars = "☆".repeat(5 - rate);
  return (
    <div>
      {stars}
      {whiteStars}
    </div>
  );
};

const DriverCard = props => {
  const rate = Math.floor(props.rating);
  const stars = "★".repeat(rate);
  const whiteStars = "☆".repeat(5 - rate);
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>
        rating: {stars}
        {whiteStars}
      </p>
      <img src={props.picture} alt="driver"></img>
      {/* <p>{props.car}</p> */}
    </div>
  );
};

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

// const FaceBook = {
//   profiles.map(profile => {
//   return
//         // <div>
//         //   {/* <h2>{profile.firstName}</h2>
//         //   <h2>{profile.lastName}</h2>
//         //   <h2>{profile.country}</h2>
//         //   <h2>{profile.type}</h2>
//         //   <h2>
//         //     {" "}
//         //     {profile.isStudent} && <p> Type : Student</p> */}
//         //   </h2>
//         // </div>
//       })};

const FaceBook = props => {
  const ProfileData = profiles.map(profile => {
    return (
      <React.Fragment>
        <img key={profile.id} src={profile.img} alt="profilepic"></img>
        <ul>
          <li> First Name: {profile.firstName}</li>
          <li> Last Name: {profile.lastName}</li>
          <li> Country: {profile.country}</li>
          <li>{profile.isStudent ? "Type: Student" : "Type: Teacher"}</li>
        </ul>
      </React.Fragment>
    );
  });
  return <div>{ProfileData}</div>;
};

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

// Create a SignupPage component with the following elements:
class SignupPage extends Component {
  state = {
    lang: ["en", "de", "fr"],
    children: ["Hello🏈", "Hallo🐻", "Bonjour❣️"],
    value: ["en", "de", "fr"]
  };

  setLanguage = () => {
    console.log(this.state.lang[1]);
    if (this.state.value === "en") {
      this.setState({ lang: this.state.lang[0] });
      this.setState({ children: this.state.children[0] });
    }
    if (this.state.value === "fr") {
      this.setState({ lang: this.state.lang[2] });
      this.setState({ children: this.state.children[2] });
    } else {
      this.setState({ lang: this.state.lang[1] });
      this.setState({ children: this.state.children[1] });
    }
  };

  render() {
    return (
      <React.Fragment>
        <form type>
          <label for="email">email:</label>
          <input type="email" id="email"></input>
          <label for="pwd">Password:</label>
          <input type="password" id="pwd"></input>
          <label for="nationality">nationality:</label>
          <select id="language" onChange={this.setLanguage}>
            <option onChange={this.setLanguage} value={this.state.value[0]}>
              en{" "}
            </option>
            <option onChange={this.setLanguage} value={this.state.value[1]}>
              de
            </option>
            <option onChange={this.setLanguage} value={this.state.value[2]}>
              fr
            </option>
          </select>
          <input type="submit" value="Submit"></input>
        </form>

        <h3>
          lang={this.state.lang}>{this.state.children}
        </h3>
        <p>Your e-mail is </p>
      </React.Fragment>
    );
  }
}
// A input "email" (bonus: make the input green/red when the email is valid/invalid)
// A input "password" (bonus: make the input green/red when the password is strong/weak)
// A select input "nationality" (possible values: "en","de","fr")
// A text "Hello", "Hallo" or "Bonjour" based on the selected nationality
// A text "Your email is john@doe.com"
// For this, you will need 3 states:

// email
// password
// nationality

export default App;
