import { TextField } from "@mui/material"

type EmailProps = {
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
}
const Email = (props: EmailProps) => {
  return (
    <>
    <TextField
                  required
                  fullWidth
                  variant="outlined"
                  id="outlined-basic email"
                  type="email"
                  label={"Email Address"}
                  placeholder="example@mail.com"
                  sx={{ borderRadius: "0px, 0px, 0px, 8px" }}
                  value={props.email}
                  onChange={(e) => props.setEmail(e.target.value)}
                /></>
  )
}
export default Email