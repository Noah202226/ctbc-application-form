import { create } from "zustand";

export const formStore = create((set, get) => ({
  // Form 1 state
  desiredAmount: "",
  handleDesiredAmount: (e) => set({ desiredAmount: e }),

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
}));
