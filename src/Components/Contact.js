import { Snackbar } from "@material-ui/core";
import React, { useState } from "react";
import "../css/styles.css";
import { Firebase } from "../Firebase";
import MuiAlert from "@material-ui/lab/Alert";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  const handleContact = (e) => {
    e.preventDefault();
    Firebase.firestore()
      .collection("contact")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setOpen(true);
      });
  };

  return (
    <div onClick={() => setOpen(false)}>
      <section class="contact section" id="contact">
        <h2 class="section-title">Contact</h2>
        <div class="contact__container bd-grid">
          <form onSubmit={handleContact} class="contact__form">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              class="contact__input"
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              class="contact__input"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name=""
              id=""
              cols="0"
              rows="10"
              class="contact__input"
              required
            ></textarea>
            <input
              type="submit"
              value="Submit"
              class="contact__button button"
            />
          </form>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Message Sented Successfully
          </Alert>
        </Snackbar>
      </section>
    </div>
  );
}

export default Contact;
