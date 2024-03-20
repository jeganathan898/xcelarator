import { Close, CopyAll, Edit } from "@mui/icons-material"
import { ActionButtonRow, IconButton } from "../assets/styles"

export const appraisalCycleHeader = () => [
  {
    accessorKey: "cyclePeriod",
    header: () => "Cycle Period",
  },
  {
    accessorKey: "appraisalName",
    header: () => "Appraisal Name",
  },
  {
    accessorKey: "createdBy",
    header: () => "Created By",
  },
  {
    accessorKey: "createdOn",
    header: () => "Created On",
  },
  {
    accessorKey: "action",
    header: () => "Action",
    cell: () => (
      <ActionButtonRow width="100%" justifyContent="center">
        <IconButton $variant="info" title="Clone">
          <CopyAll />
        </IconButton>
        <IconButton $variant="primary" title="Edit">
          <Edit />
        </IconButton>
        <IconButton $variant="danger" title="Delete">
          <Close />
        </IconButton>
      </ActionButtonRow>
    ),
  },
]
