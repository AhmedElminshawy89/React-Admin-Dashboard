import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yub from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import DragZoneDialog from "../../components/DragZoneDialog";


const AddProduct = () => {

  const initialValues = {
    productName:"",
    category:"",
    subCategory:"",
    unit:"",
    quantity:"",
    mininmumQty:"",
    describtion:"",
    tax:"",
    price:"",
    img:""
  }

  const userSchema = yub.object().shape({
    productName:yub.string().required("required"),
    category:yub.string().required("required"),
    subCategory:yub.string(),
    unit:yub.string().required("required"),
    quantity:yub.number().required("required"),
    mininmumQty:yub.number().required("required"),
    describtion:yub.string().required("required"),
    tax:yub.string(),
    price:yub.string().required("required"),
    img:yub.string().required('required')
  })

  const handleFormSubmit = (values) => {
    console.log(values);
  }


  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box>
      <Header title='Create Product' subtitle='Create a New Product'/>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit
        })=>(
          <form onSubmit={handleSubmit}>
            <Box
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(6,minmax(0,1fr))'
              sx={{
                "& > div" : {gridColumn: isNonMobile ? undefined : "span 6"}
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Product Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.productName}
                name="productName"
                error={!!touched.productName && !!errors.productName}
                helperText={touched.productName && errors.productName}
                sx={{gridColumn: "span 2"}}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='category'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.category}
                name="category"
                error={!!touched.category && !!errors.category}
                helperText={touched.category && errors.category}
                sx={{gridColumn: "span 2"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='subCategory'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.subCategory}
                name="subCategory"
                error={!!touched.subCategory && !!errors.subCategory}
                helperText={touched.subCategory && errors.subCategory}
                sx={{gridColumn: "span 2"}}
              />


              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Quantity'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.quantity}
                name="quantity"
                error={!!touched.quantity && !!errors.quantity}
                helperText={touched.quantity && errors.quantity}
                sx={{gridColumn: "span 3"}}
              />
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='mininmumQty'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mininmumQty}
                name="mininmumQty"
                error={!!touched.mininmumQty && !!errors.mininmumQty}
                helperText={touched.mininmumQty && errors.mininmumQty}
                sx={{gridColumn: "span 3"}}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Unit'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.unit}
                name="unit"
                error={!!touched.unit && !!errors.unit}
                helperText={touched.unit && errors.unit}
                sx={{gridColumn: "span 2"}}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Price'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="category"
                error={!!touched.category && !!errors.category}
                helperText={touched.category && errors.category}
                sx={{gridColumn: "span 2"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Tax'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tax}
                name="subCategory"
                error={!!touched.tax && !!errors.tax}
                helperText={touched.tax && errors.tax}
                sx={{gridColumn: "span 2"}}
              />

              <TextField
                fullWidth
                multiline
                rows={4}
                variant="filled"
                type="text"
                label='Description'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.describtion}
                name="describtion"
                error={!!touched.describtion && !!errors.describtion}
                helperText={touched.describtion && errors.describtion}
                sx={{gridColumn: "span 6",gridRow:"span 2"}}
              />

            <Box
                  sx={{ gridColumn: "span 6" }}
                  >

                  <DragZoneDialog/>

            </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt='20px'>
              <Button type="submit" color="secondary" variant="contained">
                Create New Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default AddProduct