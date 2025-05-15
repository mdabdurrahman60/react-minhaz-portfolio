const Title = ({ first, last, description }) => {
  const paragraphStyle = {
    letterSpacing: "10px", // Adjust the value as needed
  };
  return (
    <div className="pt-12 md:px-16 items-center text-center">
      <p
        style={paragraphStyle}
        className="md:text-8xl lg:text-9xl text-5xl text-white font-bold"
      >
        {first} {last}
      </p>

      <p className="pt-16 text-white text-xl font-medium">{description}</p>
    </div>
    // </div>
  );
};

export default Title;
