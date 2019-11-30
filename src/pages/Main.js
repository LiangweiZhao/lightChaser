import React, { Component } from 'react';
import Slider from 'react-slick';
import { Radio } from 'antd';
import Team from './Team';
import Home from './Home';

import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class TeamMember extends Component {
    render() {
        const { index, name, email, task, photo, ...props } = this.props;
        return (
            <div {...props}>
                <div className="cardFront">
                    <img src={`/${photo}`}/>
                </div>
                <div className="cardBack">
                    <h1>{name}</h1>
                    <h2>{email}</h2>
                    <h3>{task}</h3>
                </div>
            </div>
        );
    }
}

class Main extends React.Component{
    state = {
        vppVal: "video"
    };
    handleVppClick = (e) => {
        this.setState({
            vppVal: e.target.value
        });
    };
    render() {
        const settings_main = {
            fade: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const settings_scene = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        const settings_team = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0",
            slidesToShow: 3,
            speed: 500
        };

        const info_team_1 = {
            className: "team_item",
            name: "LIANGWEI ZHAO",
            email: "liangwez@usc.edu",
            task: "Front-End Designer, Level Switch Designer",
            photo: "photo_wei.jpg",
            index: 1
        };
        const info_team_2 = {
            className: "team_item",
            name: "MAI LI",
            email: "maili@usc.edu",
            task: "Game Map designer，UI designer",
            photo: "photo_mai.jpeg",
            index: 2
        };
        const info_team_3 = {
            className: "team_item",
            name: "BOYU ZHANG",
            email: "boyuz@usc.edu",
            task: "background music analysis",
            photo: "photo_boyu.jpeg",
            index: 3
        };

        return (
            <div>
                <Menu mode="horizontal" className="Main-header">
                    <Menu.Item>
                        <a className="logo" href="/">
                            <img src="/USC-Games_CardOnWhite_Horiz.png"/>
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="#levels"><Icon type="home"/>Home</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="#scene"><Icon type="solution"/>Introduction</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="#vpp"><Icon type="video-camera"/>Video</a>
                    </Menu.Item>
                    <Menu.Item>
                        <a href="#team"><Icon type="team"/>Team</a>
                    </Menu.Item>
                </Menu>
                <div className="font_main">
                    <h1>Rushing Light</h1>
                </div>
                <div id="levels">
                    <Slider {...settings_main}>
                        <div className="overall_item level1">
                            <img src={`/level1_bg.png`}/>
                        </div>
                        <div className="overall_item level2">
                            <img src={`/level2_bg.png`}/>
                        </div>
                        <div className="overall_item level3">
                            <img src={`/level3_bg.png`}/>
                        </div>
                    </Slider>
                </div>
                <div id="scene">
                    <div className="background_info">
                        <h1>Design Purpose</h1>
                        <span>
                            We want to design a small but elegant game, which also includes music. Every one can play it easily!
                        </span>
                    </div>
                    <div className="scene_bg"></div>
                    <Slider {...settings_scene} className="scene_items">
                        <div className="scene_item">
                            <img src={`/instru_1.png`}/>
                        </div>
                        <div className="scene_item">
                            <img src={`/instru_1.png`}/>
                        </div>
                        <div className="scene_item">
                            <img src={`/instru_1.png`}/>
                        </div>
                        <div className="scene_item">
                            <img src={`/instru_2.png`}/>
                        </div>
                        <div className="scene_item">
                            <img src={`/instru_2.png`}/>
                        </div>
                        <div className="scene_item">
                            <img src={`/instru_2.png`}/>
                        </div>
                    </Slider>
                </div>
                <div id="vpp">
                    <div className="background_info">
                        <h1>Poster, Video & Screenshots</h1>
                        <span>
                            This part contains our poster, video & the screenshots of our game.
                        </span>
                    </div>
                    <div className="vpp_bg"></div>
                    <Radio.Group value={this.state.vppVal} className="vpp_controller" onChange={this.handleVppClick}>
                        <Radio.Button value="poster">Poster</Radio.Button>
                        <Radio.Button value="video">Video</Radio.Button>
                        <Radio.Button value="screenshot">Screenshot</Radio.Button>
                    </Radio.Group>
                    <br/>
                    {this.state.vppVal === "video" ?
                        (<div className="player">
                            <video width="1000" height="400" controls>
                                <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                            </video>
                        </div>):
                        this.state.vppVal === "poster" ?
                            (<img id="poster" src="/poster.jpeg"/>):
                            (<div className= "screenshot"><Slider {...settings_team}>
                                <h1>1</h1>
                                <h1>2</h1>
                                <h1>3</h1>
                                <h1>4</h1>
                            </Slider></div>)
                    }
                </div>
                <div id="team">
                    <div className="background_info">
                        <h1>Team</h1>
                        <span>
                            Let's introduce our team!
                        </span>
                    </div>
                    <div className="team_bg"></div>
                    <div className="team_container">
                        <Slider {...settings_team}>
                            <TeamMember {...info_team_1}/>
                            <TeamMember {...info_team_2}/>
                            <TeamMember {...info_team_3}/>
                            <TeamMember index={4} className="team_item"/>
                            <TeamMember index={5} className="team_item"/>
                            <TeamMember index={6} className="team_item"/>
                            <TeamMember index={7} className="team_item"/>
                        </Slider>
                    </div>
                </div>
                <div id="contact">
                    <div className="contact_content">
                        <span>Light Chaser</span><br/>
                        <img src="../USC-Games_CardOnWhite_Horiz.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
