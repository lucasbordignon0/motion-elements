interface ToolbarProps {
  onClickOne: () => void;
  onClickTwo: () => void;
}

export default function Toolbar({ onClickOne, onClickTwo }: ToolbarProps) {
  return (
    <div className="flex p-2 rounded-3xl bg-[#111111]">
      <button
        onClick={onClickOne}
        className="flex flex-col items-center justify-center w-[94px] h-[72px] gap-2 rounded-2xl hover:bg-[#1C1C1C] text-white/50 hover:text-white transition-all ease-out duration-200 font-poppins font-medium text-sm"
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5 6H3.5M7.5 12H3.5M7.5 18H3.5M12.5 18C13.1296 18.8395 14.0075 19.4597 15.0092 19.7726C16.0108 20.0855 17.0856 20.0753 18.0811 19.7434C19.0767 19.4116 19.9426 18.7749 20.5562 17.9236C21.1698 17.0722 21.5 16.0494 21.5 15C21.5 13.8065 21.0259 12.6619 20.182 11.818C19.3381 10.9741 18.1935 10.5 17 10.5C15.67 10.5 14.46 11.04 13.59 11.91L11.5 14M11.5 14V10M11.5 14H15.5"
            stroke="currentColor"
            stroke-opacity="0.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>Reset</p>
      </button>
      <button
        onClick={onClickTwo}
        className="flex flex-col items-center justify-center w-[94px] h-[72px] gap-2 rounded-2xl hover:bg-[#1C1C1C] text-white/50 hover:text-white transition-all ease-out duration-200 font-poppins font-medium text-sm"
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 18H5.5C4.70435 18 3.94129 17.6839 3.37868 17.1213C2.81607 16.5587 2.5 15.7956 2.5 15V14M10.5 18L7.5 21M10.5 18L7.5 15M14.5 2C15.0304 2 15.5391 2.21071 15.9142 2.58579C16.2893 2.96086 16.5 3.46957 16.5 4V8C16.5 8.53043 16.2893 9.03914 15.9142 9.41421C15.5391 9.78929 15.0304 10 14.5 10M20.5 2C21.0304 2 21.5391 2.21071 21.9142 2.58579C22.2893 2.96086 22.5 3.46957 22.5 4V8C22.5 8.53043 22.2893 9.03914 21.9142 9.41421C21.5391 9.78929 21.0304 10 20.5 10M16.5 14H20.5C21.6046 14 22.5 14.8954 22.5 16V20C22.5 21.1046 21.6046 22 20.5 22H16.5C15.3954 22 14.5 21.1046 14.5 20V16C14.5 14.8954 15.3954 14 16.5 14ZM4.5 2H8.5C9.60457 2 10.5 2.89543 10.5 4V8C10.5 9.10457 9.60457 10 8.5 10H4.5C3.39543 10 2.5 9.10457 2.5 8V4C2.5 2.89543 3.39543 2 4.5 2Z"
            stroke="currentColor"
            stroke-opacity="0.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p>Combine</p>
      </button>
      <button
        disabled={true}
        className="cursor-not-allowed flex flex-col items-center justify-center w-[94px] h-[72px] gap-2 rounded-2xl text-white/50 transition-all ease-out duration-200 font-poppins font-medium text-sm"
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 14C20.99 12.54 22.5 10.79 22.5 8.5C22.5 7.04131 21.9205 5.64236 20.8891 4.61091C19.8576 3.57946 18.4587 3 17 3C15.24 3 14 3.5 12.5 5C11 3.5 9.76 3 8 3C6.54131 3 5.14236 3.57946 4.11091 4.61091C3.07946 5.64236 2.5 7.04131 2.5 8.5C2.5 10.8 4 12.55 5.5 14L12.5 21L19.5 14Z"
            stroke="currentColor"
            stroke-opacity="0.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p>Favorite</p>
      </button>
    </div>
  );
}
