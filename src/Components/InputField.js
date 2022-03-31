import { Input } from "@chakra-ui/react";
import React from "react";
import { Colors } from "../Constants/Colors";

const InputField = ({ value, setValue, placeholder }) => {
  return (
    <Input
      type="text"
      width={"100%"}
      variant={"flushed"}
      borderColor={Colors.primary}
      value={value}
      onChange={setValue}
      placeholder={placeholder}
      my={4}
    />
  );
};

export default InputField;
