import { noop } from "lodash-es";

export const Button = () => {
  return (
    <button type="button" onClick={noop}>
      Boop
    </button>
  );
};
