import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
const Content = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const handleClick1 = (e) => {
    e.preventDefault();
    if (show1) {
      setShow1(false);
    } else {
      setShow1(true);
    }
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    if (show2) {
      setShow2(false);
    } else {
      setShow2(true);
    }
  };

  const handleClick3 = (e) => {
    e.preventDefault();
    if (show3) {
      setShow3(false);
    } else {
      setShow3(true);
    }
  };
  const handleClick4 = (e) => {
    e.preventDefault();
    if (show4) {
      setShow4(false);
    } else {
      setShow4(true);
    }
  };
  return (
    <div>
      <h2 style={{ textDecoration: "capitalize" }}>TERMS AND CODITIONS .</h2>
      <hr />
      <p>
        Welcome to <a href="https://home.yafreeka.com/"> Yafreeka's</a>, These
        Terms and Conditions ("Terms") are a legally binding agreement between
        you and yafreeka. By accessing or using the App, you agree to comply
        with and be bound by these Terms. If you do not agree to these Terms,
        please do not use the App.
      </p>
      <hr />
      <div className="first">
        <h4 style={{ textTransform: "uppercase" }}>
          USER REGISTRATION AND ACCOUNTS{" "}
        </h4>
        <h6>
          <GoDotFill /> . To use certain features of the App, you may be
          required to create an account. You are responsible for maintaining the
          confidentiality of your account credentials and for all activities
          that occur under your account.
        </h6>
        <p style={{ textDecoration: "dotted" }}>
          <GoDotFill /> . You must be at least 13 years of age to use the App.
          If you are under 13, you may only use the App with the consent of a
          parent or guardian.
        </p>
        {/* )} */}

        <hr />
      </div>

      <div className="first">
        <h4 style={{ textTransform: "uppercase" }}>CONTENT GUIDELINES :</h4>
        <h6>
          Users may upload, share, and view various forms of content on the App,
          including videos, comments, and other media. By using the App, you
          agree to adhere to the following content guidelines: :
        </h6>
        <hr />
        <div className="positioning">
          {show2 ? (
            <>
              <p onClick={handleClick2}>Learn more</p>
              <IoIosArrowUp
                onClick={handleClick2}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          ) : (
            <>
              <p onClick={handleClick2}>Learn more</p>
              <IoIosArrowDown
                onClick={handleClick2}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          )}{" "}
        </div>
        {show2 && (
          <p style={{ textDecoration: "dotted" }}>
            <ul>
              <li>
                {" "}
                You will not upload, share, or promote any content that is
                illegal, infringes upon intellectual property rights, or
                violates applicable laws and regulations.
              </li>
              <li>
                You will not post content that is harmful, offensive,
                defamatory, or discriminatory towards any individual or group
                based on race, religion, gender, sexual orientation, disability,
                or any other characteristic.
              </li>
              <li>
                You will not engage in harassment, cyberbullying, or any other
                harmful behaviour towards other users.{" "}
              </li>
              <li>
                You will not post any content containing any sexual contents or
                adult scenes.{" "}
              </li>
            </ul>
          </p>
        )}

        <hr />
      </div>

      <div className="first">
        <h4 style={{ textTransform: "uppercase" }}>INTELLECTUAL PROPERTY :</h4>
        <h6>
          All content on the App, including but not limited to text, graphics,
          videos, and logos, is the property of the Company or its licensors and
          is protected by copyright and other intellectual property laws.
          <br /> Users may not use, reproduce, distribute, or modify any content
          on the App without the explicit permission of the owner, except as
          expressly allowed under these Terms.
        </h6>{" "}
        {/* <hr />
        <div className="positioning">
          {show3 ? (
            <>
              <p onClick={handleClick3}>Learn more</p>
              <IoIosArrowUp
                onClick={handleClick3}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          ) : (
            <>
              <p onClick={handleClick3}>Learn more</p>
              <IoIosArrowDown
                onClick={handleClick3}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          )}{" "}
        </div>
        {show3 && ( */}
        {/* <p style={{ textDecoration: "dotted" }}>
          <GoDotFill /> Definition of Original Content: Original content is
          considered to be entirely created by the user, reflecting their unique
          style, perspective, and creative input. Yafreeka encourages diversity
          and authenticity, and we celebrate content that stands out from the
          crowd.
        </p> */}
        {/* )} */}
        <hr />
      </div>

      <div className="first">
        <h4 style={{ textTransform: "uppercase" }}>PRIVACY :</h4>
        <h6>
          Your use of the App is subject to our Privacy Policy, which outlines
          how we collect, use, and protect your personal information. By using
          the App, you consent to the practices described in the Privacy Policy.{" "}
        </h6>
        {/* <div className="positioning">
          {show3 ? (
            <>
              <p onClick={handleClick3}>Learn more</p>
              <IoIosArrowUp
                onClick={handleClick3}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          ) : (
            <>
              <p onClick={handleClick3}>Learn more</p>
              <IoIosArrowDown
                onClick={handleClick3}
                className="icon"
                size={24}
                color="rgb(44, 44, 185)"
              />
            </>
          )}{" "}
        </div>
        {show3 && (
          <p style={{ textDecoration: "dotted" }}>
            <GoDotFill /> Definition of Original Content: Original content is
            considered to be entirely created by the user, reflecting their
            unique style, perspective, and creative input. Yafreeka encourages
            diversity and authenticity, and we celebrate content that stands out
            from the crowd.
          </p>
        )} */}

        <hr />
      </div>
      <div className="first">
        <h4 style={{ textTransform: "uppercase" }}>TERMINATION :</h4>

        <h6>
          The Company reserves the right to terminate or suspend your account
          and access to the App, at its sole discretion, for any reason,
          including but not limited to violations of these Terms.
          <br />
        </h6>
      </div>
      <hr />
      <div className="first">
        <h4 style={{ textTransform: "uppercase" }}>
          DISCLAIMERS AND LIMITATIONS OF LIABILITY :
        </h4>

        <h6>
          The App is provided "as is," and the Company makes no warranties or
          representations regarding its availability, functionality, or
          accuracy.
          <br /> The Company shall not be liable for any direct, indirect,
          incidental, special, or consequential damages arising out of or in
          connection with your use of the App .
          <br />
        </h6>
      </div>
      <hr />
      <div>
        <h4 style={{ textTransform: "uppercase" }}>CHANGES TO TERMS :</h4>
        <p>
          The Company may update these Terms at any time. We will notify users
          of any material changes. Your continued use of the App after such
          changes constitutes acceptance of the new Terms.
        </p>
      </div>
      <hr />
      <div>
        <h4 style={{ textTransform: "uppercase" }}>GOVERNING LAW :</h4>
        <p>
          . These Terms are governed by and construed in accordance with the
          laws of kenya, without regard to its conflict of law principles.
        </p>
      </div>
      <hr />

      <div>
        <h4 style={{ textTransform: "uppercase" }}>CONTACT INFORMATION :</h4>
        <p>
          If you have any questions or concerns regarding these Terms, please
          contact us at [Contact Email]. By using the App, you acknowledge that
          you have read, understood, and agreed to these Terms and Conditions.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Content;
