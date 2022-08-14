import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../action';

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null,
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
            isSignedIn: this.authGoogle.isSignedIn.get(),
          });
          this.authGoogle.isSignedIn.listen(this.listenSignedIn);
        });
    });
  }
  listenSignedIn = (isSignedIn) => {
    //this.setState({ isSignedIn: this.authGoogle.isSignedIn.get() });
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.authGoogle.signIn();
  };
  onSignOutClick = () => {
    this.authGoogle.signOut();
  };

  showSignIn = () => {
    if (this.state.isSignedIn === null) {
      return null;
    }
    if (this.state.isSignedIn) {
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
const mapStateToProps = (state, action) => {
  console.log('state ->', state.auth.isSignedIn);
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
