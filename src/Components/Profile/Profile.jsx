import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <main className="body-content-profile">
        <div>
          <div className="config-profile">
            <h1 className="title-profile">ACCOUNT SETTINGS</h1>
            <h2 className="title-profile">Manage Your Account Data</h2>
          </div>
        </div>
        <div className="content-profile">
          <div className="content-input-profile">
            <div className="content-text-profile">
              <div className="content-img-profile">
                <img
                  className="img-profile"
                  src="https://avatars.cloudflare.steamstatic.com/ef59212b7234514cc64e2eece3af15baf6eface1_full.jpg"
                  alt="photoUser"
                />
              </div>
              <h3 className="title-profile">Your Profile</h3>
              <button data-text="Awesome" class="button">
                <span class="actual-text">&nbsp;Edit&nbsp;</span>
                <span class="hover-text" aria-hidden="true">
                  &nbsp;Edit&nbsp;
                </span>
              </button>
            </div>
            <div className="content-label">
              <input
                className="input-profile"
                type="text"
                placeholder="Gabriel"
              />

              <input
                className="input-profile"
                type="text"
                placeholder="Cornide"
              />

              <input
                className="input-profile"
                type="text"
                placeholder="gabricornidel@gmail.com"
              />

              <input
                className="input-profile"
                type="text"
                value="**********"
                disabled
                placeholder=""
              />

              <input
                className="input-profile"
                type="text"
                placeholder="https://avatars.cloudflare.steamstatic.com/ef59212b7234514cc64e2eece3af15baf6eface1_full.jpg"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
