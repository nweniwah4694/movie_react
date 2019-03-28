import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar';
import { NavLink } from 'react-router-dom';
import './index.css';

class Header extends Component {

  render () {
  	// const currentPath = window.location.pathname;
    return (
      	<div className="App-header">
	        <div className="App-title">All Movies</div>
	        <SearchBar />      
	       	<div className="App-sidebar">
		        <ul className="sidebar-menu">	
		          <li className="sidebar-menu__item">
		            <NavLink exact={true} to="/" activeClassName="is-active">
		              <title>Discover</title>Discover
		            </NavLink>
		          </li>	         
		          <li className="sidebar-menu__item">
		            <NavLink exact={true} to="/popular" activeClassName="is-active">
		              <title>Popular</title>Popular
		            </NavLink>
		          </li>
		          <li className="sidebar-menu__item">
		            <NavLink exact={true} to="/top-rated" activeClassName="is-active">
		              <title>Top Rated</title>Top Rated
		            </NavLink>
		          </li>
		          <li className="sidebar-menu__item sidebar-menu__item--coming-soon">
		            <NavLink exact={true} to="/coming-soon" activeClassName="is-active">
		              <title>Upcoming</title>Upcoming
		            </NavLink>
		          </li>		         
		        </ul>		        
		    </div>
	   	</div>
    );
  }
}

export default Header;
