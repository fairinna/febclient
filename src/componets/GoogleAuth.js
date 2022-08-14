import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../action';

class GoogleAuth extends React.Component {
  state = {
    authGoogleProperty: null,
    authGoogleListen: false,
  };
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

  onSignInClick = () => {
    this.authGoogle.signIn();
  };
  onSignOutClick = () => {
    this.authGoogle.signOut();
  };

  showSignIn = () => {
    if (this.state.authGoogleProperty === null) {
      return null;
    }
    if (this.state.authGoogleProperty) {
      return (
        <button className='ui red google button' onClick={this.onSignOutClick}>
          <i className='google icon'> </i> Sign OUT
        </button>
      );
    } else {
      return (
        <button className='ui green google button' onClick={this.onSignInClick}>
          <i className='google icon'></i> SignIN
        </button>
      );
    }
  };
  render() {
    return <div className=''> {this.showSignIn()}</div>;
  }
}
export default connect(null, { signIn, signOut })(GoogleAuth);
