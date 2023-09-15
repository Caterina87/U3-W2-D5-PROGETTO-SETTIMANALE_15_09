const MyFooter = () => {
  return (
    <footer className="bg-body-tertiary fixed-bottom mt-10 px-4">
      <div className="d-flex mx-10">
        <div className="icon fs-4 mb-3">
          <i className="bi bi-facebook pe-3"></i>
          <i className="bi bi-instagram pe-3"></i>
          <i className="bi bi-twitter pe-3"></i>
          <i className="bi bi-youtube pe-3"></i>
        </div>
      </div>
      <div className="row d-flex flex-direction: column mx-10">
        <div className="col-3">
          <ul className="list-unstyled">
            <li className="fs-6">Privacy</li>
            <li className="fs-6">Contact Us</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="list-unstyled">
            <li className="fs-6">Investor Relations</li>
            <li className="fs-6">Legal Notices</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="list-unstyled">
            <li className="fs-6">Help Center</li>
            <li className="fs-6">Cookie preferences</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="list-unstyled">
            <li className="fs-6">Terms of Use</li>
            <li className="fs-6">Corporate Information</li>
          </ul>
        </div>
      </div>
      <p className="bg-body-tertiary fs-6 mt-3 mx-10">
        &copy;1997-2019 Weather Finder, inc. &#123; -OdOOteda2fdiscOde&#125;
      </p>
    </footer>
  );
};

export default MyFooter;
