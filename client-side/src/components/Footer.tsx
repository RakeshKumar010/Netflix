import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footermain">
      <p className="footerparaheading">Questions?Call <u>000-800-919-1694</u></p>
      <div className="footerulconnection">
        <ul>
          <li>
            <Link href={"/"}>FAQ</Link>
          </li>
          <li>
            <Link href={"/"}>Investor Relations</Link>
          </li>
          <li>
            <Link href={"/"}>Privacy</Link>
          </li>
          <li>
            <Link href={"/"}>Speed Test</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/"}>Help Centre</Link>
          </li>
          <li>
            <Link href={"/"}>Jobs</Link>
          </li>
          <li>
            <Link href={"/"}>Cookie Preferences</Link>
          </li>
          <li>
            <Link href={"/"}>Legal Notices</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/"}>Account</Link>
          </li>
          <li>
            <Link href={"/"}>Ways to Watch</Link>
          </li>
          <li>
            <Link href={"/"}>Corporate Information</Link>
          </li>
          <li>
            <Link href={"/"}>Only on Netflix</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href={"/"}>Media Centre</Link>
          </li>
          <li>
            <Link href={"/"}>Terms of Use</Link>
          </li>
          <li>
            <Link href={"/"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <select name="language" id="language-select" className="selectClass">
        <option value="">English</option>
        <option value="">Hindi</option>
      </select>
      <p className="netflixIndia">Netflix India</p>
    </div>
  );
};

export default Footer;
