import React from "react";

let Subscription = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div
        className="container bg-white rounded-lg shadow-md p-8 text-center mt-5"
        style={{
          width: "100%",
          background: "black",
          color: "white",
          margin: "0 auto",
          minHeight: "100vh",
        }}
      >
        <div className="flex items-center justify-center mb-10">
          <img
            src="https://logodownload.org/wp-content/uploads/2018/09/youtube-music-logo-1.png"
            alt="YouTube Music Logo"
            className="h-8 w-auto mr-2"
          />
          <h1 className="text-xl font-semibold">YouTube Music</h1>
        </div>
        <p className="mt-7">
          Get Music Premium to listen to music ad-free, offline and with your
          screen off
        </p>
        <a
          className="btn bg-blue-500 text-white font-bold py-2 px-4 rounded mt-10 inline-block"
          href="#"
        >
          Get Music Premium
        </a>
        <p className="mt-10">
          Prepaid and subscription plans available. Prices start at
          ₹99.00/month. Free trials available with subscription plans only.
        </p>
        <p className="mt-10">
          Or save money with an annual, family or student membership.
          Restrictions apply. Learn more <a href="#">here</a>.
        </p>
        <div className="text-lg font-semibold mt-14">
          Prices start at ₹99.00/month
        </div>

        <div
          className="mt-20 flex justify-center"
          style={{ marginTop: "120px" }}
        >
          <div className="mt-4 mx-4 text-center">
            <img
              src="https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_headset_84x84.png"
              alt="Listen in the background"
              style={{ width: "60px;", height: "60px" }}
              className="mx-auto"
            />
            <h2 className="mt-2">Listen in the background</h2>
            <p>
              Don't worry about your music stopping when you lock your screen or
              use other apps.
            </p>
          </div>
          <div className="mt-4 mx-4 text-center">
            <img
              src="https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_play_84x84.png"
              alt="Ad-free music"
              style={{ width: "60px;", height: "60px" }}
              className="mx-auto"
            />
            <h2 className="mt-2">Ad-free music</h2>
            <p>Listen to the world of music without ads.</p>
          </div>
          <div className="mt-4 mx-4 text-center">
            <img
              src="https://www.gstatic.com/youtube/img/promos/growth/ytm_lp2_icon_feature_download_84x84.png"
              alt="Download and go"
              style={{ width: "60px;", height: "60px" }}
              className="mx-auto"
            />
            <h2 className="mt-2">Download and go</h2>
            <p>Listen to your favorite music on the go.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
