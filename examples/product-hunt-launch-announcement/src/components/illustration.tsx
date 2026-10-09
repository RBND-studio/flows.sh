export const Illustration = () => {
  return (
    <div className="flex w-full items-center justify-center rounded-md pb-0.5 pt-1.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <circle opacity="0.2" cx="30" cy="30" r="29.5" stroke="#FF6154" />
        <circle opacity="0.5" cx="30" cy="30" r="24.5" stroke="#FF6154" />
        <g clipPath="url(#clip0_4522_6681)">
          <path
            d="M30 10a20 20 0 1 1 0 40 20 20 0 0 1 0-40m-7 30h4v-6h5.67a7 7 0 1 0 0-14H23zm9.67-16a3 3 0 0 1 0 6H27v-6z"
            fill="#FF6154"
          />
        </g>
        <defs>
          <clipPath id="clip0_4522_6681">
            <rect width="40" height="40" fill="white" transform="translate(10 10)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
