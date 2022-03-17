import React, { useState } from "react";

const data = {
  email: null,
  password: null,
};

const useDataUser = () => {
  const [dataUser, setDataUser] = useState(data);

  const loadData = newData => {
    setDataUser(newData);
  };

  const clearData = () => {
    setDataUser(data);
  };

  return { dataUser, loadData, clearData };
};

export { useDataUser };
