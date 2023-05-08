import React from "react";

const App = () => {
  const [joke, setJoke] = React.useState("");
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);


  React.useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((json) => {
        setJoke(json.value);
        setIsDataLoaded(true);
      });
  }, []);
  
  if (!isDataLoaded) {
    return (
      <div>
        <h1> Please chill, data is still loading</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1> Chuck Norris Joke </h1>
      <p> {joke} </p>
    </div>  
  );
};

export default App;