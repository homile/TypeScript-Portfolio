import React from 'react';

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="section_container">
        <h1>My work</h1>
        <h3>Projects</h3>
        <div className="work_category">
          <button className="category_btn selected" data-filter="*">
            All <span className="category_count">2</span>
          </button>
          <button className="category_btn" data-filter="front-end">
            Front-end <span className="category_count">2</span>
          </button>
          <button className="category_btn" data-filter="frame-work">
            Framework <span className="category_count">0</span>
          </button>
          <button className="category_btn" data-filter="mobile">
            Back-end <span className="category_count">0</span>
          </button>
        </div>
        {/*     
      <div className="work_projects">
          <a 
              href="https://github.com/homile/community_site" 
              className="project"
              target="blank"
              data-type="front-end"
              >
              <img 
                  className="project_img"
                  src="./imgs/community_site.png" 
                  alt="커뮤니티 사이트"
              />
              <div className="project_description">
                  <h3>Community_site</h3>
                  <span>University team report <br>
                      (HTML, CSS, PHP, ...)
                  </span>
              </div>
          </a>
          <a 
              href="https://github.com/homile/portfolio" 
              className="project"
              target="blank"
              data-type="front-end"
              >
              <img 
              className="project_img"
              src="./imgs/Portfolio_site.png" 
              alt="포트폴리오 클론코딩 사이트"
              />
              <div className="project_description">
                  <h3>Portfolio_site</h3>
                  <span>University team report<br>
                      (HTML, CSS, JS, Git, GitHub)
                  </span>
              </div>
          </a>
          <!-- <a 
              href="#" 
              className="project"
              target="blank"
              data-type="frame-work"
              >
              <img 
                  className="project_img"
                  src="imgs/community_site.png" 
                  alt="포트폴리오 클론코딩"
              />
              <div className="project_description">
                  <h3>Portfolio clone coding</h3>
                  <span>University team report(HTML, CSS, PHP,...)</span>
              </div>
          </a>
          <a 
              href="#" 
              className="project"
              target="blank"
              data-type="mobile"
              >
              <img 
                  className="project_img"
                  src="imgs/community_site.png" 
                  alt="모바일 웹"
              />
              <div className="project_description">
                  <h3>mobile web</h3>
                  <span>University team report(HTML, CSS, PHP,...)</span>
              </div>
          </a>
      </div> */}
      </div>
    </section>
  );
};

export default Work;
