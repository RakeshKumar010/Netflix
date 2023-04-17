import Image from "next/image";
import React from "react";
import tv1 from "@/assests/tv1.png";
import tv2 from "@/assests/tv2.png";
import tv3 from "@/assests/tv3.png";
import tv4 from "@/assests/tv4.png";

const FeatureCord = () => {
  return (
    <div className="featurecoardmain">
      <div className="tvMain tv1Mian">
        <div className="tv1text">
          <h1>Enjoy on your TV.</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, <br /> Apple TV,
            Blu-ray players and more.
          </p>
        </div>
        <Image src={tv1} alt="tv1" className="tvImage " />
      </div>
      <hr />
      <div className="tvMain tv2Mian">
        <Image src={tv2} alt="tv1" className="tvImage" />

        <div className="tv1text">
          <h1>Watch everywhere.</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, <br /> tablet,
            laptop, and TV.
          </p>
        </div>
      </div>
      <hr />
      <div className="tvMain tv3Mian">
        <div className="tv1text">
          <h1>Create profiles for  children.</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
        <Image src={tv3} alt="tv1" className="tvImage" />
      </div>
      <hr />
      <div className="tvMain tv4Mian">
        <Image src={tv4} alt="tv1" className="tvImage" />

        <div className="tv1text">
          <h1>Download your shows to watch offline.</h1>
          <p>
          Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCord;
