import React from "react";
import "./Content.css"; // Adjust the path to your CSS file

function Content() {
  return (
    <div className="w-full min-h-[30vh] py-[10vh] flex justify-center items-center">
      <div className="hover-text-grey">
        <h1 className="text-[5vh] font-semibold">
          <p className="flex items-center justify-center text-grey">
            Figma's{" "}
            <img
              className="mx-4"
              src="https://store.figma.com/cdn/shop/t/29/assets/word-symbol-burst.static.svg?v=34745811441670751621721776479"
              alt=""
            />{" "}
            Collection{" "}
            <img
              className="mx-4"
              src="https://store.figma.com/cdn/shop/t/29/assets/word-symbol-hourglass.static.svg?v=133626873782927219541721776479"
              alt=""
            />{" "}
            Of
          </p>
          <p className="flex items-center justify-center text-grey">
            <span className="no-hover underline">Layers</span>{" "}
            <img
              className="mx-4"
              src="https://store.figma.com/cdn/shop/t/29/assets/word-symbol-zag.static.svg?v=102718930007740203771721776478"
              alt=""
            />{" "}
            AND
            <img
              className="mx-4"
              src="https://store.figma.com/cdn/shop/t/29/assets/word-symbol-dots.static.svg?v=39142388321885661271721776478"
              alt=""
            />
            <span className="no-hover underline">Components</span>{" "}
            <img
              className="mx-4"
              src="https://store.figma.com/cdn/shop/t/29/assets/word-symbol-sun.static.svg?v=163357932534391307201721776479"
              alt=""
            />{" "}
            For <br />
          </p>
          <p className="flex items-center justify-center text-grey">
            You{" "}
            <img
              className="mx-4"
              src="https://store.figma.com/cdn/shop/t/29/assets/word-symbol-comet.static.svg?v=16892712658856357451721776478"
              alt=""
            />{" "}
            And{" "}
            <img
              className="mx-4"
              src="https://store.figma.com/cdn/shop/t/29/assets/word-symbol-snake.static.svg?v=34100567131936571961721776479"
              alt=""
            />{" "}
            Your{" "}
            <img
              className="mx-4"
              src="https://store.figma.com/cdn/shop/t/29/assets/word-symbol-tri.static.svg?v=32742515804419710851721776480"
              alt=""
            />{" "}
            Friends
          </p>
        </h1>
      </div>
    </div>
  );
}

export default Content;
