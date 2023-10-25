import React from "react";

function Hero() {
  let heroImg = true;
  return (
    <div>
      <h2>This is Hero Page</h2>

      {(() => {
        if (heroImg) {
          return (
            <img
              src="https://media.licdn.com/dms/image/D5603AQFtkc6OD4-x3Q/profile-displayphoto-shrink_800_800/0/1664720124243?e=2147483647&v=beta&t=XUv2Se5bGC94mbkfsJdsqLgRgApPIMwR6jOIprxmwhE"
              alt="Mizan"
              height={300}
            />
          );
        } else {
          return <p>There is no hero image</p>;
        }
      })()}
    </div>
  );
}

export default Hero;
