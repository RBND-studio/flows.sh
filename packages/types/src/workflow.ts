export type UserPropertyMatchValue = string | number | boolean;

export interface UserPropertyMatch {
  /**
   * The key of the user property to match.
   */
  key: string;

  /**
   * data type of the user property
   */
  data_type: string;

  /**
   * Operator to use for the comparison.
   */
  operator: string;

  /**
   * The value to compare against.
   */
  value: UserPropertyMatchValue | UserPropertyMatchValue[];
}

export type TourWait = {
  navigation?: { operator: string; value: string[] };
  interaction?: { operator: string; value: string };
};
