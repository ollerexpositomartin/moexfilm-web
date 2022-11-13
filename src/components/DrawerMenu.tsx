type DrawerMenuConf = {
        name:String
        children:any
}

function DrawerMenu({children,name}:DrawerMenuConf,) {
  return (
    <div className="mt-8">
      <p className="font-bold font-Roboto ">{name}</p>
      <ul className="menu mt-2 mb-2 w-80 bg-base-100 text-base-content font-Roboto">
        {children}
      </ul>
    </div>
  );
}

export default DrawerMenu;
