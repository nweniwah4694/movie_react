import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import { PATH_POPULAR, PATH_TOP_RATED, PATH_UPCOMING } from './api';

import Header from './components/Header';
import Main from './components/Main';
import Discover from './components/Discover';
import SearchResults from './components/SearchResults';
import Movie from './components/Movie';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      user: null,
      loading: true,
      favorites: {},
      watchLater: {},
      ...this.defaulFilterstState
    };
  }

  defaulFilterstState = {
    filters: {
      rating: {
        min: 5,
        max: 10
      },
      runtime: {
        min: 45,
        max: 250
      },
      sort_by: {
        value: 'vote_average',
        label: 'Rating'
      },
      order: {
        value: 'desc',
        label: 'Descending'
      },
      year: new Date().getFullYear()
    }
  } 

  updateStateWithFilters = (filters) => this.setState({ filters })

  resetFilters = () => this.setState(this.defaultState)

  render() {
    return (
      <BrowserRouter>
        <div className="App">        
          <div className="App-sidebar-wrapper">
            <div className="bar">bar</div>
          </div>
          <div className="App-content-wrapper">
            <Header
              authenticated={this.state.authenticated}
              user={this.state.user} filters={this.state.filters}
              updateFilters={this.updateStateWithFilters}
              resetFilters={this.resetFilters}
            />
            <Route exact path="/"
              render={()=><Discover
                title="Discover"
                updateFilters={this.updateStateWithFilters}
                filters={this.state.filters}
                authenticated={this.state.authenticated}
                addToList={this.addToUserList}
                removeFromList={this.removeFromUserList}
                favorites={this.state.favorites}
                watchLater={this.state.watchLater} />}
             />
            <Route exact path="/popular"
              render={()=><Main
                title="Popular"
                section={PATH_POPULAR}
                authenticated={this.state.authenticated}
                addToList={this.addToUserList}
                removeFromList={this.removeFromUserList}
                favorites={this.state.favorites}
                watchLater={this.state.watchLater} />}
            />
            <Route exact path="/top-rated"
              render={()=><Main
                title="Top Rated"
                section={PATH_TOP_RATED}
                authenticated={this.state.authenticated}
                addToList={this.addToUserList}
                removeFromList={this.removeFromUserList}
                favorites={this.state.favorites}
                watchLater={this.state.watchLater}  />}
            />
            <Route exact path="/coming-soon"
              render={()=><Main
                title="Coming Soon"
                section={PATH_UPCOMING}
                authenticated={this.state.authenticated}
                addToList={this.addToUserList}
                removeFromList={this.removeFromUserList}
                favorites={this.state.favorites}
                watchLater={this.state.watchLater}  />}
            />
            <Route path="/search" component={SearchResults}/>
            <Route path="/movie/:id-:title"
              render={props => (
                <Movie {...props}
                  id={props.match.params.id}
                  authenticated={this.state.authenticated}
                  onFavoriteSelect={selectedMovie => this.addToUserList(selectedMovie)}
                  onFavoriteDeselect={selectedMovie => this.removeFromUserList(selectedMovie)}
                  favorites={this.state.favorites}
                  watchLater={this.state.watchLater} />)}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
