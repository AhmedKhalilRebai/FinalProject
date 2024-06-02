import React from 'react';
import { Button } from 'react-bootstrap';
import FormSignUp from './FormSignUp';

function SignUp() {
  const [showForm, setShowForm] = React.useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <Button variant="dark" onClick={handleShowForm}>
        Sign Up
      </Button>
      {showForm && <FormSignUp onHide={handleCloseForm} />}
    </div>
  );
}

export default SignUp;