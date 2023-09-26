import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
//import { loginSuccess, logoutSuccess,signIn,signOut } from "./Action";
import { loginSuccess, logoutSuccess,signIn,signOut } from "./Redux/Action";
import axios from "axios";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import MicrosoftLogin from "react-microsoft-login";

function Loginpage({ user, loginSuccess, logoutSuccess }) {
  const [profile, setProfile] = useState(
    JSON.parse(localStorage.getItem("profile")) || null
  );

  const twitterConsumerKey = process.env.REACT_APP_TWITTER_CONSUMER_KEY;
  const twitterSecretKey = process.env.REACT_APP_TWITTER_CONSUMER_KEY_SECRET;

  //const linkedInKey = process.env.REACT_APP_LINKEDIN_CONSUMER_KEY
  //const redirectUri = process.env.REACT_APP_LINKEDIN_REDIRECT_KEY

  // google login
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      loginSuccess(codeResponse);
      localStorage.setItem("profile", JSON.stringify(codeResponse));
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem("profile");
    logoutSuccess();
  };
  // microsoft
  const handleLoginSuccess = (err, data) => {
    console.log(data);
    console.log(data.account.name);
    console.log(data.account.username);
    setProfile(data.account);
    signIn(data.account);
    localStorage.setItem("profile", JSON.stringify(data.account));
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
    signOut();
  };

  // Linkedin
  const { linkedInLogin } = useLinkedIn({
    clientId: "86esd14ut7hsts",
    redirectUri: `http://localhost:3000`,

    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          localStorage.setItem("profile", JSON.stringify(res.data));
        })

        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-600">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">React Api Login</h2>

        {profile ? (
          <div className="flex flex-col items-center">
            <img
              className="w-24 h-24 rounded-full mb-4"
              src={profile.picture}
              alt="User Profile"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold">User Logged in</h3>
              <p className="text-lg">{profile.name}</p>
              <p className="text-gray-600">
                {profile.email} {profile.username}
              </p>
            </div>
            <div className="mt-6">
              <button
                className="bg-blue-400 text-white px-4 py-2 rounded-md mr-4"
                onClick={logOut}
              >
                Log out
              </button>
              <Link
                to="/Homepage"
                className="bg-blue-400 text-white px-4 py-2 rounded-md"
              >
                Start now
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <button
              className="bg-blue-400 text-white px-4 py-2 rounded-md mb-4"
              onClick={() => login()}
            >
              Sign in with Google 🚀
            </button>
            <MicrosoftLogin
              className="w-210px"
              clientId="0f1b5c58-a073-4e5f-b139-dd5b7aae804b"
              client_secret="a7995189-f8d9-4ae1-9298-4b9fa721a738"
              authCallback={handleLoginSuccess}
              onError={handleLoginFailure}
            />

            <img
              className="m-4"
              onClick={linkedInLogin}
              src={linkedin}
              alt="Sign in with Linked In"
              style={{ maxWidth: "180px", cursor: "pointer" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  loginSuccess,
  logoutSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);
