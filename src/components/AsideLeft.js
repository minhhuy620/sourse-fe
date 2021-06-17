import React, { Component } from 'react';

class AsideLeft extends Component {
    render() {
        return (
            <div className="aside aside-left d-flex flex-column" id="kt_aside">
                <div className="aside-brand d-flex flex-column align-items-center flex-column-auto py-4 py-lg-8">
                    <a href="./index.html">
                        <img alt="Logo" src="./assets/media/logos/logo-letter-9.png" className="max-h-30px" />
                    </a>
                </div>
                <div className="aside-nav d-flex flex-column align-items-center flex-column-fluid pt-7">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-5" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="Latest Projects">
                            <a href="!#" className="nav-link btn btn-icon btn-clean btn-icon-white btn-lg active">
                                <i className="flaticon2-protection icon-lg"></i>
                            </a>
                        </li>
                        <li className="nav-item mb-5" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="Metronic Features">
                            <a href="!#" className="nav-link btn btn-icon btn-icon-white btn-lg" data-toggle="tab" data-target="#kt_aside_tab_2" role="tab">
                                <i className="flaticon2-list-3 icon-lg"></i>
                            </a>
                        </li>
                        <li className="nav-item mb-5" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="Latest Reports">
                            <a href="!#" className="nav-link btn btn-icon btn-icon-white btn-lg" data-toggle="tab" data-target="#kt_aside_tab_3" role="tab">
                                <i className="flaticon2-calendar-6 icon-lg"></i>
                            </a>
                        </li>
                        <li className="nav-item mb-5" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="Project Management">
                            <a href="!#" className="nav-link btn btn-icon btn-icon-white btn-lg" data-toggle="tab" data-target="#kt_aside_tab_4" role="tab">
                                <i className="flaticon2-hourglass-1 icon-lg"></i>
                            </a>
                        </li>
                        <li className="nav-item mb-5" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="User Management">
                            <a href="!#" className="nnav-link btn btn-icon btn-icon-white btn-lg" data-toggle="tab" data-target="#kt_aside_tab_5" role="tab">
                                <i className="flaticon2-analytics-2 icon-lg"></i>
                            </a>
                        </li>
                        <li className="nav-item mb-5" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="Finance &amp; Accounting">
                            <a href="!#" className="nav-link btn btn-icon btn-icon-white btn-hover-text-white btn-lg" data-toggle="tab" data-target="#kt_aside_tab_6" role="tab">
                                <i className="flaticon2-medical-records-1 icon-lg"></i>
                            </a>
                        </li>
                        <li className="nav-item mb-5" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="User Management">
                            <a href="!#" className="nav-link btn btn-icon btn-icon-white btn-lg" data-toggle="tab" data-target="#kt_aside_tab_5" role="tab">
                                <i className="flaticon2-gear icon-lg"></i>
                            </a>
                        </li>
                        <li className="nav-item mb-5" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="Finance &amp; Accounting">
                            <a href="!#" className="nav-link btn btn-icon btn-icon-white btn-lg" data-toggle="tab" data-target="#kt_aside_tab_6" role="tab">
                                <i className="flaticon2-warning icon-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="aside-footer d-flex flex-column align-items-center flex-column-auto py-8">
                    <a href="!#" className="btn btn-icon btn-clean btn-lg mb-1" id="kt_quick_panel_toggle" data-toggle="tooltip" data-placement="right" data-container="body" data-boundary="window" title="Quick Panel">
                        <span className="svg-icon svg-icon-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect x="0" y="0" width="24" height="24" />
                                    <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
                                    <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
                                </g>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}
export default AsideLeft