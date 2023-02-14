import React from "react";
import { Link } from "react-router-dom";

import './home.scss'


function home(){

    return(
        <div class="wrapper">
        <div class="area"></div>
        <nav class="main-menu">
            <ul>
                <li>
                    <Link to='/'>
                        <i class="fa fa-comment fa-2x"></i>
                        <span class="nav-text">
                           Chat
                        </span>
                    </Link>
                  
                </li>
                <li class="has-subnav">
                    <Link>
                        <i class="fas fa-robot fa-2x"></i>
                        <span class="nav-text">
                            Standup
                        </span>
                    </Link>
                    
                </li>
                <li class="has-subnav">
                    <Link>
                    <i class="fas fa-poll fa-2x"></i>
                        <span class="nav-text">
                            Polling
                        </span>
                    </Link>
                    
                </li>
                <li class="has-subnav">
                    <Link>
                       <i class="fas fa-address-card fa-2x"></i>
                        <span class="nav-text">
                            Leave
                        </span>
                    </Link>
                   
                </li>
            </ul>

            <ul class="logout">
                <li>
                   <Link>
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </Link>
                </li>  
            </ul>
        </nav>
</div>
    )



}

export default home;