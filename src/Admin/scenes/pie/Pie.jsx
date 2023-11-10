import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
const Pie = () => {
  return (
      <Box>
        <Header title="Pie Chart" subtitle="Simple Pie Chart" />
        <Box height="75vh">
          <PieChart />
        </Box>
      </Box>  
  )
}

export default Pie