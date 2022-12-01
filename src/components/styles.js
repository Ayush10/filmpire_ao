import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
  },
  toolbar: {
    height: "70px",
  },
  content: {
    flexGrow: 1,
    padding: "2em",
  },
}));

// export default function useStyles() {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         height: "100%",
//       }}
//     >
//       <Box
//         component="div"
//         sx={{
//           height: "70px",
//         }}
//       ></Box>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           padding: "2em",
//         }}
//       ></Box>
//     </Box>
//   );
// }
