// HOW TO USE STYLED-JSX
// *** I don't like it! I think keeping the styles on their own files
// makes the app much clear!

export default function StyledJSX() {
  const color = Math.random() > 0.5 ? "red" : "blue";
  return (
    <div>
      <h1 className="title">Hello World!</h1>
      <h2>Another paragraph!</h2>
      {/* These styles will be applyed ONLY ON THIS COMPONENT: */}
      <style jsx>
        {`
          .title {
            color: darkred;
          }
        `}
      </style>

      {/* MAKE IT GLOBAL to be applyed in ALL COMPONENTS */}
      <style jsx global>
        {`
          .someClass {
            color: yellow;
          }
        `}
      </style>

      {/* USING VARIABLE: */}
      <h1 className="titleRandomColor">Hello World!</h1>
      <style jsx>
        {`
          .titleRandomColor {
            color: ${color};
          }
        `}
      </style>
    </div>
  );
}

// Access: http://localhost:3000/styledJSX
