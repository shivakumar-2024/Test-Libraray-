import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TableTest1 = () => {
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const partStyle = {
    display: "flex",
    gap: "20px",
  };

  const columnStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
  };

  const rowStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const cardStyle = {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const labelStyle = {
    marginBottom: "5px",
  };

  const inputStyle = {
    padding: "5px",
    fontSize: "16px",
    flex: 1,
  };

  // State to track the collapse state of each accordion item
  const [accordionState, setAccordionState] = useState({
    accordion1: false,
    accordion2: false,
    accordion3: false,
  });

  // Function to expand all accordion items
  const handleExpandAll = () => {
    setAccordionState({
      accordion1: true,
      accordion2: true,
      accordion3: true,
    });
  };

  // Function to collapse all accordion items
  const handleCloseAll = () => {
    setAccordionState({
      accordion1: false,
      accordion2: false,
      accordion3: false,
    });
  };

  return (
    <div style={cardStyle}>
      <form style={formStyle}>
        {/* Your form content */}
      </form>

      <div className="card mt-5">
        {/* Your first table */}
      </div>

      <hr />

      <div className="card">
        {/* Your second table */}
      </div>

      <div>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          style={{ margin: "5px" }}
          onClick={handleExpandAll}
        >
          Expand All
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          style={{ margin: "5px" }}
          onClick={handleCloseAll}
        >
          Close All
        </button>

        <div className="accordion" id="accordionPanelsStayOpenExample">
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className={`accordion-button ${
                  accordionState.accordion1 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() =>
                  setAccordionState({
                    ...accordionState,
                    accordion1: !accordionState.accordion1,
                  })
                }
                aria-expanded={accordionState.accordion1 ? "true" : "false"}
                aria-controls="panelsStayOpen-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className={`accordion-collapse collapse ${
                accordionState.accordion1 ? "show" : ""
              }`}
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className={`accordion-button ${
                  accordionState.accordion2 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() =>
                  setAccordionState({
                    ...accordionState,
                    accordion2: !accordionState.accordion2,
                  })
                }
                aria-expanded={accordionState.accordion2 ? "true" : "false"}
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className={`accordion-collapse collapse ${
                accordionState.accordion2 ? "show" : ""
              }`}
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className={`accordion-button ${
                  accordionState.accordion3 ? "" : "collapsed"
                }`}
                type="button"
                onClick={() =>
                  setAccordionState({
                    ...accordionState,
                    accordion3: !accordionState.accordion3,
                  })
                }
                aria-expanded={accordionState.accordion3 ? "true" : "false"}
                aria-controls="panelsStayOpen-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className={`accordion-collapse collapse ${
                accordionState.accordion3 ? "show" : ""
              }`}
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableTest1;
