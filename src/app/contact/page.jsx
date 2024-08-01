"use client";

import React from "react";

const Contact = () => {
  const promiseFunction = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const a = 1;
        const b = 2;

        const sum = a + b;

        if (sum === 3) {
          resolve("Success");
        } else {
          reject("Error");
        }
      }, 2000);
    })
      .then((value) => {
        console.log(value, "success");
      })
      .catch((error) => {
        console.log(error, "error");
      });

      console.log(promise)
  };

  promiseFunction();

  return <div>Contact</div>;
};

export default Contact;
