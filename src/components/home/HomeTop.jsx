const HomeTop = () => {
  return (
    <div className="project-name">
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col column-line">
            <h1>SmartTech</h1>
          </div>
          <div className="col head-time">
            <h4>Current Date :</h4>
            <h4 id="time"></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
