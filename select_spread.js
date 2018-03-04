import React from 'react';
import ReactDOM from 'react-dom';



const Button = props => {
  const  kind = props, other  = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
