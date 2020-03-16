import React from "react";
import Glide from "@glidejs/glide";
import "./glide.scss";
export default function Carousel(props) {
  const { options, control, bullet, children } = props;

  const ref = React.useRef(null);

  React.useEffect(() => {
    const glide = new Glide(ref.current, {
      perView: 4,
      type: "carousel",
      breakpoints: {
        800: {
          perView: 2
        }
      },
      ...options
    }).mount();
    return () => {
      glide.destroy();
    };
  });
  return (
    <div className="glide" ref={ref}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {React.Children.map(children, child => (
            <li className="glide__slide">{child}</li>
          ))}
        </ul>
      </div>
      {control && (
        <div className="glide__arrows" data-glide-el="controls">
          <span className="glide__arrow glide__arrow--left" data-glide-dir="<">
            {"<"}
          </span>
          <span className="glide__arrow glide__arrow--right" data-glide-dir=">">
            {">"}
          </span>
        </div>
      )}

      {bullet && (
        <div className="glide__bullets" data-glide-el="controls[nav]">
          {new Array(children.length).fill(0).map((nothing, i) => (
            <button
              key={"bullte" + i}
              className="glide__bullet"
              data-glide-dir={"=" + i}
            />
          ))}
        </div>
      )}
    </div>
  );
}
