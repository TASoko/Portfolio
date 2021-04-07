import React from "react";
import Navbar from "../components/Navbar/navbar";
import "./contact.css";

function Contact() {
  return (
    <div>
      <Navbar />
      <h1 id="contact">Contact</h1>
      <div class="row">
        <div class="col-6 bg-secondary">
          <form>
            <div class="form-group">
              <label for="exampleName">Name</label>
              <input class="form-control" id="exampleName" />
            </div>

            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            <div class="form-group">
              <label for="contactmessage">Message</label>
              <textarea
                class="form-control"
                id="contactmessage"
                rows="6"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
