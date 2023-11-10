import { ColorModeContext , useMode } from "../theme";
import { ThemeProvider , CssBaseline} from "@mui/material";

import Topbar from "../Admin/scenes/global/Topbar";
import Slidebar from "../Admin/scenes/global/Slidebar";
import Routing from "../Admin/routes/Route";
import AddCategory from "./scenes/AddCategory/AddCategory";
import { useState } from "react";
import AddBrand from "./scenes/AddBrand/AddBrand";
import AddPayment from "./scenes/AddPayment.jsx/AddPayment";

const AppAdmin = () => {
    
  const [theme , colorMode] = useMode()
  const [showAddCategory,setShowAddCategory] = useState(true);
  const [showAddBrand,setShowAddBrand] = useState(true);
  const [isSidebarVisible,setIsSidebarVisible] = useState(true);
  const [showAddPayment,setShowAddPayment] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App">
          <Slidebar isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible}/>
          <main className="content">
            <Topbar isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible}/>
            <Routing showAddCategory={showAddCategory} setShowAddCategory={setShowAddCategory}
                     showAddBrand={showAddBrand} setShowAddBrand={setShowAddBrand}
                     showAddPayment={showAddPayment} setShowAddPayment={setShowAddPayment}
            />
          </main>
            <AddCategory showAddCategory={showAddCategory} setShowAddCategory={setShowAddCategory}/> 
            <AddBrand showAddBrand={showAddBrand} setShowAddBrand={setShowAddBrand}/> 
            <AddPayment showAddPayment={showAddPayment} setShowAddPayment={setShowAddPayment}/>
        </div>   
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default AppAdmin