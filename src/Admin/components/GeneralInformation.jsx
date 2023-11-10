import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yub from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";
import DragZoneDialog from "../components/DragZoneDialog"


const GeneralInformation = () => {

  const initialValues = {
    Title:"",
    TimeZone:"",
    currency:"",
    dataFormat:"",
    email:"",
    phone:"",
    Address:"",
    img:""
  }

  const userSchema = yub.object().shape({
    Title:yub.string().required("required"),
    TimeZone:yub.string().required("required"),
    currency:yub.string(),
    dataFormat:yub.string().required("required"),
    email:yub.string().email('Invalid Email').required("required"),
    phone:yub.string().required("required"),
    Address:yub.string().required("required"),
    img:yub.string().required('required')
  })

  const handleFormSubmit = (values) => {
    console.log(values);
  }


  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box>
      <Header title='General Setting' subtitle='Manage General Setting'/>

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
                label='Title'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Title}
                name="Title"
                error={!!touched.Title && !!errors.Title}
                helperText={touched.Title && errors.Title}
                sx={{gridColumn: "span 2"}}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='TimeZone'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.TimeZone}
                name="TimeZone"
                error={!!touched.TimeZone && !!errors.TimeZone}
                helperText={touched.TimeZone && errors.TimeZone}
                sx={{gridColumn: "span 2"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Currency'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.currency}
                name="currency"
                error={!!touched.currency && !!errors.currency}
                helperText={touched.currency && errors.currency}
                sx={{gridColumn: "span 2"}}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Data Format'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dataFormat}
                name="dataFormat"
                error={!!touched.dataFormat && !!errors.dataFormat}
                helperText={touched.dataFormat && errors.dataFormat}
                sx={{gridColumn: "span 2"}}
              />


              <TextField
                fullWidth
                variant="filled"
                type="email"
                label='Email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{gridColumn: "span 2"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='phone'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{gridColumn: "span 2"}}
              />

              <TextField
                fullWidth
                multiline
                rows={4}
                variant="filled"
                type="text"
                label='Address'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Address}
                name="Address"
                error={!!touched.Address && !!errors.Address}
                helperText={touched.Address && errors.Address}
                sx={{gridColumn: "span 6",gridRow:"span 2"}}
              />

            <Box
                  sx={{ gridColumn: "span 6" }}
                  >

                  <DragZoneDialog/>

            </Box>
            </Box>
            <Box display="flex" justifyContent="center" mt='20px'>
              <Button type="submit" color="secondary" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default GeneralInformation