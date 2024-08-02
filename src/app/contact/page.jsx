"use client";

import { useEffect } from "react";

const promiseFunction = () => {
  new Promise((resolve, reject) => {
    const a = 1;
    const b = 2;

    const sum = a + b;

    if (sum === 4) {
      resolve("Success");
    } else {
      reject("Error");
    }
  })
    .then((value) => {
      console.log(value, "success");
    })
    .catch((error) => {
      console.log(error, "error");
    })
    .finally(() => {
      console.log("first finally");
    });
};

const calculateSum = async () => {
  const a = 1;
  const b = 2;

  const sum = a + b;

  if (sum === 3) {
    return "Success";
  } else {
    throw new Error("Error adding sum");
  }
};

const Contact = () => {
  const getValue = async () => {
    try {
      const value = await calculateSum();
      console.log(value);
    } catch (error) {
      console.log(error);
    } finally{
      console.log("FInally")
    }
  };

  useEffect(() => {
    getValue();
  }, []);

  return (
    <div>
      Contact
      <button onClick={promiseFunction}>CLick</button>
    </div>
  );
};

export default Contact;
