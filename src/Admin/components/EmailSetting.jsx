import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yub from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";


const EmailSetting = () => {

  const initialValues = {
    MailHost:"",
    MailPort:"",
    MailAddress:"",
    Password:"",
    MailFromName:"",
    Encryption:"",
  }

  const userSchema = yub.object().shape({
    MailHost:yub.string().required("required"),
    MailPort:yub.string().required("required"),
    MailAddress:yub.string().required('required'),
    Password:yub.string().required("required"),
    MailFromName:yub.string().email('Invalid Email').required("required"),
    phone:yub.string().required("required"),
    Encryption:yub.string().required("required")
  })

  const handleFormSubmit = (values) => {
    console.log(values);
  }


  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box>
      <Header title='Email Setting' subtitle='Manage Email Setting'/>

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
                label='Mail Host'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.MailHost}
                name="MailHost"
                error={!!touched.MailHost && !!errors.MailHost}
                helperText={touched.MailHost && errors.MailHost}
                sx={{gridColumn: "span 3"}}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Mail Port'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.MailPort}
                name="MailPort"
                error={!!touched.MailPort && !!errors.MailPort}
                helperText={touched.MailPort && errors.MailPort}
                sx={{gridColumn: "span 3"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Mail Address'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.MailAddress}
                name="MailAddress"
                error={!!touched.MailAddress && !!errors.MailAddress}
                helperText={touched.MailAddress && errors.MailAddress}
                sx={{gridColumn: "span 3"}}
              />

              <TextField
                fullWidth
                variant="filled"
                type="password"
                label='Password'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Password}
                name="Password"
                error={!!touched.Password && !!errors.Password}
                helperText={touched.Password && errors.Password}
                sx={{gridColumn: "span 3"}}
              />


              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Mail From Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.MailFromName}
                name="MailFromName"
                error={!!touched.MailFromName && !!errors.MailFromName}
                helperText={touched.MailFromName && errors.MailFromName}
                sx={{gridColumn: "span 3"}}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Encryption'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Encryption}
                name="Encryption"
                error={!!touched.Encryption && !!errors.Encryption}
                helperText={touched.Encryption && errors.Encryption}
                sx={{gridColumn: "span 3"}}
              />

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

export default EmailSetting