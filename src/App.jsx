import "./style/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <nav>
          <div className="avatar">
            <img src="./images/hydra.png" alt="" />
            <h2 className="avatar-name">HYDRA</h2>
          </div>
          <div className="links">
            <a href="#">ABOUT</a>
            <a href="#">SERVICES</a>
            <a href="#">TECHNOLOGIES</a>
            <a href="#">HOW TO</a>
          </div>
          <div className="buttons">
            <button className="contact">CONTACT US</button>
            <button className="join">JOIN HYDRA </button>
          </div>
        </nav>
        <div className="mask-flex">
          <div className="firstBlock">
            <h2 className="forAll">
              <span className="extra">Dive</span> Into The Depths Of{" "}
              <span className="extra-virtual">Virtual Reality</span>
            </h2>
            <p className="maskText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
              Lectus mauris eros in vitae .
            </p>
            <div className="two-elements">
              <button className="yourWorld">BUILD YOUR WORLD</button>
              <img src="./images/arrow.png" alt="" className="arrow" />
            </div>
          </div>
          <img src="./images/mask.png" alt="" className="mask" />
        </div>
        <div className="connect">
          <div className="block-connect">
            <img src="./images/location.png" alt="" className="img-connect" />
            <div className="text-connect">
              <h3 className="h3-connect"> Pay Us A Visit</h3>
              <p className="text-connect">
                Union St, Seattle, WA 98101, United States
              </p>
            </div>
          </div>
          <div className="block-connect extra-block">
            <img src="./images/phone.png" alt="" className="img-connect" />
            <div className="text-connect">
              <h3 className="h3-connect">Give Us a Call</h3>
              <p className="text-connect">(110) 1111-1010</p>
            </div>
          </div>
          <div className="block-connect">
            <img src="./images/mail.png" alt="" className="img-connect" />
            <div className="text-connect">
              <h3 className="h3-connect">Send Us a Message</h3>
              <p className="text-connect">Contact@HydraVTech.com</p>
            </div>
          </div>
        </div>
        <div className="intro-text">
          <div className="intro-arrow">
            <h2 className="extra-h2">
              <span className="extra-intro">INTRODUCTION</span> TO HYDRA VR
            </h2>
            <img src="./images/long-arrow.png" alt="" className="long-arrow" />
          </div>
          <p className="extra-long-text">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
        <div className="man-block">
          <img src="./images/man-mask.png" alt="" className="mask" />
          <div className="text-man">
            <h2 className="extra-h2">
              <span className="extra-intro">ABOUT</span> HYDRA VR
            </h2>
            <p className="extra-long-text man-paragraph">
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo. Vivamus at augue eget
              arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
              Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam etiam erat velit scelerisque in dictum non consectetur a.
              Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
              orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
              adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </p>
            <button className="yourWorld">LET'S GET IN TOUCH</button>
          </div>
        </div>
        <div className="intro-text">
          <div className="intro-arrow">
            <h2 className="extra-h2">
              <span className="extra-intro">WHY BUILD</span> WITH HYDRA?
            </h2>
            <img src="./images/long-arrow.png" alt="" className="long-arrow" />
          </div>
          <p className="extra-long-text">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
        <div className="cards">
          <div className="one-card extra-card">
            <img
              src="./images/simulation.png"
              alt=""
              className="mask card-img"
            />
            <h3 className="card-head">SIMULATION</h3>
            <p className="card-text">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className="yourWorld card-button">TRY IT NOW</button>
          </div>
          <div className="one-card extra-card">
            <img
              src="./images/education.png"
              alt=""
              className="mask card-img"
            />
            <h3 className="card-head">EDUCATION</h3>
            <p className="card-text">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className="yourWorld card-button">TRY IT NOW</button>
          </div>
          <div className="one-card extra-card">
            <img
              src="./images/self-care.png"
              alt=""
              className="mask card-img"
            />
            <h3 className="card-head">SELF-CARE</h3>
            <p className="card-text">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className="yourWorld card-button">TRY IT NOW</button>
          </div>
          <div className="one-card">
            <img src="./images/outdoor.png" alt="" className="mask card-img" />
            <h3 className="card-head">OUTDOOR</h3>
            <p className="card-text">
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className="yourWorld card-button">TRY IT NOW</button>
          </div>
        </div>
        <div className="techno">
          <h2 className="extra-h2 techno-h2">
            <span className="extra-intro extra-techno">
              TECHNOLOGIES & HARDWARE
            </span>{" "}
            USED BY HYDRA VR.
          </h2>
          <button className="techno-button mask">
            <img src="./images/shape.png" alt="" className="techno-img" />
          </button>
        </div>
        <div className="companies">
          <img src="./images/unreal.png" alt="" />
          <img src="./images/unity.png" alt="" />
          <img src="./images/oculus.png" alt="" />
          <img src="./images/vive.png" alt="" />
        </div>
        <div className="intro-text">
          <div className="intro-arrow">
            <h2 className="extra-h2 build-h2">
              <span className="extra-intro">HOW WE BUILD</span> WITH HYDRA VR?
            </h2>
            <img src="./images/long-arrow.png" alt="" className="long-arrow" />
          </div>
          <p className="extra-long-text">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
        <div className="circles">
          <div className="one-circle">
            <h1 className="h1-circle mask">01</h1>
            <div className="block-circle">
              <img
                src="./images/smallest-arrow.png"
                alt=""
                className="img-circle"
              />
              <p className="text-circle">3D Conception & Design</p>
            </div>
          </div>
          <div className="one-circle">
            <h1 className="h1-circle mask">02</h1>
            <div className="block-circle">
              <img
                src="./images/smallest-arrow.png"
                alt=""
                className="img-circle"
              />
              <p className="text-circle">Interaction Design</p>
            </div>
          </div>
          <div className="one-circle">
            <h1 className="h1-circle mask">03</h1>
            <div className="block-circle">
              <img
                src="./images/smallest-arrow.png"
                alt=""
                className="img-circle"
              />
              <p className="text-circle extraText">VR World User Testing</p>
            </div>
          </div>
          <div className="one-circle">
            <h1 className="h1-circle mask">04</h1>
            <div className="block-circle">
              <img
                src="./images/smallest-arrow.png"
                alt=""
                className="img-circle"
              />
              <p className="text-circle">Hydra VR Deploy</p>
            </div>
          </div>
        </div>
        <div className="registration">
          <h1 className="h2-reg">JOIN HYDRA</h1>
          <h2 className="h4-reg">Let’s Build Your VR Experience</h2>
          <div>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <div>
            <input type="text" placeholder="Subject" />
          </div>
          <div>
            <input type="text" placeholder="Tell Us Something..." />
          </div>
        </div>
      </div>
    </div>
  );
}
