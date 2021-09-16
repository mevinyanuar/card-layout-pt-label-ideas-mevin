import React from "react";
import building from './../../assets/building.jpg'
import buildingView from './../../assets/building2.jpg'
import thermalis from './../../assets/thermalis.jpg'
import trenpics from './../../assets/trenpic.jpg'
import * as FaIcons from 'react-icons/fa'
import './Home.css'

const TopSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <img className="card-img-top" src={thermalis} alt="thermalis" />
            <div className="card-body">
              <p className="card-text">
                Thermal CCTV: Teknologi pendukung protokol kesehatan di era New
                Normal
              </p>
              <div className="list-underline"></div>
              <div className="card-bottom" style={{marginTop: '5px'}} >
                <p>
                  lintasarta <span className="vertical">|</span> June 22, 2020
                </p>
                <span>
                  <FaIcons.FaRegEye /> 524
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img className="card-img-top" src={building} alt="building" />
            <div className="card-body">
              <p className="card-text">
                4 Teknologi Digital yang dapat Diadopsi Industri Perbankan
              </p>
              <div className="list-underline"></div>
              <div className="card-bottom" >
                <p>
                  lintasarta <span className="vertical">|</span> March 30, 2020
                </p>
                <span>
                  <FaIcons.FaRegEye /> 590
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img className="card-img-top" src={buildingView} alt="buildingview" />
            <div className="card-body">
              <p className="card-text">
                4 Manfaat Smart City bagi Masyarakat dan Pemerintah
              </p>
              <div className="list-underline"></div>
              <div className="card-bottom">
                <p>
                  lintasarta <span className="vertical">|</span> March 18, 2020
                </p>
                <span>
                  <FaIcons.FaRegEye /> 3053
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img className="card-img-top" src={trenpics} alt="trenpics" />
            <div className="card-body">
              <p className="card-text">
                Seperti Apa Tren Data Center pada 2020?
              </p>
              <div className="list-underline"></div>
              <div className="card-bottom" >
                <p>
                  lintasarta <span className="vertical">|</span> March 09, 2020
                </p>
                <span>
                  <FaIcons.FaRegEye /> 472
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
