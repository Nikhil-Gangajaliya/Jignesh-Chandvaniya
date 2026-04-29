import React from 'react';
import "./Components.css";
import surveyIcon from "../assets/1.png"; // ADD YOUR IMAGES
import totalStationIcon from "../assets/2.png";
import gpsIcon from "../assets/3.png";
import sheetIcon from "../assets/4.png";
import plotIcon from "../assets/5.png";

function Services() {
  return (
    <div className='services'>
      <div className="container">
        <h2>સેવાઓ</h2>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-left">
              <img src={surveyIcon} alt="Digital Survey" />
            </div>
            <div className="service-right">
              <h3>ડિજિટલ જમીન માપણી</h3>
              <p>AutoCAD દ્વારા સચોટ ડિજિટલ નકશા તૈયાર કરવામાં આવે છે.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-left">
              <img src={totalStationIcon} alt="Total Station" />
            </div>
            <div className="service-right">
              <h3>ટોટલ સ્ટેશન સર્વે</h3>
              <p>ઉચ્ચ ચોકસાઈ સાથે જમીનની માપણી માટે ઉપયોગી સેવા.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-left">
              <img src={gpsIcon} alt="GPS" />
            </div>
            <div className="service-right">
              <h3>GPS સ્થાન નિર્ધારણ</h3>
              <p>જમીનની ચોક્કસ સીમા અને લોકેશન નિર્ધારિત કરવામાં આવે છે.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-left">
              <img src={sheetIcon} alt="Sheets" />
            </div>
            <div className="service-right">
              <h3>કમ્પ્યુટરાઇઝ્ડ શીટ્સ</h3>
              <p>જમીન માહિતી ડિજિટલ રીતે સંગ્રહિત અને પ્રસ્તુત કરવામાં આવે છે.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-left">
              <img src={plotIcon} alt="Plot Layout" />
            </div>
            <div className="service-right">
              <h3>પ્લોટ લેઆઉટ</h3>
              <p>પ્લોટિંગ અને નકશાકાર સેવા વ્યાવસાયિક રીતે પ્રદાન થાય છે.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;