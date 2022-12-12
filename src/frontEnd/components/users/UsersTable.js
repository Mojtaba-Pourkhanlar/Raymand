import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TableCell,
} from "@mui/material";

const CustomTableCell = ({ title }) => {
  return (
    <TableCell>
      <Typography variant="h5">{title}</Typography>
    </TableCell>
  );
};

const UsersTable = ({ users }) => {
  const navigate = useNavigate();

  const theme = useTheme();
  const colors = theme.palette;

  // Style
  const headerTable = {
    backgroundColor: colors.warning.main,
  };
  const styleTable = {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: colors.primary.main,
    },
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead sx={headerTable}>
            <TableRow>
              {[
                "نام",
                "نام کاربری ",
                "شهر",
                "کشور",
                "شرکت",
                "تلفن",
                "ایمیل",
              ].map((head) => (
                <TableCell
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: colors.grey.dark,
                  }}
                  key={head}>
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                onClick={() => navigate(`/users/${user.id}`)}
                key={user.id}
                sx={styleTable}>
                <CustomTableCell title={user.name} />
                <CustomTableCell title={user.username} />
                <CustomTableCell title={user.address.city} />
                <CustomTableCell title={user.address.country} />
                <CustomTableCell title={user.company} />
                <CustomTableCell title={user.phone} />
                <CustomTableCell title={user.email} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UsersTable;
