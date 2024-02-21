import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const Logout = () => {
  useEffect(() => {
    localStorage.clear();
    Swal.fire({
      title: "Logout successfully",
      icon: "success" 
    }).then(() => {
      window.location.href = "/";
    });
  }, []);

  return null;
}

export default Logout;
