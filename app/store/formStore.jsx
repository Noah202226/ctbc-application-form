import { create } from "zustand";

export const formStore = create((set, get) => ({
  clientBy: "",
  handleClientBy: (e) => set({ clientBy: e }),
  formId: "",
  handleFormId: (e) => set({ formId: e }),
  clientAccessToken: "",
  handleClientAccessToken: (e) => set({ clientAccessToken: e }),
  renderPdfToken: "",
  handleRenderPdfToken: (e) => set({ renderPdfToken: e }),

  // Form 1 state
  desiredAmount: "",
  handleDesiredAmount: (e) => set({ desiredAmount: parseInt(e, 10) }),

  loanTerm: "",
  handleLoanTerm: (e) => set({ loanTerm: e }),

  loanType: "",
  handleLoanType: (e) => set({ loanType: e }),

  purposeOfLoan: "",
  handlePurposeOfLoan: (e) => set({ purposeOfLoan: e }),

  sourceOfLoan: "",
  handleSourceOfLoan: (e) => set({ sourceOfLoan: e }),

  isBranch: "none",
  handleIsBranch: (e) => set({ isBranch: e }),
  branchName: "",
  handleBranchName: (e) => set({ branchName: e }),

  isAgency: "none",
  handleIsAgency: (e) => set({ isAgency: e }),
  agencyName: "",
  handleAgencyName: (e) => set({ agencyName: e }),

  isOthers: "none",
  handleIsOthers: (e) => set({ isOthers: e }),
  otherSourceName: "",
  handleOtherSourceName: (e) => set({ otherSourceName: e }),

  handleCheckSource: () => set(() => ({ sourceOfLoan: "new-source" })),

  //   Form 2 States
  gender: "",
  handleGender: (e) => set({ gender: e }),
  title: "",
  setTitle: (e) => set({ title: e }),
  firstName: "",
  setFirstName: (e) => set({ firstName: e }),
  middleName: "",
  setMiddleName: (e) => set({ middleName: e }),
  lastName: "",
  setLastName: (e) => set({ lastName: e }),

  aliasName: "",
  setAliasName: (e) => set({ aliasName: e }),
  birthdate: "",
  setBirthDate: (e) => set({ birthdate: e }),
  placeOfBirth: "",
  setPlaceOfBirth: (e) => set({ placeOfBirth: e }),

  maritalStatus: "",
  setMaritalStatus: (e) => set({ maritalStatus: e }),
  spouseName: "",
  setSpouseName: (e) => set({ spouseName: e }),
  isSpouseWorking: "",
  setIsSpouseWorking: (e) => set({ isSpouseWorking: e }),
  noOfChild: "",
  setNoOfChild: (e) => set({ noOfChild: e }),
  noOfDependents: "",
  setNoOfDependents: (e) => set({ noOfDependents: e }),
  mothersFirstname: "",
  setMothersFirstName: (e) => set({ mothersFirstname: e }),
  mothersMiddleName: "",
  setMothersMiddleName: (e) => set({ mothersMiddleName: e }),
  mothersLastname: "",
  setMothersLastName: (e) => set({ mothersLastname: e }),
  isPhResident: "",
  setIsPhResident: (e) => set({ isPhResident: e }),
  nationality: "",
  setNationality: (e) => set({ nationality: e }),
  sssNo: "",
  setSssNo: (e) => set({ sssNo: e }),
  tinNo: "",
  setTinNo: (e) => set({ tinNo: e }),
  educationAttain: "",
  setEducationAttain: (e) => set({ educationAttain: e }),

  residenceType: "",
  setResidenceType: (e) => set({ residenceType: e }),

  isAmortization: "none",
  setIsMortization: (e) => set({ isAmortization: e }),
  amortizationPerMonth: "",
  setAmortizationPerMonth: (e) => set({ amortizationPerMonth: e }),

  rentPerMonth: "",
  isRented: "none",
  setIsRented: (e) => set({ isRented: e }),
  setRentPerMonth: (e) => set({ rentPerMonth: e }),

  isOtherResidency: "none",
  setIsOtherResidency: (e) => set({ isOtherResidency: e }),
  otherResidensy: "",
  setotherResidensy: (e) => set({ otherResidensy: e }),

  currentHomeAddress: "",
  setCurrentHomeAddress: (e) => set({ currentHomeAddress: e }),

  yrAtPresentAddress: "",
  setYrAtPresentAddress: (e) => set({ yrAtPresentAddress: e }),
  mnAtPresentAddress: "",
  setMnAtPresentAddress: (e) => set({ mnAtPresentAddress: e }),

  residenceAreaCode: "",
  setResidenceAreaCode: (e) => set({ residenceAreaCode: e }),
  residensePhone1: "",
  setResidensePhone1: (e) => set({ residensePhone1: e }),
  residensePhone2: "",
  setResidensePhone2: (e) => set({ residensePhone2: e }),
  residenseMobile: "",
  setResidenseMobile: (e) => set({ residenseMobile: e }),

  fax: "",
  setFax: (e) => set({ fax: e }),
  personalEmail: "",
  setPersonalEmail: (e) => set({ personalEmail: e }),
  permanentHomeAddress: "",
  setPermanentHomeAddress: (e) => set({ permanentHomeAddress: e }),

  permanentYrAtPresentAddress: "",
  setpermanentYrAtPresentAddress: (e) =>
    set({ permanentYrAtPresentAddress: e }),
  permanentMnAtPresentAddress: "",
  setpermanentMnAtPresentAddress: (e) =>
    set({ permanentMnAtPresentAddress: e }),

  permanentResidenceAreaCode: "",
  setPermanentResidenceAreaCode: (e) => set({ permanentResidenceAreaCode: e }),
  permanentResidensePhone1: "",
  setPermanentResidensePhone1: (e) => set({ permanentResidensePhone1: e }),
  permanentResidensePhone2: "",
  setPermanentResidensePhone2: (e) => set({ permanentResidensePhone2: e }),
  permanentResidenseMobile: "",
  setPermanentResidenseMobile: (e) => set({ permanentResidenseMobile: e }),

  previousHomeAddress: "",
  setPreviousHomeAddress: (e) => set({ previousHomeAddress: e }),

  yrsAtPreviousHomeAddress: "",
  setYrsAtPreviousHomeAddress: (e) => set({ yrsAtPreviousHomeAddress: e }),
  mmAtPreviousHomeAddress: "",
  setMmAtPreviousHomeAddress: (e) => set({ mmAtPreviousHomeAddress: e }),

  provincialHomeAddress: "",
  setProvincialHomeAddress: (e) => set({ provincialHomeAddress: e }),

  provincialAreaCode: "",
  setProvincialAreaCode: (e) => set({ provincialAreaCode: e }),
  provincialPhone1: "",
  setProvincialPhone1: (e) => set({ provincialPhone1: e }),
  provincialPhone2: "",
  setProvincialPhone2: (e) => set({ provincialPhone2: e }),
  provincialMobile: "",
  setProvincialMobile: (e) => set({ provincialMobile: e }),

  // Finances states
  sourceOfIncome: "",
  setSourceOfIncome: (e) => set({ sourceOfIncome: e }),
  isPermanent: "",
  setIsPermanent: (e) => set({ isPermanent: e }),

  partOwner: "",
  setPartOwner: (e) => set({ partOwner: e }),
  isPartOwner: "none",
  setIsPartOwner: (e) => set({ isPartOwner: e }),
  percentOfOwnership: "",
  setPercentOfOwnership: (e) => set({ percentOfOwnership: e }),
  companyType: "",
  setCompanyType: (e) => set({ companyType: e }),
  othersCompanyType: "",
  setOthersCompanyType: (e) => set({ othersCompanyType: e }),
  isOtherCompanyType: "none",
  setIsOtherCompanyType: (e) => set({ isOtherCompanyType: e }),

  employerOrBusinessName: "",
  setEmployerOrBusinessName: (e) => set({ employerOrBusinessName: e }),
  natureOfBusiness: "",
  setNatureOfBusiness: (e) => set({ natureOfBusiness: e }),
  yourPosition: "",
  setYourPosition: (e) => set({ yourPosition: e }),

  rank: "",
  setRank: (e) => set({ rank: e }),
  employerOrBusinessAddress: "",
  setEmployerOrBusinessAddress: (e) => set({ employerOrBusinessAddress: e }),

  yrsAtPresentCompany: "",
  setYrsAtPresentCompany: (e) => set({ yrsAtPresentCompany: e }),
  monthsAtPresentCompany: "",
  setMonthsAtPresentCompany: (e) => set({ monthsAtPresentCompany: e }),

  officeAreaCode: "",
  setOfficeAreaCode: (e) => set({ officeAreaCode: e }),
  officePhone1: "",
  setOfficePhone1: (e) => set({ officePhone1: e }),
  officePhone2: "",
  setOfficePhone2: (e) => set({ officePhone2: e }),
  officeMobile: "",
  setOfficeMobile: (e) => set({ officeMobile: e }),
  officeFax: "",
  setOfficeFax: (e) => set({ officeFax: e }),
  officeEmail: "",
  setOfficeEmail: (e) => set({ officeEmail: e }),

  monthlyBasicIncome: "",
  setMonthlyBasicIncome: (e) => set({ monthlyBasicIncome: e }),
  monthlyAllowance: "",
  setMonthlyAllowance: (e) => set({ monthlyAllowance: e }),
  monthlyFamilyIncome: "",
  setMonthlyFamilyIncome: (e) => set({ monthlyFamilyIncome: e }),
  monthlyHouseHoldExpense: "",
  setMonthlyHouseHoldExpense: (e) => set({ monthlyHouseHoldExpense: e }),
  previousEmployerOrBusinessName: "",
  setPreviousEmployerOrBusinessName: (e) =>
    set({ previousEmployerOrBusinessName: e }),
  yrsAtPreviousCompany: "",
  setYrsAtPreviousCompany: (e) => set({ yrsAtPreviousCompany: e }),
  monthsAtPreviousCompany: "",
  setMonthsAtPreviousCompany: (e) => set({ monthsAtPreviousCompany: e }),
  previousCompanyAreaCode: "",
  setPreviousCompanyAreaCode: (e) => set({ previousCompanyAreaCode: e }),
  previousCompanyPhone1: "",
  setPreviousCompanyPhone1: (e) => set({ previousCompanyPhone1: e }),
  previousCompanyMobile: "",
  setPreviousCompanyMobile: (e) => set({ previousCompanyMobile: e }),
  spouseEmployerOrBusinessName: "",
  setSpouseEmployerOrBusinessName: (e) =>
    set({ spouseEmployerOrBusinessName: e }),
  spouseTitleOrRank: "",
  setspouseTitleOrRank: (e) => set({ spouseTitleOrRank: e }),
  spouseMonthlyIncome: "",
  setSpouseMonthlyIncome: (e) => set({ spouseMonthlyIncome: e }),
  spouseOfficeAreaCode: "",
  setspouseOfficeAreaCode: (e) => set({ spouseOfficeAreaCode: e }),
  spouseOfficePhone1: "",
  setSpouseOfficePhone1: (e) => set({ spouseOfficePhone1: e }),
  spouseOfficePhone2: "",
  setspouseOfficePhone2: (e) => set({ spouseOfficePhone2: e }),
  spouseOfficeMobile: "",
  setSpouseOfficeMobile: (e) => set({ spouseOfficeMobile: e }),
  spouseYrsAtPresentCompany: "",
  setSpouseYrsAtPresentCompany: (e) => set({ spouseYrsAtPresentCompany: e }),
  spouseMonthsAtPresentCompany: "",
  setspouseMonthsAtPresentCompany: (e) =>
    set({ spouseMonthsAtPresentCompany: e }),

  // References
  bankName: "",
  setBankName: (e) => set({ bankName: e }),
  bankBranchName: "",
  setBankBranchName: (e) => set({ bankBranchName: e }),
  bankAccountType: "",
  setBankAccountType: (e) => set({ bankAccountType: e }),
  bankAccountNumber: "",
  setBankAccountNumber: (e) => set({ bankAccountNumber: e }),

  creditCardNo: "",
  setcreditCardNo: (e) => set({ creditCardNo: e }),
  issuerNameOrBankName: "",
  setIssuerNameOrBankName: (e) => set({ issuerNameOrBankName: e }),
  memberSinceAndLoanGranted: "",
  setMemberSinceAndLoanGranted: (e) => set({ memberSinceAndLoanGranted: e }),
  creditCardExpiryAndLoanMaturity: "",
  setCreditCardExpiryAndLoanMaturity: (e) =>
    set({ creditCardExpiryAndLoanMaturity: e }),
  cardLimitAndLoanAmount: "",
  setCardLimitAndLoanAmount: (e) => set({ cardLimitAndLoanAmount: e }),

  personalReferenceName: "",
  setPersonalReferenceName: (e) => set({ personalReferenceName: e }),
  personalReferenceRelation: "",
  setPersonalReferenceRelation: (e) => set({ personalReferenceRelation: e }),
  personalReferenceMobile: "",
  setPersonalReferenceMobile: (e) => set({ personalReferenceMobile: e }),
  personalReferenceAddress: "",
  setPersonalReferenceAddress: (e) => set({ personalReferenceAddress: e }),

  personalReferenceName2: "",
  setPersonalReferenceName2: (e) => set({ personalReferenceName2: e }),
  personalReferenceRelation2: "",
  setPersonalReferenceRelation2: (e) => set({ personalReferenceRelation2: e }),
  personalReferenceMobile2: "",
  setPersonalReferenceMobile2: (e) => set({ personalReferenceMobile2: e }),
  personalReferenceAddress2: "",
  setPersonalReferenceAddress2: (e) => set({ personalReferenceAddress2: e }),

  personalReferenceName3: "",
  setPersonalReferenceName3: (e) => set({ personalReferenceName3: e }),
  personalReferenceRelation3: "",
  setPersonalReferenceRelation3: (e) => set({ personalReferenceRelation3: e }),
  personalReferenceMobile3: "",
  setPersonalReferenceMobile3: (e) => set({ personalReferenceMobile3: e }),
  personalReferenceAddress3: "",
  setPersonalReferenceAddress3: (e) => set({ personalReferenceAddress3: e }),

  clientMobileNo: "",
  setClientMobileNo: (e) => set({ clientMobileNo: e }),
  clientBestTimeTocall: "",
  setClientBestTimeToCall: (e) => set({ clientBestTimeTocall: e }),
  clientHeadEmail: "",
  setClientHeadEmail: (e) => set({ clientHeadEmail: e }),
}));
