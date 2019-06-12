import React, { Component } from 'react';
import { list } from 'postcss';

import './Feed.css';

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
    render(){
        return(
            <section id="post-list">
                <article>
                    <header>
                        <div class="user-info">
                            <span>Luiz Ortega</span>
                            <span className="place">São Paulo</span>
                        </div>
                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3333/files/LOGO-transparentbackground.jpg" alt=""/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt=""/>
                            <img src={send} alt="" />
                        </div>

                        <p>Primeiro Post</p>
                        <span>$reactJs #InstaKlone</span>
                    </footer>
                </article>


                <article>
                    <header>
                        <div class="user-info">
                            <span>Luiz Ortega</span>
                            <span className="place">São Paulo</span>
                        </div>
                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3333/files/LOGO-transparentbackground.jpg" alt=""/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt=""/>
                            <img src={send} alt="" />
                        </div>

                        <p>Primeiro Post</p>
                        <span>$reactJs #InstaKlone</span>
                    </footer>
                </article>


                <article>
                    <header>
                        <div class="user-info">
                            <span>Luiz Ortega</span>
                            <span className="place">São Paulo</span>
                        </div>
                        <img src={more} alt="Mais" />
                    </header>
                    <img src="http://localhost:3333/files/LOGO-transparentbackground.jpg" alt=""/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt=""/>
                            <img src={send} alt="" />
                        </div>

                        <p>Primeiro Post</p>
                        <span>$reactJs #InstaKlone</span>
                    </footer>
                </article>
            </section>   
        )
    }
};

export default Feed;