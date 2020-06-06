import React, { Fragment } from 'react';
import { TaskList } from './TaskList';

const Home = () => {
  return (
      <Fragment>
          <div className="App">
              <div className="container mx-auto">
                  <TaskList />
              </div>
          </div>
      </Fragment>
  )
}

export default Home