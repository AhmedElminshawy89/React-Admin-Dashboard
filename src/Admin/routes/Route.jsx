import { Route, Routes } from "react-router-dom";

import Dashboard from "../scenes/dashboard/Dashboard";
import Bar from "../scenes/bar/Bar";
import Calendar from "../scenes/calendar/Calendar";
import Contact from "../scenes/contact/Contact";
import Faq from "../scenes/faq/Faq";
import Form from "../scenes/form/Form";
import Geography from "../scenes/geography/Geography";
import Invoices from "../scenes/invoices/Invoices";
import Line from "../scenes/line/Line";
import Pie from "../scenes/pie/Pie";
import Team from "../scenes/team/team";
import Product from "../scenes/product/Product";
import NotFound from "../scenes/NotFound/NotFound";
import AddProduct from "../scenes/AddProduct/AddProduct";
import Category from "../scenes/category/Category";
import Brand from "../scenes/brand/Brand";
import Setting from "../scenes/Setting/Setting";

const Routing = ({showAddCategory,setShowAddCategory,showAddBrand,setShowAddBrand,showAddPayment,setShowAddPayment}) => {
  return (
    <div className="MAIN">
      <Routes>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/bar" element={<Bar/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/geography" element={<Geography/>}/>
          <Route path="/invoices" element={<Invoices/>}/>
          <Route path="/line" element={<Line/>}/>
          <Route path="/pie" element={<Pie/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/create" element={<AddProduct/>}/>
          <Route path="/setting" element={<Setting showAddPayment={showAddPayment} setShowAddPayment={setShowAddPayment}/>}/>
          <Route path="/category" element={<Category showAddCategory={showAddCategory} setShowAddCategory={setShowAddCategory}/>}/>
          <Route path="/brand" element={<Brand showAddBrand={showAddBrand} setShowAddBrand={setShowAddBrand}/>}/>
      </Routes>
    </div>
  )
}

export default Routing