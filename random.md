          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              About
            </a>
            <a className="navbar-brand" href="#">
              Portfolio
            </a>
            <a className="navbar-brand" href="#">
              Contact
            </a>
          </div>


  <div className="collapse navbar-collapse" 
          id="navbarNav">
          <a className="nav-link" href="index.html">
            Home
          </a>{" "}
          <span className="sr-only">(current)</span>
          <a className="nav-link" href="contact.html">
            Contact
          </a>
          <a className="nav-link" href="portfolio.html">
            Portfolio
          </a>

          <div class="card col-sm" style="width: 18rem;">
    <img src="Password-Generator-Image.png" class="card-img-top" alt="A screenshot of a password generator">
    <div class="card-body">
      <h5 class="card-title">Password Generator</h5>
      <p class="card-text">This website is a password generator that can be used by anyone who wants to randomly generate a password. The project successfully allows a user to generate a random password that meets their criteria. It offers 8 - 128 characters, upper and lower case letters, numbers and special characters. Once the specifications are chosen the password will display in the text box.</p>
    </div>
    <div class="card-body">
      <a href="https://github.com/TASoko/Password-Generator" target="_blank" rel="noopener noreferrer" class="card-link">Github</a>
      <a href="https://tasoko.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer" class="card-link">Deployed Link</a>
    </div>
  </div>

      <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.media} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project Name:</strong> {props.name}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Languages:</strong> {props.languages}
          </li>
        </ul>
      </div>
    </div>