import "./style.css";

const Loader = () => (
  <>
    <div className="octocat__ballWrapper">
      <div className="octocat__ball" />
    </div>
    <div className="loader__iconWrapper">
      <div className="loader__icon">
        <div className="octocat__eye octocat__eye--left">
          <div className="octocat__eyeOfTheEye" />
        </div>
        <div className="octocat__eye octocat__eye--right">
          <div className="octocat__eyeOfTheEye" />
        </div>
      </div>
    </div>
  </>
);

export default Loader;