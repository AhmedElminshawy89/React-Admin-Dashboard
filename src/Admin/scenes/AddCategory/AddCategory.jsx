import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yub from 'yup';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../theme";
import { CloseRounded } from "@mui/icons-material";
import DragZoneDialog from "../../components/DragZoneDialog";


const AddCategory = ({showAddCategory,setShowAddCategory}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const smScreen = useMediaQuery("(min-width:600px)")
    const initialValues = {
        categoryName:"",
        categoryCode:"",
        describtion:"",
        img:""
      }
    
      const userSchema = yub.object().shape({
        categoryName:yub.string().required("required"),
        categoryCode:yub.string().required("required"),
        describtion:yub.string().required("required"),
        img:yub.string().required('required')
      })
    
      const handleFormSubmit = (values) => {
        console.log(values);
      }
    
    
      const isNonMobile = useMediaQuery("(min-width:600px)");
    
  return (
    <div className={showAddCategory?'add-category':'add-categoryShow'}>
        <div className={"content-category"} style={{backgroundColor:colors.primary[400] ,color:colors.grey[100]}}>
        <Box p='10px 15px'>
        <Box 
        display='flex'
        flexDirection={smScreen?'row':'column'}
        justifyContent={smScreen ? "space-between" : "center"}
        alignItems={smScreen ? "center" : "center"}
        m="10px 0"
      >
        <Header title='Create Category' subtitle='List of Categories'/>

        <Box>
          <Button
            sx={{
              backgroundColor:colors.blueAccent[700],
              color:colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={()=>setShowAddCategory(!showAddCategory)}
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
                label='Category Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.categoryName}
                name="categoryName"
                error={!!touched.categoryName && !!errors.categoryName}
                helperText={touched.categoryName && errors.categoryName}
                sx={{gridColumn: "span 2"}}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label='Category Code'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.categoryCode}
                name="categoryCode"
                error={!!touched.categoryCode && !!errors.categoryCode}
                helperText={touched.categoryCode && errors.categoryCode}
                sx={{gridColumn: "span 2"}}
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
                Create New Category
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


export default AddCategory