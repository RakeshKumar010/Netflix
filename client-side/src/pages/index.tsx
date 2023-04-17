import Image from "next/image";
import React, { useState } from "react";
import logo from "../assests/logo.png";
import Link from "next/link";
import { AccordionApi } from "@/components/AccordionApi";

// import  from "@/components/FeatureCord";
import FeatureCord from "@/components/FeatureCord";
import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import IndexPage from "@/components/IndexPage";
// import { Accordion } from "@mui/material";
// import LanguageIcon from '@mui/icons-material/Language';
const index = () => {
  const [apidata, setApiData] = useState(AccordionApi);
  return (
    <div className="superMain">
    <IndexPage/>
      <div className="homePage">
        <nav>
          <Image className="logo" src={logo} alt="logo" />
          <div className="navBtnClass">
            <select
              name="language"
              id="language-select"
              className="selectClass"
            >
              <option value="">English</option>
              <option value="">Hindi</option>
            </select>
            <Link href={"/Signup"}  className="signupRouter">SignUp</Link>
          </div>
        </nav>

        <div className="Unlimitedmoviesheading">
          <h1 className="Unlimitedmoviesheadingh1">
            Unlimited movies, TV <br /> shows and more.
          </h1>
          <p className="Unlimitedmoviesheadingp">
            Watch anywhere. Cancel anytime.
          </p>

          <div className="getstartMain">
            <h3>
              Ready to watch? Enter your email to create or restart your
              membershih3.
            </h3>
            <div className="getStartinput">
              <input type="Email" placeholder="Email address" />
              <Link href={"/"}>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
      <FeatureCord />

      <div className="accordionMain">
        <h1>Frequently Asked Questions</h1>
        <div className="accordionList">
          {apidata.map((val) => {
            return (
              <>
                <Accordion id={val.id} head={val.head} message={val.message} />
              </>
            );
          })}
            <h2 className="accordionfootertext">
              Ready to watch? Enter your email to create or restart your
              membershih3.
            </h2>
            <div className="getStartinput">
              <input type="Email" placeholder="Email address" />
              <Link href={"/"}>Get Started</Link>
            </div>
        </div>
      </div>
      <Footer/>


    </div>
  );
};

export default index;
