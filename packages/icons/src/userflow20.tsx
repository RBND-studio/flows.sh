import type { JSX } from "react";

type ExtraProps = {
  useCurrentColor?: boolean;
};

export function Userflow20(props: React.SVGProps<SVGSVGElement> & ExtraProps): JSX.Element {
  const { useCurrentColor = false, ...rest } = props;

  // Brand colors
  const accentOneHex = "#23D777";
  const accentTwoHex = "#1A57E6";

  const accentOneColor = useCurrentColor ? "currentColor" : accentOneHex;
  const accentTwoColor = useCurrentColor ? "currentColor" : accentTwoHex;

  return (
    <svg fill="currentColor" height={20} width={20} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M12.298 6.074L11.9676 7.948C11.6152 9.948 9.70902 11.548 7.71882 11.548H6.08702C4.08482 11.548 2.76142 9.93 3.11182 7.948L3.77442 4.194H5.65842L4.99602 7.948C4.94523 8.15885 4.94418 8.37861 4.99295 8.58993C5.04172 8.80125 5.13897 8.99833 5.27702 9.1656C5.4151 9.33303 5.59018 9.4661 5.78846 9.55432C5.98674 9.64255 6.2028 9.68352 6.41962 9.674H8.05162C8.53518 9.65645 8.99876 9.47659 9.36762 9.1634C9.73622 8.85035 9.98847 8.42214 10.0836 7.948L10.58 5.134C10.6317 4.87548 10.7691 4.64198 10.9701 4.47136C11.171 4.30074 11.4237 4.203 11.6872 4.194H15.1732L15.3894 2.964C15.68 1.326 14.5886 0 12.9468 0H4.93782C3.29982 0 1.73402 1.326 1.44782 2.964L0.0462179 10.964C-0.241982 12.6 0.847218 13.926 2.48902 13.926H10.498C12.1378 13.926 13.7016 12.6 13.988 10.964L14.8508 6.074H12.298Z"
        fill={accentOneColor}
      />
      <path
        d="M17.524 6.07373H16.723L15.5036 12.9877C15.2152 14.6237 13.6516 15.9517 12.0136 15.9517H4.79559L4.60539 17.0377C4.31499 18.6737 5.40599 19.9997 7.04799 19.9997H15.057C16.695 19.9997 18.2606 18.6737 18.547 17.0377L19.9486 9.03773C20.2548 7.40173 19.1618 6.07373 17.524 6.07373Z"
        fill={accentTwoColor}
      />
    </svg>
  );
}
