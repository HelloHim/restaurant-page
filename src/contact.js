export function createContactPage() {
  const content = document.getElementById("content");

  const contactPage = document.createElement("div");
  contactPage.id = "contact-page";

  const header = document.createElement("h1");
  header.textContent = "Get in touch with us";

  const para = document.createElement("p");
  para.textContent =
    "Have any questions or need assistance? We're here to help! Fill out the form below, and our team will get back to you as soon as possible.";

  const form = document.createElement("form");
  form.id = "contact-form";
  form.noValidate = false;

  const fields = [
    { id: "first-name", type: "text", placeholder: "First Name", required: true },
    { id: "last-name", type: "text", placeholder: "Last Name", required: true },
    { id: "email", type: "email", placeholder: "E-Mail", required: true },
    { id: "telephone", type: "tel", placeholder: "Telephone Number", required: false },
  ];

  fields.forEach(({ id, type, placeholder, required }) => {
    const input = document.createElement("input");
    input.id = id;
    input.name = id;
    input.type = type;
    input.placeholder = placeholder;
    input.required = required;
    form.append(input);
  });

  const message = document.createElement("textarea");
  message.id = "message";
  message.name = "message";
  message.rows = 3;
  message.placeholder = "Please write down your message for us";
  form.append(message);

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Submit";
  form.append(submit);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.reset();
  });

  contactPage.append(header, para, form);
  content.append(contactPage);
}
