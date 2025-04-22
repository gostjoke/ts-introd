import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

// 定義資料格式
type BreadcrumbItem = {
  name: string;
  path: string;
};

// 定義 props 類型
type BreadcrumbProps = {
  routes: BreadcrumbItem[];
};

export default function Breadcrumb({ routes }: BreadcrumbProps) {
  const lastIndex = routes.length - 1;

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {routes.map((item, index) =>
          index !== lastIndex ? (
            <Link
              key={index}
              component={RouterLink}
              to={item.path}
              underline="hover"
              color="inherit"
            >
              {item.name}
            </Link>
          ) : (
            <Typography key={index} color="text.primary" aria-current="page">
              {item.name}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </div>
  );
}
