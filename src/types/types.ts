export interface Props {
  title: string;
  plans: Plan[];
}

export interface Plan {
  id: number;
  name: string;
  price: number;
}

export interface ServerComparisonTableProps {
  freeServer: {
    [key: string]: boolean;
  };
  paidServer: {
    [key: string]: boolean;
  };
}