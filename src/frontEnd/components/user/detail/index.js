import { Avatar, Box, Grid, Typography, useTheme } from "@mui/material";
import { CustomBox } from "frontEnd/shared";
import DetailMap from "./DetailMap";

const UserDetail = ({ users }) => {
  const theme = useTheme();
  const colors = theme.palette;

  const { avatar, name, username, phone, company, address, website } = users;
  const { country, street, city, alley, geo } = address;

  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Box display="flex" alignItems="center">
            <Avatar src={avatar} alt={name} />
            <Typography variant="h3" mx="10px" color={colors.warning.main}>
              {name}
            </Typography>
          </Box>
          <CustomBox title={username} name="نام کاربری : " />
          <CustomBox title={phone} name="شماره تلفن : " />
          <CustomBox title={company} name="نام شرکت :  " />
          <CustomBox title={country} name="کشور : " />
          <CustomBox title={street} name="خیابان : " />
          <CustomBox title={city} name="شهر : " />
          <CustomBox title={alley} name="کوچه : " />
          <CustomBox title={website} name="آدرس وب سایت : " />
        </Grid>
        <Grid item xs={12} md={6} sx={{}}>
          <Typography color={colors.error.main}>
            لطفا api key خود را در بخش توسعه وارد کنید تا نقشه بدون مشکل نمایش
            داده شود، اگر زمان رندر طولانی شد رفرش کنید
          </Typography>
          <DetailMap geo={geo} />
        </Grid>
      </Grid>
    </>
  );
};

export default UserDetail;
