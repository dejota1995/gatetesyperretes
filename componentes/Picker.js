import React from "react";
import SelectBox from "react-native-multi-selectbox";

export default function CustomPicker({
    onValueChange,
    selected,
    options,
    selectedValues,
    onMultiChange
}) {
    return (
        <SelectBox
         label="Selecciona la raza"
         options={options}
         selectedValues={selectedValues}
         onMultiSelect={onMultiChange()}
         onTapClose={onMultiChange()}
         isMulti
        />
    )
}

