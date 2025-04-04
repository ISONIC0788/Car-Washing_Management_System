import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const DataTable = ({ rows, onDelete, onView }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Customer", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: params => (
        <>
          <IconButton onClick={() => onView(params.row)}>
            <VisibilityIcon />
          </IconButton>
          <IconButton onClick={() => onDelete(params.row.id)}>
            <DeleteIcon color="error" />
          </IconButton>
        </>
      ),
    },
  ];

  return <DataGrid rows={rows} columns={columns} autoHeight pagination />;
};

export default DataTable;
