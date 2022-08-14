import React from 'react';

class GoogleAuth extends React.Component {
  state = { authGoogleProperty: null, authGoogleListen: false };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '15864043277-qni1enlev7ov6s3kd18m3p2b86eomr76.apps.googleusercontent.com',
          scope: 'email',
          plugin_name: 'FEB-streams',
        })
        .then(() => {
          this.authGoogle = window.gapi.auth2.getAuthInstance();
          this.setState({
            authGoogleProperty: this.authGoogle.isSignedIn.get(),
          });
          this.authGoogle.isSignedIn.listen(this.listenSignedIn);
        });
    });
  }
  listenSignedIn = () => {
    this.setState({ authGoogleProperty: this.authGoogle.isSignedIn.get() });
  };
  showSignIn = () => {
    if (this.state.authGoogleProperty === null) {
      return <div>I do not know, who are you!!</div>;
    }
    if (this.state.authGoogleProperty) {
      return <div>Welcome, you are In!</div>;
    } else {
      return <div>SignedIn is {this.state.authGoogleProperty.toString()}</div>;
    }
  };
  render() {
    return <div> {this.showSignIn()}</div>;
  }
}
export default GoogleAuth;
