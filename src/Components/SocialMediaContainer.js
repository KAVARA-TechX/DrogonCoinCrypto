import React from "react";

const SocialMediaContainer = () =>
  <div className="ml" style={{ display: 'flex' }}>
    <a href="/" class="float facebook-margin">
      <i className="fab fa-facebook-f" style={{ fontSize: '25px', margin: '18px', color: "blue" }}></i>
    </a>
    <a href="/" class="float twitter-margin">
      <i className="fab fa-twitter " style={{ fontSize: '25px', margin: '18px', color: '#1DA1F2' }}></i>

    </a>
    <a href="https://www.instagram.com/p/CUNggi6Pb5T/?utm_source=ig_web_copy_link" class="float instagram-margin" target="_blank">
      <i className="fab fa-instagram " style={{ fontSize: '25px', margin: '18px', color: "#CE387C" }}></i>

    </a>
    <a href="/" class="float discord-margin">
      <i className="fab fa-discord " style={{ fontSize: '25px', margin: '18px', color: "#8B9DFE" }}></i>

    </a>
    <a href="/" class="float reddit-margin">
      <i className="fab fa-reddit-alien " style={{ fontSize: '25px', margin: '18px', color: "#FF5700" }}></i>

    </a>
    <a href="https://t.me/DrogonCommunity" target="_blank" class="float telegram-margin">
      <i className="fab fa-telegram-plane " style={{ fontSize: '25px', margin: '18px', color: "#67BEEA" }}></i>

    </a>
  </div>

export default SocialMediaContainer;