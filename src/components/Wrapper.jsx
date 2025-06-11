function Wrapper({ children }) {
  return (
    <div className="2xl:flex 2xl:container 2xl:max-w-[90rem] 2xl:mx-auto md:px-[1.5625rem] 2xl:px-[0rem] md:pt-[23px] 2xl:pt-16">
      {children}
    </div>
  );
}

export default Wrapper;
