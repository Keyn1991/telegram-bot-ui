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

export interface Locale {
  title: string;
}

export interface TarifPageProps {
  plans: Plan[];
  title: string;
}

export interface TablePageProps {
  freeServer: Record<string, unknown>;
  paidServer: Record<string, unknown>;
}

export const SET_LANGUAGE = 'SET_LANGUAGE';

export interface LangState {
  language: string;
}

interface SetLanguageAction {
  type: typeof SET_LANGUAGE;
  payload: string;
}

export type LangAction = SetLanguageAction;
