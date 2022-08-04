const fields = [
  {
    id: "firstName",
    placeholder: "First name",
    required: true,
    type: "text",
    label: "First Name",
  },
  {
    id: "lastName",
    placeholder: "Last name",
    required: true,
    type: "text",
    label: "Last Name",
  },
  {
    id: "email",
    required: true,
    type: "email",
    placeholder: "Email",
    label: "Email Address",
  },
  {
    id: "phone",
    required: false,
    type: "tel",
    placeholder: "Phone",
    label: "Phone Number",
  },
];

export default fields;
