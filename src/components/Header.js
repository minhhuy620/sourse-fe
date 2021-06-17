import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                <div id="kt_header" className="header bg-white header-fixed">
                    <div className="container-fluid d-flex align-items-stretch justify-content-between">
                        <div className="d-flex align-items-stretch mr-2">
                            <h3 className="d-none text-dark d-lg-flex align-items-center mr-10 mb-0">KOD</h3>
                            <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                                <div id="kt_header_menu" className="header-menu header-menu-mobile header-menu-layout-default">
                                    <ul className="menu-nav">
                                        <li className="menu-item menu-item-active" aria-haspopup="true" >
                                            <Link to="/" className="menu-link" exact="true" >
                                                <span className="menu-text">Dashboard</span>
                                            </Link>
                                        </li>
                                        <li className="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" >
                                            <a href="!#" className="menu-link menu-toggle">
                                                <span className="menu-text">Map</span>
                                                <span className="menu-desc"></span>
                                                {/* <i className="menu-arrow"></i> */}
                                            </a>
                                            <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                                                <ul className="menu-subnav">
                                                    <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                        <a href="!#" className="menu-link menu-toggle">
                                                            <span className="svg-icon menu-icon">

                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                        <rect x="0" y="0" width="24" height="24" />
                                                                        <path d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z" fill="#000000" />
                                                                        <path d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z" fill="#000000" opacity="0.3" />
                                                                    </g>
                                                                </svg>

                                                            </span>
                                                            <span className="menu-text">Your Map</span>
                                                            {/* <i className="menu-arrow"></i> */}
                                                        </a>
                                                        <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                            <ul className="menu-subnav">
                                                                <li className="menu-item" >
                                                                    <Link to="/maps" className="menu-link" >
                                                                        <i className="menu-bullet menu-bullet-dot">
                                                                            <span></span>
                                                                        </i>
                                                                        <span className="menu-text">Your position</span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" >
                                            <a href="!#" className="menu-link menu-toggle">
                                                <span className="menu-text">Shedule</span>
                                                <span className="menu-desc"></span>
                                                <i className="menu-arrow"></i>
                                            </a>
                                            <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                                                <ul className="menu-subnav">
                                                    <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                        <a href="!#" className="menu-link menu-toggle">
                                                            <span className="svg-icon menu-icon">

                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                        <rect x="0" y="0" width="24" height="24" />
                                                                        <path d="M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 L21,8 C21,8.55228475 20.5522847,9 20,9 L4,9 C3.44771525,9 3,8.55228475 3,8 L3,7 C3,6.44771525 3.44771525,6 4,6 Z M5,11 L10,11 C10.5522847,11 11,11.4477153 11,12 L11,19 C11,19.5522847 10.5522847,20 10,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,12 C4,11.4477153 4.44771525,11 5,11 Z M14,11 L19,11 C19.5522847,11 20,11.4477153 20,12 L20,19 C20,19.5522847 19.5522847,20 19,20 L14,20 C13.4477153,20 13,19.5522847 13,19 L13,12 C13,11.4477153 13.4477153,11 14,11 Z" fill="#000000" />
                                                                        <path d="M14.4452998,2.16794971 C14.9048285,1.86159725 15.5256978,1.98577112 15.8320503,2.4452998 C16.1384028,2.90482849 16.0142289,3.52569784 15.5547002,3.83205029 L12,6.20185043 L8.4452998,3.83205029 C7.98577112,3.52569784 7.86159725,2.90482849 8.16794971,2.4452998 C8.47430216,1.98577112 9.09517151,1.86159725 9.5547002,2.16794971 L12,3.79814957 L14.4452998,2.16794971 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                    </g>
                                                                </svg>

                                                            </span>
                                                            <span className="menu-text">Vé Tàu</span>
                                                            <i className="menu-arrow"></i>
                                                        </a>
                                                        <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                            <ul className="menu-subnav">
                                                                <li className="menu-item" >
                                                                    <Link to="/ve-tau" className="menu-link">
                                                                        <i className="menu-bullet menu-bullet-dot">
                                                                            <span></span>
                                                                        </i>
                                                                        <span className="menu-text">Vé Tàu Đã Mua</span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                        <a href="!#" className="menu-link menu-toggle">
                                                            <span className="svg-icon menu-icon">

                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                        <rect x="0" y="0" width="24" height="24" />
                                                                        <path d="M16.3740377,19.9389434 L22.2226499,11.1660251 C22.4524142,10.8213786 22.3592838,10.3557266 22.0146373,10.1259623 C21.8914367,10.0438285 21.7466809,10 21.5986122,10 L17,10 L17,4.47708173 C17,4.06286817 16.6642136,3.72708173 16.25,3.72708173 C15.9992351,3.72708173 15.7650616,3.85240758 15.6259623,4.06105658 L9.7773501,12.8339749 C9.54758575,13.1786214 9.64071616,13.6442734 9.98536267,13.8740377 C10.1085633,13.9561715 10.2533191,14 10.4013878,14 L15,14 L15,19.5229183 C15,19.9371318 15.3357864,20.2729183 15.75,20.2729183 C16.0007649,20.2729183 16.2349384,20.1475924 16.3740377,19.9389434 Z" fill="#000000" />
                                                                        <path d="M4.5,5 L9.5,5 C10.3284271,5 11,5.67157288 11,6.5 C11,7.32842712 10.3284271,8 9.5,8 L4.5,8 C3.67157288,8 3,7.32842712 3,6.5 C3,5.67157288 3.67157288,5 4.5,5 Z M4.5,17 L9.5,17 C10.3284271,17 11,17.6715729 11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L4.5,20 C3.67157288,20 3,19.3284271 3,18.5 C3,17.6715729 3.67157288,17 4.5,17 Z M2.5,11 L6.5,11 C7.32842712,11 8,11.6715729 8,12.5 C8,13.3284271 7.32842712,14 6.5,14 L2.5,14 C1.67157288,14 1,13.3284271 1,12.5 C1,11.6715729 1.67157288,11 2.5,11 Z" fill="#000000" opacity="0.3" />
                                                                    </g>
                                                                </svg>

                                                            </span>
                                                            <span className="menu-text">Todo</span>
                                                            <i className="menu-arrow"></i>
                                                        </a>
                                                        <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                            <ul className="menu-subnav">
                                                                <li className="menu-item" >
                                                                    <a href="custom/apps/todo/tasks.html" className="menu-link">
                                                                        <i className="menu-bullet menu-bullet-dot">
                                                                            <span></span>
                                                                        </i>
                                                                        <span className="menu-text">Tasks</span>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item" >
                                                                    <a href="custom/apps/todo/docs.html" className="menu-link">
                                                                        <i className="menu-bullet menu-bullet-dot">
                                                                            <span></span>
                                                                        </i>
                                                                        <span className="menu-text">Docs</span>
                                                                    </a>
                                                                </li>
                                                                <li className="menu-item" >
                                                                    <a href="custom/apps/todo/files.html" className="menu-link">
                                                                        <i className="menu-bullet menu-bullet-dot">
                                                                            <span></span>
                                                                        </i>
                                                                        <span className="menu-text">Files</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>
                                        <li className="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" >
                                            <a href="!#" className="menu-link menu-toggle">
                                                <span className="menu-text">Đồ ăn</span>
                                                <span className="menu-desc"></span>
                                                <i className="menu-arrow"></i>
                                            </a>
                                            <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                                                <ul className="menu-subnav">
                                                    <li className="menu-item menu-item-submenu" data-menu-toggle="hover" >
                                                        <a href="!#" className="menu-link menu-toggle">
                                                            <span className="svg-icon menu-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                        <rect x="0" y="0" width="24" height="24" />
                                                                        <path d="M4,6 L20,6 C20.5522847,6 21,6.44771525 21,7 L21,8 C21,8.55228475 20.5522847,9 20,9 L4,9 C3.44771525,9 3,8.55228475 3,8 L3,7 C3,6.44771525 3.44771525,6 4,6 Z M5,11 L10,11 C10.5522847,11 11,11.4477153 11,12 L11,19 C11,19.5522847 10.5522847,20 10,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,12 C4,11.4477153 4.44771525,11 5,11 Z M14,11 L19,11 C19.5522847,11 20,11.4477153 20,12 L20,19 C20,19.5522847 19.5522847,20 19,20 L14,20 C13.4477153,20 13,19.5522847 13,19 L13,12 C13,11.4477153 13.4477153,11 14,11 Z" fill="#000000" />
                                                                        <path d="M14.4452998,2.16794971 C14.9048285,1.86159725 15.5256978,1.98577112 15.8320503,2.4452998 C16.1384028,2.90482849 16.0142289,3.52569784 15.5547002,3.83205029 L12,6.20185043 L8.4452998,3.83205029 C7.98577112,3.52569784 7.86159725,2.90482849 8.16794971,2.4452998 C8.47430216,1.98577112 9.09517151,1.86159725 9.5547002,2.16794971 L12,3.79814957 L14.4452998,2.16794971 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                                    </g>
                                                                </svg>

                                                            </span>
                                                            <span className="menu-text">Món ngon Đà Nẵng</span>
                                                            <i className="menu-arrow"></i>
                                                        </a>
                                                        <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                                                            <ul className="menu-subnav">
                                                                <li className="menu-item" >
                                                                    <Link to="/foods" className="menu-link">
                                                                        <i className="menu-bullet menu-bullet-dot">
                                                                            <span></span>
                                                                        </i>
                                                                        <span className="menu-text">Quán Gà Nguyên Con</span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>


                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="topbar">
                            <div className="dropdown">
                                <div className="topbar-item mr-3" data-="dropdown" data-offset="10px,0px">
                                    <div className="btn btn-icon btn-clean btn-dropdown btn-lg pulse pulse-primary">
                                        <span className="svg-icon svg-icon-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24" />
                                                    <path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" fill="#000000" opacity="0.3" />
                                                    <path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" fill="#000000" />
                                                </g>
                                            </svg>

                                        </span>
                                        <span className="pulse-ring"></span>
                                    </div>
                                </div>
                                <div className="dropdown-menu p-0 m-0-menu-right-menu-anim-up-menu-lg">
                                    <form>
                                        <div className="d-flex flex-column pt-12 bgi-size-cover bgi-no-repeat rounded-top" style={{ "backgroundImage": "url(assets/media/misc/bg-1.jpg)" }}>
                                            <h4 className="d-flex flex-center rounded-top">
                                                <span className="text-white">User</span>
                                                <span className="btn btn-text btn-success btn-sm font-weight-bold btn-font-md ml-2">23 new</span>
                                            </h4>
                                            <ul className="nav nav-bold nav- nav--line nav--line-3x nav--line-transparent-white nav--line-active-border-success mt-3 px-8" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active show" data-="tab" href="#topbar_notifications_notifications">Alerts</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-="tab" href="#topbar_notifications_events">Events</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" data-="tab" href="#topbar_notifications_logs">Logs</a>
                                                </li>
                                            </ul>

                                        </div>


                                        <div className="tab-content">

                                            <div className="tab-pane active show p-8" id="topbar_notifications_notifications" >
                                                <div className=" pr-7 mr-n7" data-="true" data-height="300" data-mobile-height="200">

                                                    <div className="d-flex align-items-center mb-6">

                                                        <div className="symbol-40-light-primary mr-5">
                                                            <span className="symbol-label">
                                                                <span className="svg-icon svg-icon-lg svg-icon-primary">

                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000" />
                                                                            <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width="3" height="18" rx="1" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                            </span>
                                                        </div>


                                                        <div className="d-flex flex-column font-weight-bold">
                                                            <a href="!#" className="text-dark text-hover-primary mb-1 font-size-lg">Cool App</a>
                                                            <span className="text-muted">Marketing campaign planning</span>
                                                        </div>

                                                    </div>


                                                    <div className="d-flex align-items-center mb-6">

                                                        <div className="symbol-40-light-success mr-5">
                                                            <span className="symbol-label">
                                                                <span className="svg-icon svg-icon-lg svg-icon-success">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                            <rect x="0" y="0" width="24" height="24" />
                                                                            <path d="M5,5 L5,15 C5,15.5948613 5.25970314,16.1290656 5.6719139,16.4954176 C5.71978107,16.5379595 5.76682388,16.5788906 5.81365532,16.6178662 C5.82524933,16.6294602 15,7.45470952 15,7.45470952 C15,6.9962515 15,6.17801499 15,5 L5,5 Z M5,3 L15,3 C16.1045695,3 17,3.8954305 17,5 L17,15 C17,17.209139 15.209139,19 13,19 L7,19 C4.790861,19 3,17.209139 3,15 L3,5 C3,3.8954305 3.8954305,3 5,3 Z" fill="#000000" fillRule="nonzero" transform="translate(10.000000, 11.000000) rotate(-315.000000) translate(-10.000000, -11.000000)" />
                                                                            <path d="M20,22 C21.6568542,22 23,20.6568542 23,19 C23,17.8954305 22,16.2287638 20,14 C18,16.2287638 17,17.8954305 17,19 C17,20.6568542 18.3431458,22 20,22 Z" fill="#000000" opacity="0.3" />
                                                                        </g>
                                                                    </svg>

                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div className="d-flex flex-column font-weight-bold">
                                                            <a href="!#" className="text-dark text-hover-primary mb-1 font-size-lg">Bruk Fitness</a>
                                                            <span className="text-muted">Web Design &amp; Development</span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="d-flex flex-center pt-7">
                                                    <a href="!#" className="btn btn-light-primary font-weight-bold text-center">See All</a>
                                                </div>
                                            </div>


                                            <div className="tab-pane" id="topbar_notifications_events">

                                                <div className="navi navi-hover  my-4" data-="true" data-height="300" data-mobile-height="200">

                                                    <a href="!#" className="navi-item">
                                                        <div className="navi-link">
                                                            <div className="navi-icon mr-2">
                                                                <i className="flaticon2-line-chart text-success"></i>
                                                            </div>
                                                            <div className="navi-text">
                                                                <div className="font-weight-bold">New report has been received</div>
                                                                <div className="text-muted">23 hrs ago</div>
                                                            </div>
                                                        </div>
                                                    </a>

                                                </div>
                                            </div>
                                            <div className="tab-pane" id="topbar_notifications_logs">
                                                <div className="d-flex flex-center text-center text-muted min-h-200px">All caught up!
                                                    <br />No new.</div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="dropdown">
                                <div className="topbar-item mr-3" data-="dropdown" data-offset="10px,0px">
                                    <div className="btn btn-icon btn-clean btn-dropdown btn-lg">
                                        <span className="svg-icon svg-icon-xl">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24" />
                                                    <rect fill="#000000" opacity="0.3" x="13" y="4" width="3" height="16" rx="1.5" />
                                                    <rect fill="#000000" x="8" y="9" width="3" height="11" rx="1.5" />
                                                    <rect fill="#000000" x="18" y="11" width="3" height="9" rx="1.5" />
                                                    <rect fill="#000000" x="3" y="13" width="3" height="7" rx="1.5" />
                                                </g>
                                            </svg>

                                        </span>
                                    </div>
                                </div>
                                <div className="dropdown-menu p-0 m-0-menu-right-menu-anim-up-menu-lg">
                                    <div className="d-flex flex-column flex-center py-10 bgi-size-cover bgi-no-repeat rounded-top" style={{ "backgroundImage": "url(assets/media/misc/bg-1.jpg)" }}>
                                        <h4 className="text-white font-weight-bold">Quick Actions</h4>
                                        <span className="btn btn-success btn-sm font-weight-bold font-size-sm mt-2">23 tasks pending</span>
                                    </div>
                                    <div className="row row-paddingless">
                                        <div className="col-6">
                                            <a href="!#" className="d-block py-10 px-5 text-center bg-hover-light border-right border-bottom">
                                                <span className="svg-icon svg-icon-3x svg-icon-success">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24" />
                                                            <path d="M4.3618034,10.2763932 L4.8618034,9.2763932 C4.94649941,9.10700119 5.11963097,9 5.30901699,9 L15.190983,9 C15.4671254,9 15.690983,9.22385763 15.690983,9.5 C15.690983,9.57762255 15.6729105,9.65417908 15.6381966,9.7236068 L15.1381966,10.7236068 C15.0535006,10.8929988 14.880369,11 14.690983,11 L4.80901699,11 C4.53287462,11 4.30901699,10.7761424 4.30901699,10.5 C4.30901699,10.4223775 4.32708954,10.3458209 4.3618034,10.2763932 Z M14.6381966,13.7236068 L14.1381966,14.7236068 C14.0535006,14.8929988 13.880369,15 13.690983,15 L4.80901699,15 C4.53287462,15 4.30901699,14.7761424 4.30901699,14.5 C4.30901699,14.4223775 4.32708954,14.3458209 4.3618034,14.2763932 L4.8618034,13.2763932 C4.94649941,13.1070012 5.11963097,13 5.30901699,13 L14.190983,13 C14.4671254,13 14.690983,13.2238576 14.690983,13.5 C14.690983,13.5776225 14.6729105,13.6541791 14.6381966,13.7236068 Z" fill="#000000" opacity="0.3" />
                                                            <path d="M17.369,7.618 C16.976998,7.08599734 16.4660031,6.69750122 15.836,6.4525 C15.2059968,6.20749878 14.590003,6.085 13.988,6.085 C13.2179962,6.085 12.5180032,6.2249986 11.888,6.505 C11.2579969,6.7850014 10.7155023,7.16999755 10.2605,7.66 C9.80549773,8.15000245 9.45550123,8.72399671 9.2105,9.382 C8.96549878,10.0400033 8.843,10.7539961 8.843,11.524 C8.843,12.3360041 8.96199881,13.0779966 9.2,13.75 C9.43800119,14.4220034 9.7774978,14.9994976 10.2185,15.4825 C10.6595022,15.9655024 11.1879969,16.3399987 11.804,16.606 C12.4200031,16.8720013 13.1129962,17.005 13.883,17.005 C14.681004,17.005 15.3879969,16.8475016 16.004,16.5325 C16.6200031,16.2174984 17.1169981,15.8010026 17.495,15.283 L19.616,16.774 C18.9579967,17.6000041 18.1530048,18.2404977 17.201,18.6955 C16.2489952,19.1505023 15.1360064,19.378 13.862,19.378 C12.6999942,19.378 11.6325049,19.1855019 10.6595,18.8005 C9.68649514,18.4154981 8.8500035,17.8765035 8.15,17.1835 C7.4499965,16.4904965 6.90400196,15.6645048 6.512,14.7055 C6.11999804,13.7464952 5.924,12.6860058 5.924,11.524 C5.924,10.333994 6.13049794,9.25950479 6.5435,8.3005 C6.95650207,7.34149521 7.5234964,6.52600336 8.2445,5.854 C8.96550361,5.18199664 9.8159951,4.66400182 10.796,4.3 C11.7760049,3.93599818 12.8399943,3.754 13.988,3.754 C14.4640024,3.754 14.9609974,3.79949954 15.479,3.8905 C15.9970026,3.98150045 16.4939976,4.12149906 16.97,4.3105 C17.4460024,4.49950095 17.8939979,4.7339986 18.314,5.014 C18.7340021,5.2940014 19.0909985,5.62999804 19.385,6.022 L17.369,7.618 Z" fill="#000000" />
                                                        </g>
                                                    </svg>

                                                </span>
                                                <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">Accounting</span>
                                                <span className="d-block text-dark-50 font-size-lg">eCommerce</span>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="!#" className="d-block py-10 px-5 text-center bg-hover-light border-bottom">
                                                <span className="svg-icon svg-icon-3x svg-icon-success">
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24" />
                                                            <path d="M14.8571499,13 C14.9499122,12.7223297 15,12.4263059 15,12.1190476 L15,6.88095238 C15,5.28984632 13.6568542,4 12,4 L11.7272727,4 C10.2210416,4 9,5.17258756 9,6.61904762 L10.0909091,6.61904762 C10.0909091,5.75117158 10.823534,5.04761905 11.7272727,5.04761905 L12,5.04761905 C13.0543618,5.04761905 13.9090909,5.86843034 13.9090909,6.88095238 L13.9090909,12.1190476 C13.9090909,12.4383379 13.8240964,12.7385644 13.6746497,13 L10.3253503,13 C10.1759036,12.7385644 10.0909091,12.4383379 10.0909091,12.1190476 L10.0909091,9.5 C10.0909091,9.06606198 10.4572216,8.71428571 10.9090909,8.71428571 C11.3609602,8.71428571 11.7272727,9.06606198 11.7272727,9.5 L11.7272727,11.3333333 L12.8181818,11.3333333 L12.8181818,9.5 C12.8181818,8.48747796 11.9634527,7.66666667 10.9090909,7.66666667 C9.85472911,7.66666667 9,8.48747796 9,9.5 L9,12.1190476 C9,12.4263059 9.0500878,12.7223297 9.14285008,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L14.8571499,13 Z" fill="#000000" opacity="0.3" />
                                                            <path d="M9,10.3333333 L9,12.1190476 C9,13.7101537 10.3431458,15 12,15 C13.6568542,15 15,13.7101537 15,12.1190476 L15,10.3333333 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9,10.3333333 Z M10.0909091,11.1212121 L12,12.5 L13.9090909,11.1212121 L13.9090909,12.1190476 C13.9090909,13.1315697 13.0543618,13.952381 12,13.952381 C10.9456382,13.952381 10.0909091,13.1315697 10.0909091,12.1190476 L10.0909091,11.1212121 Z" fill="#000000" />
                                                        </g>
                                                    </svg>

                                                </span>
                                                <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">Administration</span>
                                                <span className="d-block text-dark-50 font-size-lg">Console</span>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="!#" className="d-block py-10 px-5 text-center bg-hover-light border-right">
                                                <span className="svg-icon svg-icon-3x svg-icon-success">

                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                            <rect x="0" y="0" width="24" height="24" />
                                                            <path d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z" fill="#000000" />
                                                            <path d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z" fill="#000000" opacity="0.3" />
                                                        </g>
                                                    </svg>

                                                </span>
                                                <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">Projects</span>
                                                <span className="d-block text-dark-50 font-size-lg">Pending Tasks</span>
                                            </a>
                                        </div>

                                        <div className="col-6">
                                            <a href="!#" className="d-block py-10 px-5 text-center bg-hover-light">
                                                <span className="svg-icon svg-icon-3x svg-icon-success">

                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                            <polygon points="0 0 24 0 24 24 0 24" />
                                                            <path d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                                            <path d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                                                        </g>
                                                    </svg>

                                                </span>
                                                <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">Customers</span>
                                                <span className="d-block text-dark-50 font-size-lg">Latest cases</span>
                                            </a>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="topbar-item mr-5">
                                <div className="btn btn-icon btn-clean btn-lg" data-="modal" data-target="#kt_chat_modal">
                                    <span className="svg-icon svg-icon-xl">

                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect x="0" y="0" width="24" height="24" />
                                                <path d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill="#000000" />
                                                <path d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill="#000000" opacity="0.3" />
                                            </g>
                                        </svg>

                                    </span>
                                </div>
                            </div>
                            <div className="topbar-item">
                                <div className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
                                    <div className="d-flex flex-column text-right pr-3">
                                        <span className="text-muted font-weight-bold font-size-base d-none d-md-inline">Huy</span>
                                    </div>
                                    <span className="symbol symbol-35 symbol-light-primary">
                                        <span className="symbol-label font-size-h5 font-weight-bold">S</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Header;
