import React from "react";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import authStore from "../Stores/authStore";
function HomePage() {
  return (
    <div className="listDesign">
      <div className="card">
        <img
          src="https://thumbs.dreamstime.com/b/collecting-pile-different-value-euro-banknotes-one-side-collecting-piles-different-value-euro-banknotes-147032775.jpg"
          style={{ width: "100%" }}
        />
        <div className="container1">
          <h1 style={{ color: "purple" }}>Rules</h1>

          <ul>
            <li>
              <h5>
                <SignInModal /> or <SignUpModal />
                to be able to
              </h5>
              <ol>
                <li>
                  {" "}
                  {authStore.user ? (
                    <>
                      <NavLink to="/jam3yalist">See Jam3iyat</NavLink>
                    </>
                  ) : (
                    <> See Jam3iyat</>
                  )}
                </li>
                <li>Create Jam3ya</li>
                <li>Delete Jam3ya</li>
                <li>Update Jam3ya</li>
                <li>Join Jam3ya</li>
              </ol>
            </li>
            <li>
              <h5>You can't Join more than 3 jam3ya</h5>{" "}
            </li>
            <li>
              <h5>leaving the Jam3ya only if you finished your debt</h5>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <img
          className=""
          src="https://cdn.quotesgram.com/img/27/68/1062287647-keep-calm-and-collect-the-money.png"
          style={{ width: "100%" }}
        />
        <img
          src="https://media4.giphy.com/media/2dnGHOAQt1tIziib5X/giphy.gif"
          style={{ width: "100%" }}
        />
      </div>
      <div className="card">
        <div className="container1">
          <h1 style={{ color: "purple" }}>Description</h1>

          <ul>
            <li>
              <ol>
                <li>
                  <h5>
                    Your way to be financially SAFE! A way to save money and
                    build a habit by joining one of our Jam3iya’s
                  </h5>
                </li>
                <li>
                  <h5>
                    You can also create your own Jam3iya and invite your
                    friends. You must choose a Jam3iya to join, suiting amount,
                    your month of money collection
                  </h5>
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default observer(HomePage);
