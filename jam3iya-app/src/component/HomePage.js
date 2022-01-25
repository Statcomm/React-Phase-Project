
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import React, {useState} from "react";

const HomePage = (props) => {
    const [signUpIsOpen, setSignUpIsOpen] = useState(false);
    const [signInIsOpen, setSignInIsOpen] = useState(false);
  return <div className="home">
      <h1>Welcom to Jam3ya</h1>
      <SignUpModal isOpen={signUpIsOpen}/>
              <SignInModal isOpen={signInIsOpen}/>

  </div>;
};

export default HomePage;
