export type PerformanceMetric = {
  label: string;
  value: string;
};

export type PerformanceTrendPoint = {
  month: string;
  score: number;
};

export type PerformanceIssue = {
  id: string;
  title: string;
  detail: string;
};
