import React from 'react';

const MeetupContext = React.createContext();

const initialState = {
  title: 'React Online Meetup',
  date: Date()
};

const App = () => (
  <MeetupContext.Provider value={initialState}>
    <MeetupContext.Consumer>
      {props => (
        <div>
          <h1>{props.title}</h1>
          <span>{props.date}</span>
        </div>
      )}
    </MeetupContext.Consumer>
  </MeetupContext.Provider>
);

export default App;