import React from 'react';
import {StandardTextFieldProps} from '@material-ui/core';

interface FieldProps extends StandardTextFieldProps {
  helperText: string;
}
// const styles1 = theme => ({
//   notchedOutline: {
//     borderWidth: "1px",
//     borderColor: "yellow !important"
//   }
// });

const TextField: React.FC<FieldProps> = ({
  //
  label,
  placeholder,
  helperText,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ...custom
}) => {
  return null;
};

export default TextField;
