import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yub from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import { CloseRounded } from "@mui/icons-material";
import DragZoneDialog from "../../components/DragZoneDialog";


const AddBrand = ({showAddBrand,setShowAddBrand}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const smScreen = useMediaQuery("(min-width:600px)")
    const initialValues = {
        brandName:"",
        describtion:"",
        img:""
      }
    
      const userSchema = yub.object().shape({
        categoryName:yub.string().required("required"),
        describtion:yub.string().required("required"),
        img:yub.string().required('required')
      })
    
      const handleFormSubmit = (values) => {
        console.log(values);
      }
    
    
      const isNonMobile = useMediaQuery("(min-width:600px)");
    
  return (
    <div className={showAddBrand?'add-brand':'add-brandShow'}>
        <div className={"content-category"} style={{backgroundColor:colors.primary[400] ,color:colors.grey[100]}}>
        <Box p='10px 15px'>
        <Box 
        display='flex'
        flexDirection={smScreen?'row':'column'}
        justifyContent={smScreen ? "space-between" : "center"}
        alignItems={smScreen ? "center" : "center"}
        m="10px 0"
      >
        <Header title='Create Brand' subtitle='List of Brands'/>

        <Box>
          <Button
            sx={{
              backgroundColor:colors.blueAccent[700],
              color:colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={()=>setShowAddBrand(!showAddBrand)}
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
                label='Brand Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.brandName}
                name="categoryName"
                error={!!touched.brandName && !!errors.brandName}
                helperText={touched.brandName && errors.brandName}
                sx={{gridColumn: "span 4"}}
              />

              <TextField
                fullWidth
                variant="filled"
                multiline
                rows={3}
                type="text"
                label='Describtion'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.describtion}
                name="describtion"
                error={!!touched.describtion && !!errors.describtion}
                helperText={touched.describtion && errors.describtion}
                sx={{gridColumn: "span 4"}}
              />

                  <Box
                  sx={{ gridColumn: "span 4" }}
                  >

                  <DragZoneDialog/>

                  </Box>
              
              
            </Box>
            <Box display="flex" justifyContent="center" mt='20px'>
              <Button type="submit" color="secondary" variant="contained">
                Create New Brand
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


export default AddBrand