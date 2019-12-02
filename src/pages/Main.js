import React, { Component } from 'react';
import Slider from 'react-slick';
import { Radio } from 'antd';

import { Menu, Icon } from 'antd';

class TeamMember extends Component {
    render() {
        const { index, name, email, task, photo, ...props } = this.props;
        return (
            <div {...props}>
                <div className="cardFront">
                    <img src={`${photo}`}/>
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

class ScreenShot extends Component{
    render() {
        const { photo, ...props} = this.props;
        return (
            <div {...props}>
                <img src={`${photo}`}/>
            </div>
        );
    }
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
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
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const settings_team = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "0",
            slidesToShow: 3,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const settings_ss = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
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
            task: "Game Map designer，UI Designer",
            photo: "photo_mai.jpeg",
            index: 2
        };
        const info_team_3 = {
            className: "team_item",
            name: "BOYU ZHANG",
            email: "boyuz@usc.edu",
            task: "Music Analyst, UI Designer",
            photo: "photo_boyu.jpeg",
            index: 3
        };
        const info_team_4 = {
            className: "team_item",
            name: "ZHUNYUE  CHEN",
            email: "zhunyuec@usc.edu",
            task: "Music Analyst, UI Designer",
            photo: "photo_yue.jpeg",
            index: 4
        };
        const info_team_5 = {
            className: "team_item",
            name: "CHENGMING WAN",
            email: "wan879@usc.edu",
            task: "Scene Designer",
            photo: "photo_wan.jpeg",
            index: 5
        };
        const info_team_6 = {
            className: "team_item",
            name: "DUNXUAN LI",
            email: "dunxuanl@usc.edu",
            task: "UI Designer, Level Path Designer",
            photo: "photo_dun.jpeg",
            index: 6
        };
        const info_team_7 = {
            className: "team_item",
            name: "XUAN SHAO",
            email: "dunxuanl@usc.edu",
            task: "UI Designer, Level Path Designer",
            photo: "photo_shao.jpeg",
            index: 6
        };

        console.log(window.location.pathname.split('/'));
        return (
            <div>
                <Menu mode="horizontal" className="Main-header">
                    <Menu.Item>
                        <a className="logo" href={`/${window.location.pathname.split('/')[1]}`}>
                            <img src="USC-Games_CardOnWhite_Horiz.png"/>
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
                            <img src={`level1_bg.png`}/>
                        </div>
                        <div className="overall_item level2">
                            <img src={`level2_bg.png`}/>
                        </div>
                        <div className="overall_item level3">
                            <img src={`level3_bg.png`}/>
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
                            <img src={`instru_4.png`}/>
                        </div>
                        <div className="scene_item">
                            <img src={`instru_5.png`}/>
                        </div>
                        <div className="scene_item">
                            <img src={`instru_6.png`}/>
                        </div>
                        <div className="scene_item">
                            <img src={`instru_1.png`}/>
                        </div>
                        <div className="scene_item">
                            <img src={`instru_2.png`}/>
                        </div>
                        <div className="scene_item">
                            <img src={`instru_3.png`}/>
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
                            <iframe width="700" height="500" src="https://www.youtube.com/embed/fv7rl-zMsPU"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>):
                        this.state.vppVal === "poster" ?
                            (<img id="poster" src="poster.jpeg"/>):
                            (<div className= "screenshot"><Slider {...settings_ss}>
                                <ScreenShot className="ss" photo="ss1.png"/>
                                <ScreenShot className="ss" photo="ss2.png"/>
                                <ScreenShot className="ss" photo="ss3.png"/>
                                <ScreenShot className="ss" photo="ss_gameover.png"/>
                                <ScreenShot className="ss" photo="ss_reborn.png"/>
                                <ScreenShot className="ss" photo="ss_win.png"/>
                                <ScreenShot className="ss" photo="ss1_1.png"/>
                                <ScreenShot className="ss" photo="ss1_2.png"/>
                                <ScreenShot className="ss" photo="ss1_3.png"/>
                                <ScreenShot className="ss" photo="ss2_1.png"/>
                                <ScreenShot className="ss" photo="ss2_2.png"/>
                                <ScreenShot className="ss" photo="ss2_3.png"/>
                                <ScreenShot className="ss" photo="ss3_1.png"/>
                                <ScreenShot className="ss" photo="ss3_2.png"/>
                                <ScreenShot className="ss" photo="ss3_3.png"/>
                            </Slider></div>)
                    }
                </div>
                <div id="team">
                    <div className="background_info">
                        <h1>Team</h1>
                        <span>
                            Let's introduce our 7 members team!
                        </span>
                    </div>
                    <div className="team_bg"></div>
                    <div className="team_container">
                        <Slider {...settings_team}>
                            <TeamMember {...info_team_1}/>
                            <TeamMember {...info_team_2}/>
                            <TeamMember {...info_team_3}/>
                            <TeamMember {...info_team_4}/>
                            <TeamMember {...info_team_5}/>
                            <TeamMember {...info_team_6}/>
                            <TeamMember {...info_team_7}/>
                        </Slider>
                    </div>
                </div>
                <div id="contact">
                    <div className="contact_content">
                        <span>Light Chaser</span><br/>
                        <img src="USC-Games_CardOnWhite_Horiz.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
