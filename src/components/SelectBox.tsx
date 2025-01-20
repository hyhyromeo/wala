import React, { useState, useEffect } from "react";

interface Option {
  id: string;
  label: string;
  checked: boolean;
}

interface SelectBoxProps {
  options: Option[];
  columns: number;
  defaultSelected?: string[];
}

function SelectBox({ options: initialOptions, columns = 3 }: SelectBoxProps) {
  // State for managing options including "Select All"
  const [options, setOptions] = useState<Option[]>(() => {
    // Initialize options with default selected values
    const opts = initialOptions.map((opt: Option) => ({
      ...opt,
    }));
    return [{ id: "selectAll", label: "Select All", checked: false }, ...opts];
  });

  // Calculate if "Select All" should be checked
  useEffect(() => {
    const nonSelectAllOptions = options.slice(1);
    // Check if all non-select-all options are checked
    const allChecked = nonSelectAllOptions.every((opt: Option) => opt.checked);

    // Only update if the "Select All" checked state needs to change
    if (options[0].checked !== allChecked) {
      setOptions((prev: Option[]) => [
        { ...prev[0], checked: allChecked },
        ...prev.slice(1),
      ]);
    }
  }, [options]); // Only depend on the checked status of non-select-all options

  // Handle checkbox changes
  const handleChange = (id: string) => {
    let newOptions: Option[];
    // If the id is "selectAll", toggle all checkboxes
    if (id === "selectAll") {
      const newChecked = !options[0].checked;
      newOptions = options.map((opt: Option) => ({
        ...opt,
        checked: newChecked,
      }));
    } else {
      // Toggle individual checkbox
      newOptions = options.map((opt: Option) =>
        opt.id === id ? { ...opt, checked: !opt.checked } : opt
      );
    }
    // Update options state
    setOptions(newOptions);
  };

  // Calculate grid layout
  const gridStyle = {
    width: "fit-content",
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: "8px",
    border: "1px solid lightgray",
    padding: "3%",
  };

  return (
    <div style={gridStyle}>
      {options.map(({ id, label, checked }) => (
        <label key={id}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => handleChange(id)}
          />
          {label}
        </label>
      ))}
    </div>
  );
}

export default SelectBox;
