import TitleBanner from "./titleBanner";

const Layout = ({ children }) => {
  return (
    <div>
      <TitleBanner />
      {children}
    </div>
  );
};

export default Layout;
