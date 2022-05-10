import React from "react";

function Navbar({ close }) {
  return (
    <div className="navs ">
      <nav class="navbar navbar-light bg-light">
        <div class="container">
          <div className="  d-flex ">
            <span class="navbar-brand mb-0 h1">
              contracts <span className="fs-5 lead">Plus</span>{" "}
            </span>
            <i class="fa-solid fa-house fs-5 mx-2 py-2"></i>

            <span className="text mx-3 fs-6">
              {" "}
              <b>Document Name</b> <br />
              <p className="text-muted"> Saved, Today 2:20 pm </p>{" "}
            </span>
            <span className="fs-2">
              {" "}
              <i class="fa-solid fa-xmark"></i>{" "}
            </span>
          </div>

          <div>
            <i class="bi bi-code-square "> </i>{" "}
            <span className="me-2">Code View</span>
            <i class="fa-solid fa-circle px-2"></i>
            <span className="me-2">Draft </span>
            <i class="fa-solid fa-caret-down me-3"></i>{" "}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="profile"
              className="image"
            />{" "}
            <span className="px-1">Klera Vicky</span>
            <i class="fa-solid fa-caret-down px-2"></i>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-light bg-light shadow-lg p-0 mb-5 bg-white rounded ">
        <div class="container p-2 fs-5">
          <i class="fa-regular fa-file"></i>{" "}
          <i class="fa-solid fa-caret-down "></i>{" "}
          <i class="fa-regular fa-floppy-disk"></i>{" "}
          <i class="fa-solid fa-caret-down"></i>|{" "}
          <i class="fa-regular fa-folder"></i>{" "}
          <i class="fa-solid fa-caret-down"></i> |
          <i class="bi bi-type-bold"></i> <i class="fa-solid fa-italic"></i>{" "}
          <i class="fa-solid fa-underline"></i>{" "}
          <i class="fa-solid fa-strikethrough"></i> |{" "}
          <i class="fa-solid fa-list"></i>
          <i class="fa-solid fa-list-ol"></i> | <span>paragraph </span>{" "}
          <i class="fa-solid  fa-caret-down"></i> |{" "}
          <i class="fa-solid fa-i-cursor"></i>{" "}
          <i class="fa-solid fa-caret-down"></i>|{" "}
          <i class="fa-solid fa-file-invoice"></i> |{" "}
          <i class="bi bi-paperclip me-5 ">|</i>
          <i class="fa-solid fa-users"></i> 2{" "}
          <i class="fa-solid fa-caret-down"></i> |
          <button className="btn btn-outline" onClick={() => close(true)}>
            {" "}
            <i class="fa-solid fa-file-signature"></i> Add Signature{" "}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
