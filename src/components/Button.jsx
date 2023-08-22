import React from 'react'

const Button = () => {
  return (
    <>
      <button
        type="button"
        className={`py-4 px-6 rounded bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none mt-10`}
        onClick={() => {
          const contactElement = document.getElementById("#contact");
          if (contactElement) {
            contactElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Contact Me!
      </button>
    </>
  );
};


export default Button