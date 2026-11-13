import type { Key, ReactNode } from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import InboxOutlined from "@mui/icons-material/InboxOutlined";

export interface Column<T> {
  key: string;
  header: string;
  align?: "left" | "center" | "right";
  width?: number | string;
  render?: (row: T) => ReactNode;
}

export interface DataTableProps<T extends { id: Key }> {
  title?: string;
  action?: { label: string; onClick: () => void };
  columns: Column<T>[];
  rows: T[];
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
}

/**
 * Reusable table. Each column can supply a `render` function;
 * otherwise the value at row[column.key] is shown.
 */
export default function DataTable<T extends { id: Key }>({
  title,
  action,
  columns,
  rows,
  onRowClick,
  emptyMessage = "Nothing here yet.",
}: DataTableProps<T>) {
  return (
    <Paper
      variant="outlined"
      sx={{ borderRadius: 2, borderColor: "divider", overflow: "hidden" }}
    >
      {(title || action) && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2.5,
            py: 2,
          }}
        >
          {title && (
            <Typography
              component="h2"
              sx={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.01em" }}
            >
              {title}
            </Typography>
          )}
          {action && (
            <Button
              size="small"
              color="inherit"
              onClick={action.onClick}
              sx={{ color: "text.secondary" }}
            >
              {action.label}
            </Button>
          )}
        </Box>
      )}

      <TableContainer>
        <Table sx={{ minWidth: 560 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: "#F8FAFC" }}>
              {columns.map((col) => (
                <TableCell
                  key={col.key}
                  align={col.align}
                  sx={{
                    width: col.width,
                    py: 1.25,
                    px: 2.5,
                    fontSize: 12,
                    fontWeight: 500,
                    color: "text.secondary",
                    borderColor: "divider",
                  }}
                >
                  {col.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                hover
                onClick={onRowClick ? () => onRowClick(row) : undefined}
                sx={{
                  cursor: onRowClick ? "pointer" : "default",
                  "&:last-child td": { borderBottom: 0 },
                  "&.MuiTableRow-hover:hover": { bgcolor: "#F8FAFC" },
                }}
              >
                {columns.map((col) => (
                  <TableCell
                    key={col.key}
                    align={col.align}
                    sx={{ px: 2.5, py: 1.75, borderColor: "divider" }}
                  >
                    {col.render
                      ? col.render(row)
                      : ((row as Record<string, unknown>)[
                          col.key
                        ] as ReactNode)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {rows.length === 0 && (
          <Box
            sx={{
              py: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              color: "text.disabled",
            }}
          >
            <InboxOutlined sx={{ fontSize: 32 }} />
            <Typography variant="body2">{emptyMessage}</Typography>
          </Box>
        )}
      </TableContainer>
    </Paper>
  );
}
