const Camera = () => {
  return (
    <div id="camera">
      <div className="container">
        <div>
          <h1 className="head-title">Camera</h1>
        </div>
        <div>
          <iframe className="camera-frame" src="https://rtsp.me/embed/tdbQ6ZAf/" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default Camera;
