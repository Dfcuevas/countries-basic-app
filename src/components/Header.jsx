const Header = () => {
  return (
    <header className="flex justify-between items-center px-12 bg-darkBlue text-white py-4">
      <h1 className="text-2xl font-semibold ">Where in the world?</h1>
      <div className="flex gap-2">
        <ion-icon name="moon"></ion-icon>
        <p>Dark Mode</p>
      </div>
    </header>
  );
};

export default Header;
