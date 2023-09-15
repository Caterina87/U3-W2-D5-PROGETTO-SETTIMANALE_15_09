const MyFooter = () => {
  return (
    <footer className="bg-body-tertiary fixed-bottom mt-3 px-4">
      <div className="row d-flex flex-direction: column mx-2">
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
