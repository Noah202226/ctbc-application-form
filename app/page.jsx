"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@mui/material";

// Assets
// import pdfFile from "/rotated.pdf?asset";
// import checkIcon from "/check.png?asset";

import LoanInfo from "./forms/LoanInfo";
import PersonalInfo from "./forms/PersonalInfo";
import Finances from "./forms/Finances";
import References from "./forms/References";
import GeneratePdf from "./forms/GeneratePdf";

import { useSearchParams } from "next/navigation";

import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { formStore } from "./store/formStore";

const CtbcForm = () => {
  const { clientBy, handleClientBy, handleClientAccessToken } = formStore(
    (state) => state
  );
  const [refID, setRefID] = useState("");
  const [modalRef, setModalRef] = useState(true);
  const params = useSearchParams().get("id");

  const [errorLink, setErrorLink] = useState("");

  const linkToOurSite = () => {
    window.location.href = "https://rsbc-marketing.vercel.app/";
  };

  const submitRef = async () => {
    console.log(refID);
    const docRef = doc(db, "clients", refID.toString());

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setModalRef(false);

      handleClientBy(docSnap.data()?.clientBy);

      const agentProfile = await getDoc(
        doc(db, "users", docSnap.data()?.clientBy)
      );
      handleClientAccessToken(agentProfile.data().pdfToken);
    } else {
      // docSnap.data() will be undefined in this case
      setErrorLink("Link is not valid.");
      console.log("No such document!");
    }
  };

  useEffect(() => {
    console.log(db);
    if (!params) {
      setModalRef(true);
      console.log(params, modalRef);
    } else {
      console.log(params);
      setRefID(params);
    }
  }, []);

  useEffect(() => {
    if (refID) {
      submitRef();
    }
  }, [refID]);

  const [stepsdata, setStepsdata] = useState([
    {
      stepName: "Loan information",
      done: true,
      index: 0,
      activeform: true,
      formFields: <LoanInfo />,
    },
    {
      stepName: "Personal Information",
      done: false,
      index: 1,
      activeform: false,
      formFields: <PersonalInfo />,
    },
    {
      stepName: "Work And Finances",
      done: false,
      index: 2,
      activeform: false,
      formFields: <Finances />,
    },
    {
      stepName: "References",
      done: false,
      index: 3,
      activeform: false,
      formFields: <References />,
    },
    {
      stepName: "Generate PDF",
      done: false,
      index: 4,
      activeform: false,
      formFields: <GeneratePdf />,
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateStep = (e, index, isDone) => {
    e.preventDefault();
    console.log(index, currentIndex);
    if (index == stepsdata.length - 1) return;
    else {
      // Create a new array with updated data
      const updatedStepsdata = stepsdata.map((step) => {
        if (step.index === index) {
          return { ...step, activeform: isDone, done: true };
        } else if (step.index === index + 1) {
          return { ...step, activeform: true, done: true };
        } else {
          return { ...step, activeform: false };
        }
      });

      // Update the state with the new array
      setStepsdata(updatedStepsdata);
      setCurrentIndex(currentIndex + 1);
      console.log(stepsdata);
    }
  };

  const goToPreviousStep = (e, index, isDone) => {
    e.preventDefault();
    console.log("go back", index);
    if (index >= 0) {
      setTimeout(() => {
        // Create a new array with updated data
        const updatedStepsdata = stepsdata.map((step) => {
          if (step.index === index) {
            return { ...step, activeform: false, done: false };
          } else if (step.index === index - 1) {
            return { ...step, activeform: true }; // Set the previous step's done property
          } else {
            return { ...step, activeform: false }; // Keep the other steps unchanged
          }
        });

        // Update the state with the new array
        setStepsdata(updatedStepsdata);
        console.log(stepsdata);
        setCurrentIndex(currentIndex - 1);
      }, 100);
    }
  };
  return (
    <Card
      sx={{
        padding: 1,
        display: "flex",
        flexDirection: "column",
      }}
      className="bg-slate-50 container mx-auto"
    >
      <h1 className="text-3xl sm:text-4xl text-center ">
        CTBC APPLICATION FORM
      </h1>

      {`Client By: ${clientBy}`}
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
        checked={modalRef}
        onChange={submitRef}
      />
      <div className="modal">
        <div className="modal-box">
          {refID === "" ? (
            <>
              <h3 className="font-bold text-lg">Hello Client!</h3>

              <p className="my-4">
                This form is secured. You can get your access token to this form
                to your loan provider
              </p>

              <div className="modal-action">
                <label
                  htmlFor="my_modal_6"
                  className="btn btn-info"
                  onClick={linkToOurSite}
                >
                  Visit our website
                </label>
              </div>
            </>
          ) : errorLink === "" ? (
            <p>Verifying link...</p>
          ) : (
            <p>{errorLink}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-col  w-full">
        <ul className="steps my-3">
          {stepsdata.map((step) => {
            return (
              <li
                key={step.index}
                className={`step ${
                  step.done ? "step-success" : ""
                } flex flex-col ${
                  step.activeform ? "after:text-2xl underline" : ""
                }
                  
                `}
              >
                <p className="hidden lg:block">{step.stepName}</p>
              </li>
            );
          })}
        </ul>

        <form>
          <div className="card  bg-slate-200 text-neutral-content relative">
            <div className="card-actions justify-between m-2 ">
              {currentIndex != 0 ? (
                <button
                  className="btn"
                  onClick={(e) => goToPreviousStep(e, currentIndex)}
                >
                  Back
                </button>
              ) : (
                <p></p>
              )}

              {currentIndex <= 3 ? (
                <button
                  className="btn  btn-success"
                  onClick={(e) => updateStep(e, currentIndex)}
                >
                  Next
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl text-black">
                {
                  stepsdata.filter((step) => step.activeform === true)[0]
                    .stepName
                }
              </h2>

              {
                stepsdata.filter((step) => step.activeform === true)[0]
                  .formFields
              }
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default CtbcForm;
