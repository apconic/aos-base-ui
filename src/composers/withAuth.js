import React from 'react';
import Paper from 'material-ui/Paper';

function withAuth(permission, { permissions = [] }) {
  return (permission && permissions.indexOf(permission) > -1) ?
    Component => props => (<Component {...props} />) :
    () => () => (
      <Paper style={{ marginTop: 16, padding: 16 }} >
        <b style={{ color: 'red' }} >Access denied </b> <p />
        You are not authorized to view this page.<p />
        <a href="/">Go to homepage</a>
      </Paper>
    );
}

export default withAuth;