export function Card({data}) {
    return (
      <div className="col-lg-4 ">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{data.title}</h5>
            <h6 className="card-price text-center">${data.price}<span class="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li className={data.userEnabler ? "" : "text-muted"}><span className="fa-li"><i className={data.userEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.title === "FREE" ? <>{data.user}</> : <b>{data.user}</b>}</li>
              <li className={data.storageEnabler ? "" : "text-muted"}><span className="fa-li"><i className={data.storageEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.storage}</li>
              <li className={data.publicProjectsEnabler ? "" : "text-muted"}><span className="fa-li"><i className={data.publicProjectsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.publicProjects}</li>
              <li className={data.communityAccessEnabler ? "" : "text-muted"}><span className="fa-li"><i className={data.communityAccessEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.communityAccess}</li>
              <li className={data.privateProjectsEnabler ? "" : "text-muted"}><span className="fa-li"><i className={data.privateProjectsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.privateProjects}</li>
              <li className={data.phoneSupportEnabler ? "" : "text-muted"}><span className="fa-li"><i className={data.phoneSupportEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.phoneSupport}</li>
              <li className={data.subdomainEnabler ? "" : "text-muted"}><span className="fa-li"><i className={data.subdomainEnabler ? "fas fa-check" : "fas fa-times"}></i></span><b>{data.subdomainPrefix}</b> {data.subdomain}</li>
              <li className={data.reportsEnabler ? "" : "text-muted"}><span className="fa-li"><i className={data.reportsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.reports}</li>
            </ul>
            <div className="d-grid button">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    );
  }