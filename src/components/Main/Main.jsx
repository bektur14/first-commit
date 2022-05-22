import React from "react";

function Main() {
  return (
    <div>
      <main>
        <div className="container technology">
          <img src="imgs/html.png" alt="html" />
          <img className="arrow" src="imgs/arrow.png" alt="arrow" />
          <img src="imgs/css.png" alt="css" />
          <img className="arrow" src="imgs/arrow.png" alt="arrow" />
          <img src="imgs/js.png" alt="js" />
        </div>
        <div className="container gallery">
          <img src="imgs/1.png" alt="image" />
          <img src="imgs/2.png" alt="image" />
          <img src="imgs/3.png" alt="image" />
          <img src="imgs/4.png" alt="image" />
          <img src="imgs/5.png" alt="image" />
          <img src="imgs/6.png" alt="image" />
        </div>
        <div className="container news">
          <article>
            <img src="imgs/7.png" alt="image" />
            <div className="description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                tempore dolorum consequuntur pariatur magni accusantium
                similique vel eaque doloribus exercitationem. Inventore alias
                quisquam dolores doloribus eius optio reprehenderit perferendis
                totam? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Culpa tempore dolorum consequuntur pariatur magni accusantium
                similique vel eaque doloribus exercitationem. Inventore alias
                quisquam dolores doloribus eius optio reprehenderit perferendis
                totam? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Culpa tempore dolorum consequuntur pariatur magni accusantium
                similique vel eaque doloribus exercitationem. Inventore alias
                quisquam dolores doloribus eius optio reprehenderit perferendis
                totam?
              </p>
            </div>
          </article>
          <article>
            <img src="imgs/8.png" alt="image" />
            <div className="description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                tempore dolorum consequuntur pariatur magni accusantium
                similique vel eaque doloribus exercitationem. Inventore alias
                quisquam dolores doloribus eius optio reprehenderit perferendis
                totam? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Culpa tempore dolorum consequuntur pariatur magni accusantium
                similique vel eaque doloribus exercitationem. Inventore alias
                quisquam dolores doloribus eius optio reprehenderit perferendis
                totam? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Culpa tempore dolorum consequuntur pariatur magni accusantium
                similique vel eaque doloribus exercitationem. Inventore alias
                quisquam dolores doloribus eius optio reprehenderit perferendis
                totam?
              </p>
            </div>
          </article>
          <article>
            <img src="imgs/9.png" alt="image" />
            <div className="description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                tempore dolorum consequuntur pariatur magni accusantium
                similique vel eaque doloribus exercitationem. Inventore alias
                quisquam dolores doloribus eius optio reprehenderit perferendis
                totam? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Culpa tempore dolorum consequuntur pariatur magni accusantium
                similique vel eaque doloribus exercitationem. Inventore alias
                quisquam dolores doloribus eius optio reprehenderit perferendis
                totam? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Culpa tempore dolorum consequuntur pariatur magni accusantium
                similique vel eaque doloribus exercitationem. Inventore alias
                quisquam dolores doloribus eius optio reprehenderit perferendis
                totam?
              </p>
            </div>
          </article>
        </div>
        <div className="container cards">
          <div className="card">
            <h3>Заголовок</h3>
            <div className="description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                praesentium adipisci voluptas iure odit ipsum dolorem tempora
                aliquid amet harum, molestias delectus asperiores officiis aut
                error ea? Recusandae, earum aperiam.
              </p>
            </div>
            <button className="btn">Кнопка</button>
          </div>
          <div className="card">
            <h3>Заголовок</h3>
            <div className="description">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                praesentium adipisci voluptas iure odit ipsum dolorem tempora
                aliquid amet harum, molestias delectus asperiores officiis aut
                error ea? Recusandae, earum aperiam.{" "}
              </p>
            </div>
            <button className="btn">Кнопка</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
