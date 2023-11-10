import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yub from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import { CloseRounded } from "@mui/icons-material";


const AddPayment = ({showAddPayment,setShowAddPayment}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const smScreen = useMediaQuery("(min-width:600px)")
    const initialValues = {
        paymentName:"",
        Status:"",
      }
    
      const userSchema = yub.object().shape({
        paymentName:yub.string().required("required"),
        Status:yub.string().required("required"),
      })
    
      const handleFormSubmit = (values) => {
        console.log(values);
      }
    
    
      const isNonMobile = useMediaQuery("(min-width:600px)");
    
  return (
    <div className={showAddPayment?'add-payment':'add-paymentShow'}>
        <div className={"content-category"} style={{backgroundColor:colors.primary[400] ,color:colors.grey[100]}}>
        <Box p='10px 15px'>
        <Box 
        display='flex'
        flexDirection={smScreen?'row':'column'}
        justifyContent={smScreen ? "space-between" : "center"}
        alignItems={smScreen ? "center" : "center"}
        m="10px 0"
      >
        <Header title='Payment' subtitle='Add New Payment'/>

        <Box>
          <Button
            sx={{
              backgroundColor:colors.blueAccent[700],
              color:colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={()=>setShowAddPayment(!showAddPayment)}
          >
            <CloseRounded />
          </Button>
        </Box>

      </Box>

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
              gridTemplateColumns='repeat(4,minmax(0,1fr))'
              sx={{
                "& > div" : {gridColumn: isNonMobile ? undefined : "span 4"}
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Payment Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.paymentName}
                name="categoryName"
                error={!!touched.paymentName && !!errors.paymentName}
                helperText={touched.paymentName && errors.paymentName}
                sx={{gridColumn: "span 4"}}
              />

              <TextField
                fullWidth
                variant="filled"
                multiline
                rows={3}
                type="text"
                label='Status'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Status}
                name="Status"
                error={!!touched.Status && !!errors.Status}
                helperText={touched.Status && errors.Status}
                sx={{gridColumn: "span 4"}}
              />              
              
            </Box>
            <Box display="flex" justifyContent="center" mt='20px'>
              <Button type="submit" color="secondary" variant="contained">
                Create New Payment
              </Button>
            </Box>
          </form>
        )}
      </Formik>
        </Box>
        </div>
    </div>
);
}


export default AddPayment