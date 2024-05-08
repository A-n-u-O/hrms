import {
  Box,
  Button,
  Card,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import logo from "../assets/images/Svg/logo.svg";
import settingsIcon from "../assets/images/Svg/settings.svg"; // Import the settings icon SVG file
import recruitmentIcon from "../assets/images/Svg/recruitment.svg";
import employeeIcon from "../assets/images/Svg/employee.svg";
import payrollIcon from "../assets/images/Svg/payroll.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import MUITable from "./Table";
import { platform } from "os";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Box sx={{}}>
          <CssBaseline />
          <Grid
            container
            direction="row"
            sx={{ height: "100vh", width: "100vw", padding: "0" }} // Set height and width to fill the viewport
          >
            {/* side-nav */}
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
              }}>
              <div>
                {/* company name */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}>
                  <img
                    src={logo}
                    style={{ height: "40px", width: "120px", margin: "10px" }}
                    alt="Logo"
                  />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "#393A4A",
                    }}>
                    {" "}
                    Prunedge{" "}
                  </Typography>
                </div>
                {/* menu  */}
                <div
                  style={{
                    backgroundColor: "#F0F5FF",
                    display: "flex",
                    borderRadius: "8px",
                    padding: "10px",
                    marginTop: "35px",
                  }}>
                  <DashboardIcon sx={{ color: "blue", padding: "0" }} />
                  <Typography sx={{ marginLeft: "20px" }}>
                    Organisations
                  </Typography>
                </div>
              </div>

              <div>
                {/* settings */}
                <div
                  style={{
                    display: "flex",
                    color: "grey",
                    margin: "5px",
                    padding: "5px",
                  }}>
                  {/* Use the imported settings icon SVG */}
                  <img
                    src={settingsIcon}
                    style={{ height: "24px", width: "24px", color: "grey" }}
                    alt="Settings"
                  />
                  <Typography sx={{ marginLeft: "20px" }}>Settings</Typography>
                </div>

                {/* logout */}
                <Box
                  onClick={(e) => navigate("/")}
                  style={{
                    display: "flex",
                    color: "grey",
                    margin: "5px",
                    padding: "5px",
                    cursor: "pointer",
                  }}>
                  <LogoutIcon />
                  <Typography sx={{ marginLeft: "20px" }}>LogOut</Typography>
                </Box>
              </div>
            </Grid>
            <Grid item xs={10} sx={{ backgroundColor: "#F5F5F5" }}>
              {/* organisations  */}
              {/* top */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}>
                {/* notification  */}
                <NotificationsNoneIcon
                  sx={{ fontSize: "30px", margin: "5px", marginRight: "30px" }}
                />
                {/* profile */}
                <Typography
                  sx={{
                    backgroundColor: "navy",
                    padding: "5px",
                    margin: "5px",
                    marginRight: "25px",
                    borderRadius: "40px",
                    color: "white",
                    fontSize: "10px",
                  }}>
                  PA
                </Typography>
              </Box>

              {/* organizations heading */}
              <Box
                sx={{
                  borderBottom: "0.6px solid grey",
                  borderTop: "0.6px solid grey",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                  alignItems: "center",
                }}>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "18px",
                    marginLeft: "25px",
                  }}>
                  Organisations
                </Typography>
                <Button
                  sx={{
                    display: "flex",
                    background: "#0050C8",
                    "&:hover": { backgroundColor: "blue" },
                    color: "#FFFFFF",
                    textDecoration: "none",
                    cursor: "pointer",
                    fontSize: "15px",
                    padding: "10px, 16px, 10px, 16px",
                    borderRadius: "4px",
                  }}>
                  {" "}
                  <AddIcon sx={{ marginRight: "5px" }} /> New Organisations
                </Button>
              </Box>

              {/* admin-dashboard  */}
              <Box
                mt="15px"
                mb="15px"
                mr="25px"
                ml="25px"
                sx={{
                  display: "flex",
                  gap: "4",
                  justifyContent: "space-between",
                }}>
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "380px",
                    height: "91px",
                    padding: "15px",
                    color: "grey",
                  }}>
                  <Typography sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography>Core Hr</Typography>
                    <Typography>
                      <span
                        style={{
                          color: "blue",
                          fontSize: "20px",
                          fontWeight: "bold",
                          paddingRight: "3px",
                        }}>
                        14
                      </span>{" "}
                      organisations
                    </Typography>
                  </Typography>
                  <img
                    src={recruitmentIcon}
                    style={{ height: "24px", width: "24px", color: "grey" }}
                    alt="Settings"
                  />
                </Card>
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "380px",
                    height: "91px",
                    padding: "15px",
                    color: "grey",
                  }}>
                  <Typography sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography>Core Payroll</Typography>
                    <Typography>
                      <span
                        style={{
                          color: "blue",
                          fontSize: "20px",
                          fontWeight: "bold",
                          paddingRight: "3px",
                        }}>
                        14
                      </span>{" "}
                      organisations
                    </Typography>
                  </Typography>
                  <img
                    src={payrollIcon}
                    style={{ height: "24px", width: "24px", color: "grey" }}
                    alt="Settings"
                  />
                </Card>
                <Card
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "380px",
                    height: "91px",
                    padding: "15px",
                    color: "grey",
                  }}>
                  <Typography sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography>HR & Payroll</Typography>
                    <Typography>
                      <span
                        style={{
                          color: "blue",
                          fontSize: "20px",
                          fontWeight: "bold",
                          paddingRight: "3px",
                        }}>
                        14
                      </span>{" "}
                      organisations
                    </Typography>
                  </Typography>
                  <img
                    src={employeeIcon}
                    style={{ height: "24px", width: "24px", color: "grey" }}
                    alt="Settings"
                  />
                </Card>
              </Box>
              <MUITable
                data={[
                  {
                    org: "Prunedge",
                    email: "email@email.com",
                    platform: "Core HR",
                    employees: "13,039",
                    sector: "Private",
                    dateOfReg: "Sep 14, 2021",
                    stat: "Active",
                  },
                  {
                    org: "Lagos State Government",
                    email: "email@email.com",
                    platform: "Hr Payroll",
                    employees: "285,940",
                    sector: "Public",
                    dateOfReg: "Aug 25, 2021",
                    stat: "Suspended",
                  },
                  {
                    org: "Flutterwave",
                    email: "email@email.com",
                    platform: "Hr Payroll",
                    employees: "0",
                    sector: "Private",
                    dateOfReg: "July 12, 2021",
                    stat: "Deactivated",
                  },
                  {
                    org: "National Assembly",
                    email: "email@email.com",
                    platform: "Hr Payroll",
                    employees: "23,784",
                    sector: "Public",
                    dateOfReg: "May 15, 2021",
                    stat: "Active",
                  },
                  {
                    org: "PayStack",
                    email: "email@email.com",
                    platform: "Hr Payroll",
                    employees: "0",
                    sector: "Private",
                    dateOfReg: "April 30, 2021",
                    stat: "Pending",
                  },
                  {
                    org: "Oyo State Government",
                    email: "email@email.com",
                    platform: "Hr Payroll",
                    employees: "74,920",
                    sector: "Public",
                    dateOfReg: "March 23, 2021",
                    stat: "Pending",
                  },
                  {
                    org: "Andela",
                    email: "email@email.com",
                    platform: "Hr Payroll",
                    employees: "12,374",
                    sector: "Private",
                    dateOfReg: "Fep 14, 2021",
                    stat: "Active",
                  },
                ]}
                columnHead={[
                  { label: "Organisation", key: "org" },
                  { label: "Platform package", key: "platform" },
                  { label: "No Of Employee", key: "employees" },
                  { label: "Sector", key: "sector" },
                  { label: "Date Registered", key: "dateOfReg" },
                  { label: "Status", key: "stat" },
                ]}
              />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};
export default Dashboard;
