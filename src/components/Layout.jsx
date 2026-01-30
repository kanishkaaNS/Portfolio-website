import Header from "./Header";
import ClickSpark from "./ClickSpark";

function Layout({ children }) {
  return (
    <>
      <div className="bg-grid" />
      <ClickSpark />
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
