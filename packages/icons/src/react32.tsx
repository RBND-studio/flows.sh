import type { JSX } from "react";
export function React32(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg fill="currentColor" height={32} width={32} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3.87552C9.40258 3.6431 9.98944 3.57148 10.8263 3.82094C11.666 4.07122 12.6628 4.62134 13.7525 5.47884C14.0227 5.69144 14.2961 5.92092 14.5715 6.1665C13.7243 7.0688 12.8848 8.08704 12.075 9.20173C10.7049 9.34564 9.40328 9.5636 8.19832 9.84606C8.12334 9.48476 8.06128 9.13331 8.01224 8.793C7.8145 7.42051 7.8365 6.28216 8.03958 5.42986C8.24198 4.58038 8.59742 4.10796 9 3.87552ZM14.9893 3.9071C15.3245 4.17084 15.6618 4.45597 16 4.76122C16.3381 4.45597 16.6755 4.17084 17.0106 3.9071C18.2184 2.95672 19.4396 2.25086 20.6024 1.90429C21.7678 1.55688 22.9676 1.54748 24 2.14348C25.0322 2.73948 25.624 3.78327 25.906 4.96633C26.1872 6.14654 26.1864 7.55704 25.9672 9.07822C25.9064 9.50036 25.8282 9.93508 25.733 10.3806C26.1664 10.5208 26.582 10.6704 26.978 10.8288C28.405 11.3995 29.6268 12.1042 30.5084 12.9379C31.392 13.7735 32 14.8079 32 15.9999C32 17.1919 31.392 18.2263 30.5084 19.0619C29.6268 19.8955 28.405 20.6003 26.978 21.1711C26.582 21.3295 26.1664 21.4791 25.733 21.6193C25.8282 22.0647 25.9064 22.4995 25.9674 22.9215C26.1864 24.4427 26.1872 25.8533 25.906 27.0335C25.624 28.2165 25.0322 29.2603 24 29.8563C22.9678 30.4523 21.7678 30.4429 20.6024 30.0955C19.4397 29.7489 18.2185 29.0431 17.0107 28.0927C16.6755 27.8289 16.3381 27.5437 16 27.2385C15.6618 27.5437 15.3245 27.8289 14.9893 28.0927C13.7815 29.0431 12.5603 29.7489 11.3976 30.0955C10.2321 30.4429 9.03226 30.4523 7.99996 29.8563C6.96766 29.2603 6.37588 28.2165 6.094 27.0335C5.8128 25.8533 5.81348 24.4427 6.03264 22.9215C6.09346 22.4995 6.17172 22.0647 6.26702 21.6193C5.83358 21.4789 5.418 21.3295 5.022 21.1711C3.59504 20.6003 2.37316 19.8955 1.49167 19.0619C0.608056 18.2263 0 17.1919 0 15.9999C0 14.8079 0.608056 13.7735 1.49167 12.9379C2.37316 12.1042 3.59504 11.3995 5.022 10.8288C5.418 10.6704 5.8336 10.5208 6.26704 10.3806C6.17174 9.93508 6.0935 9.50036 6.03268 9.07822C5.81352 7.55704 5.81284 6.14652 6.09404 4.96631C6.37592 3.78327 6.9677 2.73948 8 2.14348C9.0323 1.54748 10.2321 1.55687 11.3976 1.90429C12.5603 2.25086 13.7815 2.9567 14.9893 3.9071ZM14.7349 9.02038C15.1547 8.50376 15.5776 8.01842 16 7.567C16.4223 8.01842 16.8453 8.50376 17.265 9.02038C16.8474 9.0068 16.4255 8.99988 16 8.99988C15.5745 8.99988 15.1526 9.00678 14.7349 9.02038ZM17.4285 6.1665C18.2756 7.06882 19.1152 8.08704 19.9249 9.20173C21.295 9.34564 22.5966 9.5636 23.8016 9.84606C23.8766 9.48476 23.9386 9.13331 23.9878 8.79303C24.1854 7.42051 24.1634 6.28216 23.9604 5.42986C23.758 4.58038 23.4026 4.10796 23 3.87552C22.5974 3.6431 22.0106 3.57148 21.1736 3.82094C20.334 4.07124 19.3372 4.62134 18.2474 5.47884C17.9772 5.69144 17.7039 5.92092 17.4285 6.1665ZM16 10.9999C16.9687 10.9999 17.9128 11.0376 18.8238 11.109C19.3411 11.8622 19.8458 12.661 20.3302 13.4999C20.8144 14.3388 21.2538 15.1752 21.6474 15.9998C21.2538 16.8245 20.8144 17.661 20.33 18.4999C19.8458 19.3388 19.3411 20.1375 18.8237 20.8907C17.9127 20.9623 16.9686 20.9999 16 20.9999C15.0313 20.9999 14.0873 20.9623 13.1763 20.8907C12.6589 20.1375 12.1542 19.3388 11.6699 18.4999C11.1855 17.661 10.7461 16.8245 10.3525 15.9998C10.7461 15.1752 11.1855 14.3388 11.6698 13.4999C12.1542 12.661 12.6588 11.8622 13.1762 11.109C14.0872 11.0376 15.0313 10.9999 16 10.9999ZM22.0622 12.4999C22.275 12.8683 22.4798 13.2372 22.677 13.6056C22.9144 12.9838 23.1232 12.3749 23.303 11.7834C22.701 11.6434 22.0692 11.5198 21.412 11.4146C21.6326 11.7695 21.8494 12.1314 22.0622 12.4999ZM22.0622 19.4999C22.2748 19.1314 22.4798 18.7625 22.677 18.3941C22.9144 19.0159 23.1234 19.6248 23.303 20.2163C22.701 20.3563 22.0692 20.4799 21.4118 20.5851C21.6324 20.2303 21.8494 19.8684 22.0622 19.4999ZM23.8498 15.9998C24.4102 17.2584 24.8724 18.4946 25.2302 19.6794C25.5806 19.5637 25.916 19.4417 26.2352 19.314C27.5228 18.799 28.4976 18.2108 29.1342 17.6088C29.7686 17.0088 30 16.4647 30 15.9999C30 15.535 29.7686 14.991 29.1342 14.391C28.4976 13.7889 27.5228 13.2007 26.2352 12.6857C25.916 12.558 25.5806 12.436 25.2302 12.3203C24.8724 13.5051 24.4102 14.7413 23.8498 15.9998ZM19.9249 22.7981C21.295 22.6541 22.5966 22.4361 23.8016 22.1537C23.8766 22.5151 23.9388 22.8665 23.9878 23.2067C24.1856 24.5793 24.1634 25.7177 23.9604 26.5699C23.758 27.4195 23.4026 27.8919 23 28.1243C22.5974 28.3567 22.0106 28.4283 21.1736 28.1789C20.334 27.9285 19.3372 27.3785 18.2475 26.5209C17.9773 26.3083 17.7039 26.0789 17.4285 25.8333C18.2756 24.9309 19.1152 23.9127 19.9249 22.7981ZM17.265 22.9795C16.8452 23.4961 16.4223 23.9813 16 24.4327C15.5776 23.9813 15.1547 23.4961 14.735 22.9793C15.1526 22.9929 15.5745 22.9999 16 22.9999C16.4255 22.9999 16.8473 22.9929 17.265 22.9795ZM9.93782 19.4999C10.1506 19.8684 10.3675 20.2303 10.5881 20.5851C9.9308 20.4799 9.29902 20.3563 8.69688 20.2163C8.87666 19.6248 9.08552 19.0159 9.32304 18.394C9.5201 18.7625 9.72508 19.1314 9.93782 19.4999ZM12.0751 22.7981C10.7049 22.6541 9.40326 22.4361 8.19828 22.1537C8.1233 22.5151 8.06124 22.8665 8.0122 23.2067C7.81446 24.5793 7.83646 25.7177 8.03954 26.5699C8.24194 27.4195 8.59738 27.8919 8.99996 28.1243C9.40254 28.3567 9.9894 28.4283 10.8263 28.1789C11.6659 27.9285 12.6627 27.3785 13.7525 26.5209C14.0227 26.3083 14.296 26.0789 14.5715 25.8333C13.7243 24.9309 12.8848 23.9127 12.0751 22.7981ZM8.15014 15.9998C7.58968 17.2584 7.12762 18.4946 6.76978 19.6794C6.41938 19.5637 6.084 19.4417 5.76478 19.314C4.47728 18.799 3.50246 18.2108 2.86588 17.6088C2.23142 17.0088 2 16.4647 2 15.9999C2 15.535 2.23142 14.991 2.86588 14.391C3.50246 13.7889 4.47728 13.2007 5.76478 12.6857C6.084 12.558 6.4194 12.436 6.7698 12.3203C7.12766 13.5051 7.58968 14.7413 8.15014 15.9998ZM9.32304 13.6056C9.08554 12.9838 8.8767 12.3749 8.69692 11.7834C9.29904 11.6434 9.93078 11.5198 10.588 11.4146C10.3675 11.7695 10.1505 12.1314 9.93778 12.4999C9.72506 12.8683 9.5201 13.2372 9.32304 13.6056ZM18.5 15.9999C18.5 17.3806 17.3807 18.4999 16 18.4999C14.6193 18.4999 13.5 17.3806 13.5 15.9999C13.5 14.6192 14.6193 13.4999 16 13.4999C17.3807 13.4999 18.5 14.6192 18.5 15.9999Z"
      />
    </svg>
  );
}