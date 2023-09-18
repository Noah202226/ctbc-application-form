import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { formStore } from "../store/formStore";

const PersonalInfo = () => {
  const {
    gender,
    handleGender,
    title,
    setTitle,
    firstName,
    setFirstName,
    middleName,
    setMiddleName,
    lastName,
    setLastName,

    aliasName,
    setAliasName,
    birthdate,
    setBirthDate,
    placeOfBirth,
    setPlaceOfBirth,
  } = formStore((state) => state);
  return (
    <div>
      {/* Gender */}
      <FormControl required sx={{ display: "block" }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={gender}
          onChange={(e) => handleGender(e.target.value)}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />

          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>

      {/* Title */}
      <FormControl required sx={{ display: "block" }}>
        <FormLabel id="demo-row-radio-buttons-group-label">Title</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <FormControlLabel value="mr" control={<Radio />} label="Mr." />
          <FormControlLabel value="ms" control={<Radio />} label="Ms." />
          <FormControlLabel value="mrs" control={<Radio />} label="Mrs." />
        </RadioGroup>
      </FormControl>

      {/* Details */}
      <Stack flexDirection={{ md: "row", xs: "column" }} my={2}>
        <TextField
          type="text"
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          type="text"
          label="Middle Name"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
        <TextField
          type="text"
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Stack>

      <Stack flexDirection={{ md: "row", xs: "column" }} my={2}>
        <TextField
          type="text"
          label="Other Name (Alias)"
          value={aliasName}
          onChange={(e) => setAliasName(e.target.value)}
        />

        <TextField
          type="text"
          label="Date of Birth (dd/mm/yyy)"
          value={birthdate}
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <TextField
          type="text"
          label="Place of birth"
          value={placeOfBirth}
          onChange={(e) => setPlaceOfBirth(e.target.value)}
        />
      </Stack>
    </div>
  );
};
export default PersonalInfo;
