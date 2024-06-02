import React from 'react';
import { Button } from 'react-bootstrap';
import FormSignIn from './FormSignIn';


function SignIn() {
  const [showForm, setShowForm] = React.useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };


  return (
    <div>
      <Button variant="light" onClick={handleShowForm}>
        Sign In
      </Button>
      {showForm && <FormSignIn onHide={handleCloseForm} />}
    </div>
  );
}

export default SignIn;