"use client";
import { PDFDocument, StandardFonts, degrees, rgb } from "pdf-lib";
import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Typography,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Stack,
  ButtonGroup,
} from "@mui/material";

// Assets
// import pdfFile from "/rotated.pdf?asset";
// import checkIcon from "/check.png?asset";
import download from "downloadjs";
import LoanInfo from "./forms/LoanInfo";
import PersonalInfo from "./forms/PersonalInfo";

const pdfFile = "/rotated.pdf";
const checkIcon = "/check.png";

const CtbcForm = () => {
  //   Writing Configuration
  const style = {
    color: rgb(0.0, 0.0, 0.0),
    rotate: degrees(90),
  };

  const [desiredAmount, setDerisedAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [loanType, setLoanType] = useState("");

  const [purposeOfLoan, setPurposeOfLoan] = useState("");

  const [sourceOfLoan, setSourceOfLoan] = useState("");
  const [isOthers, setIsOthers] = useState("none");
  const [isBranch, setIsBranch] = useState("none");
  const [isAgency, setIsAgency] = useState("none");
  const [brachName, setBranchName] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [otherSource, setOtherSource] = useState("");

  const [gender, setGender] = useState("");

  const [title, setTitle] = useState("");

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const [aliasName, setAliasName] = useState("");

  const [birthdate, setBirthDate] = useState("");

  const [placeOfBirth, setPlaceOfBirth] = useState("");

  const [maritalStatus, setMaritalStatus] = useState("");

  const [spouseName, setSpouseName] = useState("");

  const [spouseWorking, setIsSpouseWorkng] = useState("");

  const [noOfChild, setNoOfChild] = useState("");
  const [noOfDependents, setNoOfDependents] = useState("");

  const [mothersFirstname, setMothersFirstName] = useState("");
  const [mothersMiddleName, setMothersMiddleName] = useState("");
  const [mothersLastname, setMothersLastName] = useState("");

  const [isPhResident, setIsPhResident] = useState("");
  const [nationality, setNationality] = useState("");
  const [sssNo, setSssNo] = useState("");
  const [tinNo, setTinNo] = useState("");

  const [educationAttain, setEducationAttain] = useState("");

  const [residenceType, setResidenceType] = useState("");
  const [amortizationPerMonth, setAmortizationPerMonth] = useState("");
  const [rentPerMonth, setRentPerMonth] = useState("");
  const [otherResidensy, setotherResidensy] = useState("");
  const [isAmortization, setIsAmortization] = useState("none");
  const [isRented, setIsRented] = useState("none");
  const [isOtherResidency, setIsOtherResidency] = useState("none");

  const [currentHomeAddress, setCurrentHomeAddress] = useState("");
  const [yrAtPresentAddress, setYrAtPresentAddress] = useState("");
  const [mnAtPresentAddress, setMnAtPresentAddress] = useState("");
  const [residenceAreaCode, setResidenceAreaCode] = useState("");
  const [residensePhone1, setResidensePhone1] = useState("");
  const [residensePhone2, setResidensePhone2] = useState("");
  const [residenseMobile, setResidenseMobile] = useState("");
  const [fax, setFax] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");

  const [permanentHomeAddress, setPermanentHomeAddress] = useState("");
  const [permanentYrAtPresentAddress, setpermanentYrAtPresentAddress] =
    useState("");
  const [permanentMnAtPresentAddress, setpermanentMnAtPresentAddress] =
    useState("");
  const [permanentResidenceAreaCode, setPermanentResidenceAreaCode] =
    useState("");
  const [permanentResidensePhone1, setPermanentResidensePhone1] = useState("");
  const [permanentResidensePhone2, setPermanentResidensePhone2] = useState("");
  const [permanentResidenseMobile, setPermanentResidenseMobile] = useState("");

  const [previousHomeAddress, setPreviousHomeAddress] = useState("");
  const [yrsAtPreviousHomeAddress, setYrsAtPreviousHomeAddress] = useState("");
  const [mmAtPreviousHomeAddress, setMmAtPreviousHomeAddress] = useState("");

  const [provincialHomeAddress, setProvincialHomeAddress] = useState("");
  const [provincialAreaCode, setProvincialAreaCode] = useState("");
  const [provincialPhone1, setProvincialPhone1] = useState("");
  const [provincialPhone2, setProvincialPhone2] = useState("");
  const [provincialMobile, setProvincialMobile] = useState("");

  // Page 3
  const [sourceOfIncome, setsourceOfIncome] = useState("");
  const [isPermanent, setIsPermanent] = useState("");
  const [partOwner, setPartOwner] = useState("");
  const [isPartOwner, setIsPartOwner] = useState("none");
  const [percentOfOwnership, setPercentOfOwnership] = useState("");

  const [companyType, setCompanyType] = useState("");
  const [othersCompanyType, setOthersCompanyType] = useState("");

  const [employerOrBusinessName, setEmployerOrBusinessName] = useState("");
  const [natureOfBusiness, setNatureOfBusiness] = useState("");
  const [yourPosition, setYourPosition] = useState("");

  const [rank, setRank] = useState("");

  const [employerOrBusinessAddress, setEmployerOrBusinessAddress] =
    useState("");

  const [yrsAtPresentCompany, setYrsAtPresentCompany] = useState("");
  const [monthsAtPresentCompany, setMonthsAtPresentCompany] = useState("");

  const [officeAreaCode, setOfficeAreaCode] = useState("");
  const [officePhone1, setOfficePhone1] = useState("");
  const [officePhone2, setOfficePhone2] = useState("");
  const [officeMobile, setOfficeMobile] = useState("");

  const [officeFax, setOfficeFax] = useState("");
  const [officeEmail, setOfficeEmail] = useState("");

  const [monthlyBasicIncome, setMonthlyBasicIncome] = useState("");
  const [montylyAllowance, setMontylyAllowance] = useState("");
  const [monthlyFamilyIncome, setMonthlyFamilyIncome] = useState("");

  const [monthlyHouseHoldExpense, setMonthlyHouseHoldExpense] = useState("");
  const [previousEmployerOrBusinessName, setPreviousEmployerOrBusinessName] =
    useState("");

  const [yrsAtPreviousCompany, setYrsAtPreviousCompany] = useState("");
  const [monthsAtPreviousCompany, setMonthsAtPreviousCompany] = useState("");

  const [previousCompanyAreaCode, setPreviousCompanyAreaCode] = useState("");
  const [previousCompanyPhone1, setPreviousCompanyPhone1] = useState("");
  const [previousCompanyMobile, setPreviousCompanyMobile] = useState("");

  const [spouseEmployerOrBusinessName, setSpouseEmployerOrBusinessName] =
    useState("");
  const [spouseTitleOrRank, setspouseTitleOrRank] = useState("");
  const [spouseMonthlyIncome, setSpouseMonthlyIncome] = useState("");

  const [spouseOfficeAreaCode, setspouseOfficeAreaCode] = useState("");
  const [spouseOfficePhone1, setSpouseOfficePhone1] = useState("");
  const [spouseOfficePhone2, setspouseOfficePhone2] = useState("");
  const [spouceOfficeMobile, setspouceOfficeMobile] = useState("");

  const [spouseYrsAtPresentCompany, setSpouseYrsAtPresentCompany] =
    useState("");
  const [spouseMonthsAtPresentCompany, setspouseMonthsAtPresentCompany] =
    useState("");

  // References States
  const [bankName, setBankName] = useState("");
  const [bankBranchName, setBankBranchName] = useState("");
  const [bankAccountType, setBankAccountType] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");

  const [creditCardNo, setcreditCardNo] = useState("");
  const [issuerNameOrBankName, setIssuerNameOrBankName] = useState("");
  const [memberSinceAndLoanGranted, setMemberSinceAndLoanGranted] =
    useState("");
  const [creditCardExpiryAndLoanMaturity, setCreditCardExpiryAndLoanMaturity] =
    useState("");
  const [cardLimitAndLoanAmount, setCardLimitAndLoanAmount] = useState("");

  const [personalReferenceName, setPersonalReferenceName] = useState("");
  const [personalReferenceRelation, setPersonalReferenceRelation] =
    useState("");
  const [personalReferenceMobile, setPersonalReferenceMobile] = useState("");
  const [personalReferenceAddress, setPersonalReferenceAddress] = useState("");

  const [personalReferenceName2, setPersonalReferenceName2] = useState("");
  const [personalReferenceRelation2, setPersonalReferenceRelation2] =
    useState("");
  const [personalReferenceMobile2, setPersonalReferenceMobile2] = useState("");
  const [personalReferenceAddress2, setPersonalReferenceAddress2] =
    useState("");

  const [personalReferenceName3, setPersonalReferenceName3] = useState("");
  const [personalReferenceRelation3, setPersonalReferenceRelation3] =
    useState("");
  const [personalReferenceMobile3, setPersonalReferenceMobile3] = useState("");
  const [personalReferenceAddress3, setPersonalReferenceAddress3] =
    useState("");

  // checkPurpose
  const checkPurpose = () => {
    if (sourceOfLoan == "others") {
      setIsOthers("block");
      setIsAgency("none");
      setIsBranch("none");
    } else if (sourceOfLoan == "branch") {
      setIsBranch("block");
      setIsOthers("none");
      setIsAgency("none");
    } else if (sourceOfLoan == "agency") {
      setIsAgency("block");
      setIsOthers("none");
      setIsBranch("none");
    } else {
      setIsAgency("none");
      setIsOthers("none");
      setIsBranch("none");
    }
  };
  // checkResidensyType
  const checkResidensyType = () => {
    if (residenceType == "others") {
      setIsOtherResidency("block");
      setIsAmortization("none");
      setIsRented("none");
    } else if (residenceType == "owned-mortgaged") {
      setIsOtherResidency("none");
      setIsAmortization("block");
      setIsRented("none");
    } else if (residenceType == "rented") {
      setIsOtherResidency("none");
      setIsAmortization("none");
      setIsRented("block");
    } else {
      setIsOtherResidency("none");
      setIsAmortization("none");
      setIsRented("none");
    }
  };
  // checkPartOwner
  const checkPartnerOwner = () => {
    if (partOwner == "yes") {
      setIsPartOwner("block");
    } else if (partOwner == "no") {
      setIsPartOwner("none");
    }
  };

  useEffect(() => {
    checkPurpose();
    checkResidensyType();
    checkPartnerOwner();
  }, [sourceOfLoan, residenceType, partOwner]);

  const modifyPdf = async (e) => {
    e.preventDefault();

    console.log(loanTerm);
    if (desiredAmount === "" || desiredAmount === undefined) {
      alert("amount is required");
      return;
    }

    const response = await fetch(pdfFile); // Update the file path accordingly
    const pdfBytes = await response.arrayBuffer();

    const imageResponce = await fetch(checkIcon);
    const checkImageBytes = await imageResponce.arrayBuffer();

    const pdfDoc = await PDFDocument.load(pdfBytes, { updateMetadata: false });
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    firstPage.setRotation(degrees(90));

    // Embed image
    const checkImage = await pdfDoc.embedPng(checkImageBytes);

    // Amount
    firstPage.drawText(desiredAmount, {
      x: 175,
      y: 20,
      size: 12,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Loan Term
    if (loanTerm == "12") {
      firstPage.drawImage(checkImage, {
        x: 159,
        y: 81,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (loanTerm == "18") {
      firstPage.drawImage(checkImage, {
        x: 170,
        y: 81,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (loanTerm == "24") {
      firstPage.drawImage(checkImage, {
        x: 180,
        y: 81,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (loanTerm == "36") {
      firstPage.drawImage(checkImage, {
        x: 190.5,
        y: 81,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Loan Type
    if (loanType == "new-application") {
      firstPage.drawImage(checkImage, {
        x: 159,
        y: 127,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (loanType == "with-existing-loan") {
      firstPage.drawImage(checkImage, {
        x: 170,
        y: 127,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (loanType == "with-previous-loan") {
      firstPage.drawImage(checkImage, {
        x: 180,
        y: 127,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (loanType == "with-previous-application") {
      firstPage.drawImage(checkImage, {
        x: 190.5,
        y: 127,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Purpose of Loan
    if (purposeOfLoan == "appliance") {
      firstPage.drawImage(checkImage, {
        x: 216,
        y: 12.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "balance-transfer") {
      firstPage.drawImage(checkImage, {
        x: 226,
        y: 12.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "education") {
      firstPage.drawImage(checkImage, {
        x: 236,
        y: 12.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "health-and-hospitalization") {
      firstPage.drawImage(checkImage, {
        x: 216,
        y: 73.1,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "home-improvement") {
      firstPage.drawImage(checkImage, {
        x: 226,
        y: 73.1,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "livelihood-and-working-capital") {
      firstPage.drawImage(checkImage, {
        x: 236.8,
        y: 73.1,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "travel") {
      firstPage.drawImage(checkImage, {
        x: 216,
        y: 152.6,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (purposeOfLoan == "personal") {
      firstPage.drawImage(checkImage, {
        x: 226,
        y: 153,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Source of Loan
    if (sourceOfLoan == "branch") {
      firstPage.drawImage(checkImage, {
        x: 260,
        y: 13,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
      firstPage.drawText(brachName.toUpperCase(), {
        x: 260,
        y: 72,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else if (sourceOfLoan == "agency") {
      firstPage.drawImage(checkImage, {
        x: 271,
        y: 13,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
      firstPage.drawText(agencyName.toUpperCase(), {
        x: 271,
        y: 72,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else if (sourceOfLoan == "walk-in") {
      firstPage.drawImage(checkImage, {
        x: 281.3,
        y: 13,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (sourceOfLoan == "employee-referral") {
      firstPage.drawImage(checkImage, {
        x: 260,
        y: 143,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (sourceOfLoan == "telemarketing") {
      firstPage.drawImage(checkImage, {
        x: 271,
        y: 143,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (sourceOfLoan == "website") {
      firstPage.drawImage(checkImage, {
        x: 281.5,
        y: 51.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (sourceOfLoan == "others") {
      firstPage.drawImage(checkImage, {
        x: 281.5,
        y: 90,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
      firstPage.drawText(otherSource, {
        x: 282,
        y: 120,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Gender
    if (gender == "male") {
      firstPage.drawImage(checkImage, {
        x: 296,
        y: 50,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (gender == "female") {
      firstPage.drawImage(checkImage, {
        x: 296,
        y: 76.3,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Title
    if (title == "mr") {
      firstPage.drawImage(checkImage, {
        x: 308.5,
        y: 37.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (title == "mrs") {
      firstPage.drawImage(checkImage, {
        x: 308.5,
        y: 64.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (title == "ms") {
      firstPage.drawImage(checkImage, {
        x: 308.5,
        y: 95,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Full name
    if (firstName.length > 10) {
      firstPage.drawText(firstName.toUpperCase(), {
        x: 330,
        y: 11.5,
        size: 7,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(middleName.toUpperCase(), {
        x: 330,
        y: 80,
        size: 7,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(lastName.toUpperCase(), {
        x: 330,
        y: 135,
        size: 7,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      firstPage.drawText(firstName.toUpperCase(), {
        x: 330,
        y: 15,
        size: 8,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(middleName.toUpperCase(), {
        x: 330,
        y: 80,
        size: 8,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
      firstPage.drawText(lastName.toUpperCase(), {
        x: 330,
        y: 135,
        size: 8,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Others Name or Alias
    firstPage.drawText(aliasName, {
      x: 356.8,
      y: 30,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Date of Birth
    firstPage.drawText(birthdate, {
      x: 383.8,
      y: 18,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Birth Place
    if (placeOfBirth.length < 18) {
      firstPage.drawText(placeOfBirth, {
        x: 383.8,
        y: 72,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      // Find the index of the first space character
      const firstSpaceIndex = placeOfBirth.indexOf(" ");

      if (firstSpaceIndex !== -1) {
        // Find the index of the second space character starting from after the first space
        const secondSpaceIndex = placeOfBirth.indexOf(" ", firstSpaceIndex + 1);

        if (secondSpaceIndex !== -1) {
          console.log("Index of the second space character:", secondSpaceIndex);

          const firstline = placeOfBirth.slice(0, secondSpaceIndex);
          const lastline = placeOfBirth.slice(
            secondSpaceIndex,
            placeOfBirth.length
          );
          firstPage.drawText(firstline.toLocaleUpperCase(), {
            x: 379.8,
            y: 70,
            size: 5,
            font: helveticaFont,
            color: style.color,
            rotate: style.rotate,
          });
          firstPage.drawText(lastline.toUpperCase(), {
            x: 388.8,
            y: 68.5,
            size: 5,
            font: helveticaFont,
            color: style.color,
            rotate: style.rotate,
          });
        } else {
          console.log("Second space not found in the text.");
        }
      } else {
        console.log("First space not found in the text.");
      }
    }

    // Marital Status
    if (maritalStatus == "single") {
      firstPage.drawImage(checkImage, {
        x: 379.5,
        y: 127,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (maritalStatus == "married") {
      firstPage.drawImage(checkImage, {
        x: 390,
        y: 127,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (maritalStatus == "widowed") {
      firstPage.drawImage(checkImage, {
        x: 379.5,
        y: 156,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (maritalStatus == "seperated") {
      firstPage.drawImage(checkImage, {
        x: 390,
        y: 156.3,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Spouse name
    firstPage.drawText(spouseName.toLocaleUpperCase(), {
      x: 410,
      y: 46,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Spouse working
    if (spouseWorking == "yes") {
      firstPage.drawImage(checkImage, {
        x: 424.5,
        y: 54,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (spouseWorking == "no") {
      firstPage.drawImage(checkImage, {
        x: 424.8,
        y: 74.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // No of Children
    firstPage.drawText(noOfChild, {
      x: 425.2,
      y: 125,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // No of dependent
    firstPage.drawText(noOfDependents, {
      x: 425.2,
      y: 180,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Mothers Full Name
    firstPage.drawText(mothersFirstname.toLocaleUpperCase(), {
      x: 455,
      y: 20,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(mothersMiddleName.toLocaleUpperCase(), {
      x: 455,
      y: 85,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(mothersLastname.toLocaleUpperCase(), {
      x: 455,
      y: 140,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Philippines Resident
    if (isPhResident == "yes") {
      firstPage.drawImage(checkImage, {
        x: 475,
        y: 61.4,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (isPhResident == "no") {
      firstPage.drawImage(checkImage, {
        x: 475,
        y: 82,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Nationality
    firstPage.drawText(nationality, {
      x: 479,
      y: 129,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // SSS No.
    firstPage.drawText(sssNo, {
      x: 496,
      y: 18,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // TIN
    firstPage.drawText(sssNo, {
      x: 496,
      y: 120,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Education Attainment
    if (educationAttain == "high-school") {
      firstPage.drawImage(checkImage, {
        x: 516,
        y: 12.8,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (educationAttain == "college-level") {
      firstPage.drawImage(checkImage, {
        x: 516,
        y: 53.7,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (educationAttain == "college-graduate") {
      firstPage.drawImage(checkImage, {
        x: 516,
        y: 97.6,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (educationAttain == "post-graduate") {
      firstPage.drawImage(checkImage, {
        x: 516,
        y: 149.7,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Residensy Type
    if (residenceType == "owned-not-mortgaged") {
      firstPage.drawImage(checkImage, {
        x: 107,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (residenceType == "owned-mortgaged") {
      firstPage.drawImage(checkImage, {
        x: 117.5,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
      firstPage.drawText(amortizationPerMonth, {
        x: 117,
        y: 325,
        size: 8,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else if (residenceType == "rented") {
      firstPage.drawImage(checkImage, {
        x: 128,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
      firstPage.drawText(rentPerMonth, {
        x: 128,
        y: 315,
        size: 8,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else if (residenceType == "used-free") {
      firstPage.drawImage(checkImage, {
        x: 138.3,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (residenceType == "staying-with-parents") {
      firstPage.drawImage(checkImage, {
        x: 149,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (residenceType == "staying-with-relatives") {
      firstPage.drawImage(checkImage, {
        x: 159.4,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (residenceType == "others") {
      firstPage.drawImage(checkImage, {
        x: 170,
        y: 210.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
      firstPage.drawText(otherResidensy, {
        x: 170,
        y: 233,
        size: 8,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Current Home Address
    firstPage.drawText(currentHomeAddress, {
      x: 205,
      y: 215,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Year at Home Address
    firstPage.drawText(yrAtPresentAddress, {
      x: 231.5,
      y: 315,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Month at Home Address
    firstPage.drawText(mnAtPresentAddress, {
      x: 231.5,
      y: 356,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Area Code at Home Address
    firstPage.drawText(residenceAreaCode, {
      x: 265,
      y: 212,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(residensePhone1, {
      x: 265,
      y: 252,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(residensePhone2, {
      x: 265,
      y: 290,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(residenseMobile, {
      x: 265,
      y: 338,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Fax
    firstPage.drawText(fax, {
      x: 282,
      y: 215,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Personal Email
    firstPage.drawText(personalEmail, {
      x: 282,
      y: 275,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Permanent Home Address
    firstPage.drawText(permanentHomeAddress, {
      x: 318,
      y: 215,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Year at Home Address
    firstPage.drawText(permanentYrAtPresentAddress, {
      x: 341.2,
      y: 315,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Month at Home Address
    firstPage.drawText(permanentMnAtPresentAddress, {
      x: 341.2,
      y: 356,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Area Code at Permanent Home Address
    firstPage.drawText(permanentResidenceAreaCode, {
      x: 375,
      y: 212,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(permanentResidensePhone1, {
      x: 375,
      y: 252,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(permanentResidensePhone2, {
      x: 375,
      y: 290,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(permanentResidenseMobile, {
      x: 375,
      y: 338,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Previous Home Address
    firstPage.drawText(previousHomeAddress, {
      x: 410,
      y: 215,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Year at Previous Address
    firstPage.drawText(yrsAtPreviousHomeAddress, {
      x: 437,
      y: 315,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Month at Previous Address
    firstPage.drawText(mmAtPreviousHomeAddress, {
      x: 437,
      y: 356,
      size: 8,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Provincial Home Address
    firstPage.drawText(provincialHomeAddress, {
      x: 475,
      y: 215,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Area Code at Provincial Home Address
    firstPage.drawText(provincialAreaCode, {
      x: 516.8,
      y: 212,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(provincialPhone1, {
      x: 516.8,
      y: 252,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(provincialPhone2, {
      x: 516.8,
      y: 290,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(provincialMobile, {
      x: 516.8,
      y: 338,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Work and finances
    if (sourceOfIncome == "employment") {
      firstPage.drawImage(checkImage, {
        x: 120.6,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (sourceOfIncome == "business") {
      firstPage.drawImage(checkImage, {
        x: 131.2,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Is permanent
    if (isPermanent == "yes") {
      firstPage.drawImage(checkImage, {
        x: 120.7,
        y: 461,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (isPermanent == "no") {
      firstPage.drawImage(checkImage, {
        x: 120.8,
        y: 481.7,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Part Owner
    if (partOwner == "yes") {
      firstPage.drawImage(checkImage, {
        x: 120.7,
        y: 507,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
      firstPage.drawText(percentOfOwnership, {
        x: 133,
        y: 550,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else if (partOwner == "no") {
      firstPage.drawImage(checkImage, {
        x: 120.7,
        y: 527.6,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Company Type
    if (companyType == "private") {
      firstPage.drawImage(checkImage, {
        x: 155,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (companyType == "government") {
      firstPage.drawImage(checkImage, {
        x: 167.3,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (companyType == "others") {
      firstPage.drawImage(checkImage, {
        x: 155,
        y: 444.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
      firstPage.drawText(othersCompanyType, {
        x: 154.5,
        y: 468,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    }

    // Employer or Business Name
    if (employerOrBusinessName.length < 18) {
      firstPage.drawText(employerOrBusinessName.toUpperCase(), {
        x: 160,
        y: 515,
        size: 7,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      // Find the index of the first space character
      const firstSpaceIndex = employerOrBusinessName.indexOf(" ");

      if (firstSpaceIndex !== -1) {
        // Find the index of the second space character starting from after the first space
        const secondSpaceIndex = employerOrBusinessName.indexOf(
          " ",
          firstSpaceIndex + 1
        );

        if (secondSpaceIndex !== -1) {
          console.log("Index of the second space character:", secondSpaceIndex);

          const firstline = employerOrBusinessName.slice(0, secondSpaceIndex);
          const lastline = employerOrBusinessName.slice(
            secondSpaceIndex,
            employerOrBusinessName.length
          );
          firstPage.drawText(firstline.toLocaleUpperCase(), {
            x: 155,
            y: 510,
            size: 7,
            font: helveticaFont,
            color: style.color,
            rotate: style.rotate,
          });
          firstPage.drawText(lastline.toUpperCase(), {
            x: 165,
            y: 508,
            size: 7,
            font: helveticaFont,
            color: style.color,
            rotate: style.rotate,
          });
        } else {
          console.log("Second space not found in the text.");
        }
      } else {
        console.log("First space not found in the text.");
      }
    }

    firstPage.drawText(natureOfBusiness, {
      x: 186.5,
      y: 415,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(yourPosition, {
      x: 186.5,
      y: 520,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Company Type
    if (rank == "staff") {
      firstPage.drawImage(checkImage, {
        x: 208.5,
        y: 407.6,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "junior-officer") {
      firstPage.drawImage(checkImage, {
        x: 219,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "middle-management") {
      firstPage.drawImage(checkImage, {
        x: 229.6,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "production-worker") {
      firstPage.drawImage(checkImage, {
        x: 240.2,
        y: 407.5,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "service-employee") {
      firstPage.drawImage(checkImage, {
        x: 208.5,
        y: 478.4,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "president") {
      firstPage.drawImage(checkImage, {
        x: 219,
        y: 478.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "vise-president") {
      firstPage.drawImage(checkImage, {
        x: 229.6,
        y: 478.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    } else if (rank == "senior-manager") {
      firstPage.drawImage(checkImage, {
        x: 240.2,
        y: 478.2,
        height: 5,
        width: 5,
        color: style.color,
        rotate: style.rotate,
        opacity: 0.9,
      });
    }

    // Employer / Business Address
    if (employerOrBusinessAddress.length < 18) {
      firstPage.drawText(employerOrBusinessAddress.toUpperCase(), {
        x: 280,
        y: 415,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      // Find the index of the first space character
      const firstSpaceIndex = employerOrBusinessAddress.indexOf(" ");

      if (firstSpaceIndex !== -1) {
        // Find the index of the second space character starting from after the first space
        const secondSpaceIndex = employerOrBusinessAddress.indexOf(
          " ",
          firstSpaceIndex + 1
        );

        if (secondSpaceIndex !== -1) {
          console.log("Index of the second space character:", secondSpaceIndex);

          // Find the index of the third space character starting from after the second space
          const thirdSpaceIndex = employerOrBusinessAddress.indexOf(
            " ",
            secondSpaceIndex + 1
          );

          if (thirdSpaceIndex !== -1) {
            console.log("Index of the third space character:", thirdSpaceIndex);

            const firstline = employerOrBusinessAddress.slice(
              0,
              thirdSpaceIndex
            );
            const lastline = employerOrBusinessAddress.slice(
              thirdSpaceIndex,
              employerOrBusinessAddress.length
            );
            firstPage.drawText(firstline.toUpperCase(), {
              x: 280,
              y: 415,
              size: 7,
              font: helveticaFont,
              color: style.color,
              rotate: style.rotate,
            });
            firstPage.drawText(lastline.toUpperCase(), {
              x: 290,
              y: 413,
              size: 7,
              font: helveticaFont,
              color: style.color,
              rotate: style.rotate,
            });
          } else {
            console.log("Third space not found in the text.");
          }
        } else {
          console.log("Second space not found in the text.");
        }
      } else {
        console.log("First space not found in the text.");
      }
    }

    // Years and month at present company
    firstPage.drawText(yrsAtPresentCompany, {
      x: 312,
      y: 515,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(monthsAtPresentCompany, {
      x: 312,
      y: 556,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Area Code at Present company
    firstPage.drawText(officeAreaCode, {
      x: 345,
      y: 412,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(officePhone1, {
      x: 345,
      y: 442,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(officePhone2, {
      x: 345,
      y: 486,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(officeMobile, {
      x: 345,
      y: 522,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Office fax and email
    firstPage.drawText(officeFax, {
      x: 363,
      y: 412,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(officeEmail, {
      x: 363,
      y: 480,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Monthly Income
    firstPage.drawText(monthlyBasicIncome, {
      x: 384,
      y: 428,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(montylyAllowance, {
      x: 384,
      y: 488,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(monthlyFamilyIncome, {
      x: 384,
      y: 554,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(monthlyHouseHoldExpense, {
      x: 400.5,
      y: 470,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    firstPage.drawText(previousEmployerOrBusinessName, {
      x: 415.5,
      y: 481,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(yrsAtPreviousCompany, {
      x: 427,
      y: 515,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(monthsAtPreviousCompany, {
      x: 427,
      y: 555,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Area code at previous company
    firstPage.drawText(previousCompanyAreaCode, {
      x: 458.8,
      y: 415,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(previousCompanyPhone1, {
      x: 458.8,
      y: 458,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(previousCompanyMobile, {
      x: 458.8,
      y: 523,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Spouse Details
    firstPage.drawText(spouseEmployerOrBusinessName, {
      x: 498,
      y: 415,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(spouseTitleOrRank, {
      x: 498,
      y: 523,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(spouseMonthlyIncome, {
      x: 515,
      y: 450,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Spouse Office Contact
    firstPage.drawText(spouseOfficeAreaCode, {
      x: 115.2,
      y: 615,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(spouseOfficePhone1, {
      x: 115.2,
      y: 640,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(spouseOfficePhone2, {
      x: 115.2,
      y: 685,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(spouceOfficeMobile, {
      x: 115.2,
      y: 730,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Spouse year and month at company
    firstPage.drawText(spouseYrsAtPresentCompany, {
      x: 129,
      y: 713,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(spouseMonthsAtPresentCompany, {
      x: 129,
      y: 754,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Bank References
    firstPage.drawText(bankName.toUpperCase(), {
      x: 188,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    // Here
    if (bankBranchName.length < 12) {
      firstPage.drawText(bankBranchName.toUpperCase(), {
        x: 188,
        y: 700,
        size: 6,
        font: helveticaFont,
        color: style.color,
        rotate: style.rotate,
      });
    } else {
      // Find the index of the first space character
      const firstSpaceIndex = bankBranchName.indexOf(" ");

      if (firstSpaceIndex !== -1) {
        // Find the index of the second space character starting from after the first space
        const secondSpaceIndex = bankBranchName.indexOf(
          " ",
          firstSpaceIndex + 1
        );

        if (secondSpaceIndex !== -1) {
          console.log("Index of the second space character:", secondSpaceIndex);

          const firstline = bankBranchName.slice(0, secondSpaceIndex);
          const lastline = bankBranchName.slice(
            secondSpaceIndex,
            bankBranchName.length
          );
          firstPage.drawText(firstline.toLocaleUpperCase(), {
            x: 183,
            y: 712,
            size: 5,
            font: helveticaFont,
            color: style.color,
            rotate: style.rotate,
          });
          firstPage.drawText(lastline.toUpperCase(), {
            x: 188,
            y: 711,
            size: 5,
            font: helveticaFont,
            color: style.color,
            rotate: style.rotate,
          });
        } else {
          console.log("Second space not found in the text.");
        }
      } else {
        console.log("First space not found in the text.");
      }
    }

    firstPage.drawText(bankAccountType.toUpperCase(), {
      x: 230,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(bankAccountNumber, {
      x: 230.2,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Credit Card Own / Others loans
    firstPage.drawText(creditCardNo, {
      x: 287,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(issuerNameOrBankName, {
      x: 287,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(memberSinceAndLoanGranted, {
      x: 328,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(creditCardExpiryAndLoanMaturity, {
      x: 328,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(cardLimitAndLoanAmount, {
      x: 372.2,
      y: 680,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Personal / Trade Reference 1
    firstPage.drawText(personalReferenceName, {
      x: 428.5,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceRelation, {
      x: 428.5,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceMobile, {
      x: 485,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceAddress, {
      x: 485,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Personal / Trade Reference 2
    firstPage.drawText(personalReferenceName2, {
      x: 440,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceRelation2, {
      x: 440,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceMobile2, {
      x: 498.5,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceAddress2, {
      x: 498.5,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Personal / Trade Reference 3
    firstPage.drawText(personalReferenceName3, {
      x: 455,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceRelation3, {
      x: 455,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceMobile3, {
      x: 510,
      y: 630,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });
    firstPage.drawText(personalReferenceAddress3, {
      x: 510,
      y: 720,
      size: 6,
      font: helveticaFont,
      color: style.color,
      rotate: style.rotate,
    });

    // Save modifications
    const updatedPdfBytes = await pdfDoc.save();

    // Download Updated PDF
    download(
      updatedPdfBytes,
      `CTBC FORM -${firstName} ${lastName}.pdf`,
      "application/pdf"
    );
  };

  const [stepsdata, setStepsdata] = useState([
    {
      stepName: "Loan information",
      done: false,
      index: 0,
      activeform: true,
      formFields: (
        <LoanInfo
          sourceOfLoan={sourceOfLoan}
          setSourceOfLoan={setSourceOfLoan}
          isAgency={isAgency}
          agencyName={agencyName}
          setAgencyName={setAgencyName}
          isBranch={isBranch}
          brachName={brachName}
          setBranchName={setBranchName}
          isOthers={isOthers}
          otherSource={otherSource}
          setOtherSource={setOtherSource}
        />
      ),
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
      formFields: (
        <div>
          <h1>Form 3 fields</h1>
        </div>
      ),
    },

    {
      stepName: "References",
      done: false,
      index: 3,
      activeform: false,
      formFields: (
        <div>
          <h1>Form 5 fields</h1>
        </div>
      ),
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateStep = (index, isDone) => {
    console.log(index, isDone, stepsdata.length);
    if (index == stepsdata.length - 1) return;
    else {
      // Create a new array with updated data
      const updatedStepsdata = stepsdata.map((step) => {
        if (step.index === index) {
          return { ...step, activeform: isDone, done: true };
        } else if (step.index === index + 1) {
          return { ...step, activeform: true };
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

  const goToPreviousStep = (index, isDone) => {
    console.log("go back", index);
    if (index > 0) {
      setTimeout(() => {
        // Create a new array with updated data
        const updatedStepsdata = stepsdata.map((step) => {
          if (step.index === index) {
            return { ...step, activeform: false };
          } else if (step.index === index - 1) {
            return { ...step, activeform: true, done: isDone }; // Set the previous step's done property
          }
          return step; // Keep the other steps unchanged
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
      <div className="flex flex-col w-auto">
        <h1 className="text-3xl sm:text-4xl text-center my-1">
          CTBC APPLICATION FORM
        </h1>
        <ul className="steps">
          {stepsdata.map((step) => {
            return (
              <li
                key={step.index}
                className={`step ${
                  step.done ? "step-success" : ""
                } flex flex-col ${
                  step.activeform ? "after:text-2xl underline" : ""
                }`}
              >
                {step.stepName}
              </li>
            );
          })}
        </ul>

        <div className="card  bg-slate-200 text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl text-black">
              {stepsdata.filter((step) => step.activeform === true)[0].stepName}
            </h2>
            {stepsdata.filter((step) => step.activeform === true)[0].formFields}
            <div className="card-actions justify-end">
              <button
                className="btn btn-ghost "
                onClick={() => goToPreviousStep(currentIndex)}
              >
                Back
              </button>
              <button
                className="btn  btn-info"
                onClick={() => updateStep(currentIndex)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <form>
        <div className="divider text-red-500 sm:text-xl"></div>
        <FormControl required sx={{ display: "block" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Marital Status
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <FormControlLabel
              value="single"
              control={<Radio />}
              label="Single"
            />
            <FormControlLabel
              value="married"
              control={<Radio />}
              label="Married"
            />
            <FormControlLabel
              value="widowed"
              control={<Radio />}
              label="Widowed"
            />
            <FormControlLabel
              value="seperated"
              control={<Radio />}
              label="Seperated"
            />
          </RadioGroup>
        </FormControl>

        <div className="divider text-red-500 sm:text-xl"></div>
        <TextField
          type="text"
          label="Spouse Name"
          value={spouseName}
          onChange={(e) => setSpouseName(e.target.value)}
          fullWidth
        />

        <FormControl required sx={{ display: "block", my: 1 }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Spouse Working?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={spouseWorking}
            onChange={(e) => setIsSpouseWorkng(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

        <div className="divider text-red-500 sm:text-xl"></div>
        <Stack flexDirection={{ md: "row", xs: "column" }} my={2}>
          <TextField
            type="text"
            label="No. of Children"
            value={noOfChild}
            onChange={(e) => setNoOfChild(e.target.value)}
          />

          <TextField
            type="text"
            label="No. of Dependent"
            value={noOfDependents}
            onChange={(e) => setNoOfDependents(e.target.value)}
          />
        </Stack>

        <Stack flexDirection={{ md: "row", xs: "column" }} my={2}>
          <TextField
            type="text"
            label="Mother's Firstname"
            value={mothersFirstname}
            onChange={(e) => setMothersFirstName(e.target.value)}
          />
          <TextField
            type="text"
            label="Middle Name"
            value={mothersMiddleName}
            onChange={(e) => setMothersMiddleName(e.target.value)}
          />
          <TextField
            type="text"
            label="Last Name"
            value={mothersLastname}
            onChange={(e) => setMothersLastName(e.target.value)}
          />
        </Stack>

        <div className="divider text-red-500 sm:text-xl"></div>
        <FormControl required sx={{ display: "block" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Philippine Resident?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={isPhResident}
            onChange={(e) => setIsPhResident(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>

        <Stack
          flexDirection={{ md: "row", xs: "column" }}
          my={2}
          justifyContent={{ md: "space-between", xs: "center" }}
        >
          <TextField
            type="text"
            label="Nationality"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          />

          <TextField
            type="text"
            label="SSS / GSIS No."
            value={sssNo}
            onChange={(e) => setSssNo(e.target.value)}
          />

          <TextField
            type="text"
            label="TIN"
            value={tinNo}
            onChange={(e) => setTinNo(e.target.value)}
          />
        </Stack>

        <div className="divider text-red-500 sm:text-xl"></div>
        <FormControl required sx={{ display: "block" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Education Attainment
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={educationAttain}
            onChange={(e) => setEducationAttain(e.target.value)}
          >
            <FormControlLabel
              value="high-school"
              control={<Radio />}
              label="High School"
            />
            <FormControlLabel
              value="college-level"
              control={<Radio />}
              label="College Level"
            />
            <FormControlLabel
              value="college-graduate"
              control={<Radio />}
              label="College Graduate"
            />
            <FormControlLabel
              value="post-graduate"
              control={<Radio />}
              label="Post Graduate"
            />
          </RadioGroup>
        </FormControl>

        <div className="divider text-red-500 sm:text-xl"></div>
        <FormControl required sx={{ display: "block" }}>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Residence Type
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={residenceType}
            onChange={(e) => setResidenceType(e.target.value)}
          >
            <FormControlLabel
              value="owned-not-mortgaged"
              control={<Radio />}
              label="Owned (Not Mortgaged)"
            />
            <FormControlLabel
              value="owned-mortgaged"
              control={<Radio />}
              label="Owned (Mortgaged)"
            />
            <TextField
              variant="outlined"
              label="₱ Amortization / Month"
              sx={{ display: isAmortization }}
              value={amortizationPerMonth}
              onChange={(e) => setAmortizationPerMonth(e.target.value)}
            />
            <FormControlLabel
              value="rented"
              control={<Radio />}
              label="Rented"
            />
            <TextField
              variant="outlined"
              label="₱ Rented / Month"
              sx={{ display: isRented }}
              value={rentPerMonth}
              onChange={(e) => setRentPerMonth(e.target.value)}
            />
            <FormControlLabel
              value="used-free"
              control={<Radio />}
              label="Used Free"
            />
            <FormControlLabel
              value="staying-with-parents"
              control={<Radio />}
              label="Staying with Parents"
            />
            <FormControlLabel
              value="staying-with-relatives"
              control={<Radio />}
              label="Staying with Relatives"
            />
            <FormControlLabel
              value="others"
              control={<Radio />}
              label="Others"
            />
            <TextField
              variant="outlined"
              label="Others"
              sx={{ display: isOtherResidency }}
              value={otherResidensy}
              onChange={(e) => setotherResidensy(e.target.value)}
            />
          </RadioGroup>
        </FormControl>

        <div className="divider text-red-500 sm:text-xl"></div>
        <TextField
          variant="outlined"
          label="Current Home Address"
          value={currentHomeAddress}
          onChange={(e) => setCurrentHomeAddress(e.target.value)}
          fullWidth
          sx={{ marginY: 1 }}
        />

        <div className="divider text-red-500 sm:text-xl"></div>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"start"}
          justifyContent={{ md: "space-between", xs: "center" }}
        >
          <Typography variant="h6">Year / Month at Present Address</Typography>

          <Stack flexDirection={"row"}>
            <TextField
              sx={{ marginLeft: { xs: 0, md: 5 } }}
              variant="outlined"
              label="Years"
              value={yrAtPresentAddress}
              onChange={(e) => setYrAtPresentAddress(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: { xs: 1, md: 5 } }}
              variant="outlined"
              label="Months"
              value={mnAtPresentAddress}
              onChange={(e) => setMnAtPresentAddress(e.target.value)}
            />
          </Stack>
        </Stack>

        <div className="divider text-red-500 sm:text-xl"></div>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"start"}
          justifyContent={{ md: "space-between", xs: "center" }}
          my={1}
        >
          <Typography variant="h6">Residence Contact Number</Typography>
          <TextField
            sx={{ marginLeft: { xs: 0, md: 5 } }}
            variant="outlined"
            label="Area Code"
            value={residenceAreaCode}
            onChange={(e) => setResidenceAreaCode(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: { xs: 0, md: 5 } }}
            variant="outlined"
            label="Phone 1"
            value={residensePhone1}
            onChange={(e) => setResidensePhone1(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: { xs: 0, md: 5 } }}
            variant="outlined"
            label="Phone 2"
            value={residensePhone2}
            onChange={(e) => setResidensePhone2(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: { xs: 0, md: 5 } }}
            variant="outlined"
            label="Mobile"
            value={residenseMobile}
            onChange={(e) => setResidenseMobile(e.target.value)}
          />
        </Stack>

        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"start"}
          justifyContent={{ md: "space-between", xs: "center" }}
        >
          <TextField
            // sx={{ marginLeft: { xs: 0, md: 5 } }}
            variant="outlined"
            label="Fax"
            fullWidth
            value={fax}
            onChange={(e) => setFax(e.target.value)}
          />
          <TextField
            sx={{ marginLeft: { xs: 0, md: 5 } }}
            variant="outlined"
            label="Personal Email"
            value={personalEmail}
            fullWidth
            onChange={(e) => setPersonalEmail(e.target.value)}
          />
        </Stack>

        <TextField
          variant="outlined"
          label="Permanent Home Address"
          value={permanentHomeAddress}
          fullWidth
          onChange={(e) => setPermanentHomeAddress(e.target.value)}
          sx={{ mt: 2 }}
        />

        <div className="divider text-red-500 sm:text-xl"></div>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"start"}
          justifyContent={{ md: "space-between", xs: "center" }}
          sx={{ mt: 1 }}
        >
          <Typography variant="h6">Year / Month at Present Address</Typography>

          <Stack flexDirection={"row"}>
            <TextField
              sx={{ marginLeft: { xs: 0, md: 5 } }}
              variant="outlined"
              label="Years"
              value={permanentYrAtPresentAddress}
              onChange={(e) => setpermanentYrAtPresentAddress(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: { xs: 2, md: 5 } }}
              variant="outlined"
              label="Months"
              value={permanentMnAtPresentAddress}
              onChange={(e) => setpermanentMnAtPresentAddress(e.target.value)}
            />
          </Stack>
        </Stack>

        <div className="divider text-red-500 sm:text-xl"></div>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"start"}
          justifyContent={{ md: "space-between", xs: "center" }}
          sx={{ mt: 1 }}
        >
          <Typography variant="h6">Permanent Contact Number</Typography>
          <Stack flexDirection={"row"}>
            <TextField
              sx={{ marginLeft: { xs: 0, md: 5 } }}
              variant="outlined"
              label="Area Code"
              value={permanentResidenceAreaCode}
              onChange={(e) => setPermanentResidenceAreaCode(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: { xs: 2, md: 5 } }}
              variant="outlined"
              label="Phone 1"
              value={permanentResidensePhone1}
              onChange={(e) => setPermanentResidensePhone1(e.target.value)}
            />
          </Stack>

          <Stack flexDirection={"row"}>
            <TextField
              sx={{ marginLeft: { xs: 0, md: 5 } }}
              variant="outlined"
              label="Phone 2"
              value={permanentResidensePhone2}
              onChange={(e) => setPermanentResidensePhone2(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: { xs: 2, md: 5 } }}
              variant="outlined"
              label="Mobile"
              value={permanentResidenseMobile}
              onChange={(e) => setPermanentResidenseMobile(e.target.value)}
            />
          </Stack>
        </Stack>

        <TextField
          variant="outlined"
          label="Previous Home Address"
          value={previousHomeAddress}
          onChange={(e) => setPreviousHomeAddress(e.target.value)}
          fullWidth
          sx={{ mt: 1 }}
        />

        <div className="divider text-red-500 sm:text-xl"></div>
        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"start"}
          justifyContent={{ md: "space-between", xs: "center" }}
          sx={{ mt: 1 }}
        >
          <Typography variant="h6">Year / Month at Present Address</Typography>
          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
          >
            <Stack flexDirection={"row"}>
              <TextField
                sx={{ marginLeft: { xs: 0, md: 5 } }}
                variant="outlined"
                label="Years"
                value={yrsAtPreviousHomeAddress}
                onChange={(e) => setYrsAtPreviousHomeAddress(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: { xs: 2, md: 5 } }}
                variant="outlined"
                label="Months"
                value={mmAtPreviousHomeAddress}
                onChange={(e) => setMmAtPreviousHomeAddress(e.target.value)}
              />
            </Stack>
          </Stack>
        </Stack>

        <TextField
          variant="outlined"
          label="Provincial Home Address"
          fullWidth
          value={provincialHomeAddress}
          onChange={(e) => setProvincialHomeAddress(e.target.value)}
          sx={{ mt: 1 }}
        />

        {/* Provincial Contact */}

        <div className="divider text-red-500 sm:text-xl"></div>

        <Stack
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"start"}
          justifyContent={{ md: "space-between", xs: "center" }}
          sx={{ mt: 1 }}
        >
          <Typography variant="h6">Provincial Contact Number</Typography>

          <Stack flexDirection={"row"}>
            <TextField
              sx={{ marginLeft: { xs: 0, md: 5 } }}
              variant="outlined"
              label="Area Code"
              value={provincialAreaCode}
              onChange={(e) => setProvincialAreaCode(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: { xs: 2, md: 5 } }}
              variant="outlined"
              label="Phone 1"
              value={provincialPhone1}
              onChange={(e) => setProvincialPhone1(e.target.value)}
            />
          </Stack>

          <Stack flexDirection={"row"}>
            <TextField
              sx={{ marginLeft: { xs: 0, md: 5 } }}
              variant="outlined"
              label="Phone 2"
              value={provincialPhone2}
              onChange={(e) => setProvincialPhone2(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: { xs: 2, md: 5 } }}
              variant="outlined"
              label="Mobile"
              value={provincialMobile}
              onChange={(e) => setProvincialMobile(e.target.value)}
            />
          </Stack>
        </Stack>

        <div className="divider text-red-500 sm:text-xl"></div>
        <Card sx={{ mt: 2 }}>
          <Typography variant="h6">Work And Finances</Typography>
          <FormControl required sx={{ display: "block", my: { xs: 2, md: 0 } }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Source of Income
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={sourceOfIncome}
              onChange={(e) => setsourceOfIncome(e.target.value)}
            >
              <FormControlLabel
                value="employment"
                control={<Radio />}
                label="Employment"
              />
              <FormControlLabel
                value="business"
                control={<Radio />}
                label="Business"
              />
            </RadioGroup>
          </FormControl>

          <FormControl required sx={{ display: "block", my: { xs: 2, md: 0 } }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Permanent?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={isPermanent}
              onChange={(e) => setIsPermanent(e.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl required sx={{ display: "block", my: { xs: 2, md: 0 } }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Part Owner
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={partOwner}
              onChange={(e) => setPartOwner(e.target.value)}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <TextField
                sx={{ display: isPartOwner }}
                variant="outlined"
                label="% of Ownership"
                value={percentOfOwnership}
                onChange={(e) => setPercentOfOwnership(e.target.value)}
              />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>

          <FormControl required sx={{ display: "block", my: { xs: 2, md: 0 } }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Company Type
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={companyType}
              onChange={(e) => setCompanyType(e.target.value)}
            >
              <FormControlLabel
                value="private"
                control={<Radio />}
                label="Private"
              />
              <FormControlLabel
                value="government"
                control={<Radio />}
                label="Government"
              />

              <FormControlLabel
                value="others"
                control={<Radio />}
                label="Others"
              />
              <TextField
                variant="outlined"
                label="% of Ownership"
                value={othersCompanyType}
                onChange={(e) => setOthersCompanyType(e.target.value)}
              />
            </RadioGroup>
          </FormControl>

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
            my={2}
          >
            <TextField
              variant="outlined"
              label="Employer / Business Name"
              value={employerOrBusinessName}
              onChange={(e) => setEmployerOrBusinessName(e.target.value)}
            />

            <TextField
              variant="outlined"
              label="Nature of Business"
              value={natureOfBusiness}
              onChange={(e) => setNatureOfBusiness(e.target.value)}
            />

            <TextField
              variant="outlined"
              label="Position"
              value={yourPosition}
              onChange={(e) => setYourPosition(e.target.value)}
            />
          </Stack>

          <FormControl required sx={{ display: "block" }}>
            <FormLabel id="demo-row-radio-buttons-group-label">Rank</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
            >
              <FormControlLabel
                value="staff"
                control={<Radio />}
                label="Staff"
              />
              <FormControlLabel
                value="junior-officer"
                control={<Radio />}
                label="Junior Officer"
              />

              <FormControlLabel
                value="middle-management"
                control={<Radio />}
                label="Middle Management"
              />

              <FormControlLabel
                value="production-worker"
                control={<Radio />}
                label="Production Worker"
              />

              <FormControlLabel
                value="service-employee"
                control={<Radio />}
                label="Service Employee (e.g Doctor, Nurse, Legal Counsel, etc)"
              />

              <FormControlLabel
                value="president"
                control={<Radio />}
                label="President / General Manager"
              />

              <FormControlLabel
                value="vise-president"
                control={<Radio />}
                label="Vise President"
              />

              <FormControlLabel
                value="senior-manager"
                control={<Radio />}
                label="Senior Manager"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            variant="outlined"
            label="Employer / Business Address"
            fullWidth
            value={employerOrBusinessAddress}
            onChange={(e) => setEmployerOrBusinessAddress(e.target.value)}
          />

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
            my={2}
          >
            <Typography variant="h6">
              Years And Month At Present Company
            </Typography>

            <Stack
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={"start"}
              justifyContent={{ md: "space-between", xs: "center" }}
            >
              <Stack flexDirection={"row"}>
                <TextField
                  sx={{ marginLeft: { xs: 0, md: 5 } }}
                  variant="outlined"
                  label="Years"
                  value={yrsAtPresentCompany}
                  onChange={(e) => setYrsAtPresentCompany(e.target.value)}
                />
                <TextField
                  sx={{ marginLeft: { xs: 2, md: 5 } }}
                  variant="outlined"
                  label="Months"
                  value={monthsAtPresentCompany}
                  onChange={(e) => setMonthsAtPresentCompany(e.target.value)}
                />
              </Stack>
            </Stack>
          </Stack>

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
            my={2}
          >
            <Typography variant="h6">Office Contact Number</Typography>

            <Stack
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={"start"}
              justifyContent={{ md: "space-between", xs: "center" }}
            >
              <Stack flexDirection={"row"}>
                <TextField
                  sx={{ marginLeft: 2 }}
                  variant="outlined"
                  label="Area Code"
                  value={officeAreaCode}
                  onChange={(e) => setOfficeAreaCode(e.target.value)}
                />
                <TextField
                  sx={{ marginLeft: 2 }}
                  variant="outlined"
                  label="Phone 1"
                  value={officePhone1}
                  onChange={(e) => setOfficePhone1(e.target.value)}
                />
              </Stack>

              <Stack flexDirection={"row"}>
                <TextField
                  sx={{ marginLeft: 2 }}
                  variant="outlined"
                  label="Phone 2"
                  value={officePhone2}
                  onChange={(e) => setOfficePhone2(e.target.value)}
                />
                <TextField
                  sx={{ marginLeft: 2 }}
                  variant="outlined"
                  label="Office Mobile"
                  value={officeMobile}
                  onChange={(e) => setOfficeMobile(e.target.value)}
                />
              </Stack>
            </Stack>
          </Stack>

          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={{ xs: "flex-start", md: "flex-end" }}
          >
            <TextField
              sx={{ marginLeft: 2 }}
              variant="outlined"
              label="Office Fax"
              value={officeFax}
              onChange={(e) => setOfficeFax(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: 2 }}
              variant="outlined"
              label="Office Email"
              value={officeEmail}
              onChange={(e) => setOfficeEmail(e.target.value)}
            />
          </Stack>

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
            my={1}
          >
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Monthly Income (based on 1 Month payslip)
            </Typography>
            <TextField
              sx={{ marginLeft: 2 }}
              variant="outlined"
              label="Basic ₱"
              value={monthlyBasicIncome}
              onChange={(e) => setMonthlyBasicIncome(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: 2 }}
              variant="outlined"
              label="Allowance ₱"
              value={montylyAllowance}
              onChange={(e) => setMontylyAllowance(e.target.value)}
            />
            <TextField
              sx={{ marginLeft: 2 }}
              variant="outlined"
              label="Family Income ₱"
              value={monthlyFamilyIncome}
              onChange={(e) => setMonthlyFamilyIncome(e.target.value)}
            />
          </Stack>

          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Monthly Household Expense"
            fullWidth
            value={monthlyHouseHoldExpense}
            onChange={(e) => setMonthlyHouseHoldExpense(e.target.value)}
          />

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
            my={1}
          >
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Previous Employer / Business Name
            </Typography>
            <TextField
              sx={{ marginLeft: 2 }}
              variant="outlined"
              label="Name"
              value={previousEmployerOrBusinessName}
              onChange={(e) =>
                setPreviousEmployerOrBusinessName(e.target.value)
              }
            />
          </Stack>

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
          >
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Years / Months at Previous Company
            </Typography>

            <Stack
              flexDirection={{ xs: "row", md: "row" }}
              alignItems={"start"}
              justifyContent={{ md: "space-between", xs: "center" }}
            >
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Year"
                value={yrsAtPreviousCompany}
                onChange={(e) => setYrsAtPreviousCompany(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Month"
                value={monthsAtPreviousCompany}
                onChange={(e) => setMonthsAtPreviousCompany(e.target.value)}
              />
            </Stack>
          </Stack>

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
            my={1}
          >
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Previous Company Contact Number
            </Typography>

            <Stack
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={"start"}
              justifyContent={{ md: "space-between", xs: "center" }}
            >
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Area Code"
                value={previousCompanyAreaCode}
                onChange={(e) => setPreviousCompanyAreaCode(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Phone 1"
                value={previousCompanyPhone1}
                onChange={(e) => setPreviousCompanyPhone1(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Mobile"
                value={previousCompanyMobile}
                onChange={(e) => setPreviousCompanyMobile(e.target.value)}
              />
            </Stack>
          </Stack>
        </Card>

        <Card sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ marginLeft: 2 }}>
            Spouse Details
          </Typography>
          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Employer / Business Name"
            value={spouseEmployerOrBusinessName}
            onChange={(e) => setSpouseEmployerOrBusinessName(e.target.value)}
          />

          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Designation / Title / Rank"
            value={spouseTitleOrRank}
            onChange={(e) => setspouseTitleOrRank(e.target.value)}
          />

          <TextField
            sx={{ marginLeft: 2 }}
            variant="outlined"
            label="Monthly Income"
            value={spouseMonthlyIncome}
            onChange={(e) => setSpouseMonthlyIncome(e.target.value)}
          />

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
            my={1}
          >
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Office Contact Number
            </Typography>

            <Stack flexDirection={"row"}>
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Area Code"
                value={spouseOfficeAreaCode}
                onChange={(e) => setspouseOfficeAreaCode(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Phone 1"
                value={spouseOfficePhone1}
                onChange={(e) => setSpouseOfficePhone1(e.target.value)}
              />
            </Stack>

            <Stack flexDirection={"row"}>
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Phone 2"
                value={spouseOfficePhone2}
                onChange={(e) => setspouseOfficePhone2(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Mobile"
                value={spouceOfficeMobile}
                onChange={(e) => setspouceOfficeMobile(e.target.value)}
              />
            </Stack>
          </Stack>

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
            my={1}
          >
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Years / Months at Present Company
            </Typography>

            <Stack flexDirection={"row"}>
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Years"
                value={spouseYrsAtPresentCompany}
                onChange={(e) => setSpouseYrsAtPresentCompany(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Months"
                value={spouseMonthsAtPresentCompany}
                onChange={(e) =>
                  setspouseMonthsAtPresentCompany(e.target.value)
                }
              />
            </Stack>
          </Stack>
        </Card>

        <Card sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ marginLeft: 2 }}>
            References
          </Typography>
          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
            my={1}
          >
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Bank / Credit References
            </Typography>
            <Stack
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={"center"}
            >
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Bank Name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Branch"
                value={bankBranchName}
                onChange={(e) => setBankBranchName(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Account Type"
                value={bankAccountType}
                onChange={(e) => setBankAccountType(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Account Number"
                value={bankAccountNumber}
                onChange={(e) => setBankAccountNumber(e.target.value)}
              />
            </Stack>
          </Stack>

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
            my={1}
          >
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Credit Card Owned / Other Loans
            </Typography>

            <Stack
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={"center"}
            >
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Credit Card No. / PN No."
                value={creditCardNo}
                onChange={(e) => setcreditCardNo(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Issuer's Name / Bank Name"
                value={issuerNameOrBankName}
                onChange={(e) => setIssuerNameOrBankName(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Member Since / Loan Granted (mm/yyyy)"
                value={memberSinceAndLoanGranted}
                onChange={(e) => setMemberSinceAndLoanGranted(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Card Expiry / Loan Maturity (mm/yyyy)"
                value={creditCardExpiryAndLoanMaturity}
                onChange={(e) =>
                  setCreditCardExpiryAndLoanMaturity(e.target.value)
                }
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Card Limit / Loan Amount"
                value={cardLimitAndLoanAmount}
                onChange={(e) => setCardLimitAndLoanAmount(e.target.value)}
              />
            </Stack>
          </Stack>

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
            my={1}
          >
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Personal / Trade Reference
            </Typography>

            <Stack
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={"center"}
            >
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Name"
                value={personalReferenceName}
                onChange={(e) => setPersonalReferenceName(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Relationship"
                value={personalReferenceRelation}
                onChange={(e) => setPersonalReferenceRelation(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Landline / Mobile"
                value={personalReferenceMobile}
                onChange={(e) => setPersonalReferenceMobile(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Address"
                value={personalReferenceAddress}
                onChange={(e) => setPersonalReferenceAddress(e.target.value)}
              />
            </Stack>
          </Stack>

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
            my={1}
          >
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Personal / Trade Reference
            </Typography>

            <Stack
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={"center"}
            >
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Name"
                value={personalReferenceName2}
                onChange={(e) => setPersonalReferenceName2(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Relationship"
                value={personalReferenceRelation2}
                onChange={(e) => setPersonalReferenceRelation2(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Landline / Mobile"
                value={personalReferenceMobile2}
                onChange={(e) => setPersonalReferenceMobile2(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Address"
                value={personalReferenceAddress2}
                onChange={(e) => setPersonalReferenceAddress2(e.target.value)}
              />
            </Stack>
          </Stack>

          <Stack
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={"start"}
            justifyContent={{ md: "space-between", xs: "center" }}
            my={1}
          >
            <Typography variant="h6" sx={{ marginLeft: 2 }}>
              Personal / Trade Reference
            </Typography>

            <Stack
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={"center"}
            >
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Name"
                value={personalReferenceName3}
                onChange={(e) => setPersonalReferenceName3(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Relationship"
                value={personalReferenceRelation3}
                onChange={(e) => setPersonalReferenceRelation3(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Landline / Mobile"
                value={personalReferenceMobile3}
                onChange={(e) => setPersonalReferenceMobile3(e.target.value)}
              />
              <TextField
                sx={{ marginLeft: 2 }}
                variant="outlined"
                label="Address"
                value={personalReferenceAddress3}
                onChange={(e) => setPersonalReferenceAddress3(e.target.value)}
              />
            </Stack>
          </Stack>
        </Card>

        <button
          type="submit"
          className="btn btn-neutral w-full"
          onClick={modifyPdf}
        >
          Generate PDF
        </button>
      </form>
    </Card>
  );
};

export default CtbcForm;