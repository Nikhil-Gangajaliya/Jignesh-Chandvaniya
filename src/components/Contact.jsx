import React from 'react';
import "./Components.css";

function Contact() {
  return (
    <div className='contact'>

      <h2>સંપર્ક કરો</h2>

      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <p>
            અમારી સેવાઓ વિશે વધુ માહિતી માટે અથવા કામ શરૂ કરવા માટે
            નીચે આપેલ વિગતો દ્વારા સંપર્ક કરો:
          </p>

          <ul>
            <li>
              <i class="fa-solid fa-phone"></i>
              <a href="tel:+919825917544">
                Call: +91 98259 17544
              </a>
            </li>

            <li>
              <i class="fa-brands fa-square-whatsapp"></i>
              <a
                href="https://wa.me/919825917544?text=Hi%20Jigneshbhai,%20મને%20તમારી%20માપણી%20સેવા%20વિશે%20વધુ%20માહિતી%20જોઈતી%20હતી."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp કરો
              </a>
            </li>

            <li>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:jigneshchandavaniya@gmail.com">
                jigneshchandavaniya@gmail.com
              </a>
            </li>
          </ul>

          <h4>"આજે જ સંપર્ક કરો અને વિશ્વાસપાત્ર સેવા મેળવો"</h4>
        </div>

        {/* RIGHT SIDE (MAP) */}
        <div className="contact-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1606.0306533633584!2d70.49466686656751!3d21.893781634846196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDUzJzM3LjUiTiA3MMKwMjknNDEuMSJF!5e1!3m2!1sen!2sin!4v1777462878365!5m2!1sen!2sin"
            loading="lazy"
            title="map"
          ></iframe>
        </div>

      </div>

    </div>
  );
}

export default Contact;