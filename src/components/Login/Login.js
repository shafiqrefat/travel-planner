import React, { useContext } from 'react';
import './Login.css';

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {

        if (firebase.apps.length === 0) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
        }

        //Google sign-in provider
        var provider = new firebase.auth.GoogleAuthProvider();

        //Authenticate with Firebase using the Google provider object.
        firebase.auth().signInWithPopup(provider).then(function (result) {

            var { displayName, email } = result.user;
            const signnedInUser = { name: displayName, email }
            setLoggedInUser(signnedInUser);
            history.replace(from);

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });


    }

    const handleFBLogin = () => {

        if (firebase.apps.length === 0) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
        }

        //Facebook sign-in provider
        const fbProvider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }

    return (
        <div className="loginForm rounded mt-5">

            <form action="" className="">
                <div className="form-group">
                    <label for="Origin">Username or Email</label>
                    <input type="text" id="username" class="form-control bg-light" placeholder="username or email" />
                </div>
                <div className="form-group">
                    <label for="Destination">Password</label>
                    <input type="password" id="password" class="form-control bg-light" placeholder="Password" />
                </div>

                <div className="">
                    <div className="from-group d-flex justify-content-between ">
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                        </div>
                        <div>
                            <a href="#" className="text-warning">Forget Password</a>
                        </div>
                    </div>
                </div>

                <button className="btn btn-warning col-md-12">Login</button>

                <div className="form-group">
                    <p className="text-center">Don’t have an account? <a href="/registration" className="text-warning ">Create an account</a></p>
                </div>

                <hr />

                <p className="text-center">Or</p>

            </form>

            <div className="">
                <button className="btn btn-outline-primary col-md-12" onClick={handleFBLogin}>Continue with Facebook</button>
                <br />
                <br />
                <button className="btn btn-outline-success col-md-12" onClick={handleGoogleSignIn}>Continue with Google</button>
            </div>


        </div>
    );
};

export default Login;
