import React from "react";
import "./Components.css";

function Pricing() {
  return (
    <div className="pricing">
      <h2>પ્રાઈસિંગ</h2>

      <div className="pricing-grid">
        <div className="price-card">
          <h3>સાદી જમીન માપણી</h3>
          <p>૧૨ વિઘાથી ઓછી માપણી</p>
          <h4>₹ ૪૫૦૦</h4>
        </div>

        <div className="price-card">
          <h3>મોટી જમીન માપણી</h3>
          <p>૧૫ વિઘાથી વધુ માપણી</p>
          <h4>₹ ૩૦૦ પ્રતિ વિઘા</h4>
        </div>

        <div className="price-card">
          <h3>ટીપણ બેસાડવું</h3>
          <p>સ્થાન નિર્ધારણ સેવા</p>
          <h4>₹ ૩૦૦૦ થી શરૂ</h4>
        </div>

        <div className="price-card">
          <h3>મુજબની માપણી</h3>
          <p>શીટ મુજબ માપણી</p>
          <h4>₹ ૨૦૦૦</h4>
        </div>
      </div>
    </div>
  );
}

export default Pricing;