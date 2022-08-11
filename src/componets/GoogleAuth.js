import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '15864043277-qni1enlev7ov6s3kd18m3p2b86eomr76.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: 'FEB-streams',
      });
    });
  }

  render() {
    return <div> Google Auth</div>;
  }
}
export default GoogleAuth;
