import React from "react";

const Rainbow = WrappedComponent => {
  const colors = ["red", "blue", "orange", "green", "yellow"];

  const randomColor = colors[Math.floor(Math.random() * 4)];

  const className = randomColor + "-text";

  //If the WrappedComponent was passed props then you can access them as such
  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
