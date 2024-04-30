import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const ForgotPassword = () => {
  const handleSubmit = () =>{}
  const navigate = useNavigate()
  return (
    <>
        <Container component={'main'} sx={{ backgroundColor: '#0050C8', padding: '20px', height: '100vh', width: '100vh' }}>
                <CssBaseline />
                <Box sx={{ margin: 'auto', marginTop: '8', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px' }}>
                    <Typography variant="h3" color={'#FFFFFF'}>HrPay</Typography>
                    <Typography component={'p'} color={'#B3CDFF'} textAlign={'center'} fontSize={'16px'} fontWeight={'400'} lineHeight={'24px'}>This is dummy text that will be replaced later by proper content. The replacement text shouldn’t be more than three lines</Typography>
                </Box>
                <Box component={'form'} padding={'10px'} borderRadius={'0px, 0px, 4px, 4px'} sx={{ mt: 3, margin: 'auto', maxWidth: '400px', marginTop: '10px', backgroundColor: '#FFFFFF' }} onSubmit={handleSubmit} >
                    <Typography component={'p'} borderBottom={'2px solid gray'} color={'#393A4A'}>Forgot password</Typography>
                    <Grid container spacing={2} color={'#393A4A'}>
                        <Grid item xs={12} marginTop={'12px'}>
                            <TextField required fullWidth variant="outlined" id="outlined-basic email" label={'Email Address'} placeholder="example@mail.com" sx={{ borderRadius: '0px, 0px, 0px, 8px' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color={'grey'} fontSize={'14px'}>
                                Enter the email address associated with your account
                            </Typography>
                        </Grid>
                        <Grid item xs={12} textAlign="center"> {/* Centering the button */}
                            <Button type="submit" sx={{ background: '#0050C8', color: '#FFFFFF', '&:hover': { backgroundColor: '#B3CDFF' } }} >Reset Password</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <a style={{fontSize: '14px', color: '#0050C8' , textDecoration: 'none', cursor: 'pointer'}} onClick={()=>navigate('/')}>
                                Back to SignIn
                            </a>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    </>
  )
}
export default ForgotPassword
