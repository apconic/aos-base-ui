import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

function withAuth(permission, { permissions = [] }) {
  return (permission && permissions.indexOf(permission) > -1) ?
    Component => props => (<Component {...props} />) :
    () => () => (
      <Paper style={{ marginTop: 16, padding: 16 }} >
        <Typography color="error" component="b">Access denied.</Typography>
        <Typography component="p">You are not authorized to view this page.</Typography>
        <a href="/">Go to homepage</a>
      </Paper>
    );
}

export default withAuth;