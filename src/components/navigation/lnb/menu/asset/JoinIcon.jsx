export const JoinIcon = ({ width = 18, height = 18, strokeWidth = 2, ...props }) => {
  //* 회원가입 아이콘
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20.71 16.0898L15.8 20.9998H13V18.1998L17.91 13.2898C18.0969 13.1065 18.3482 13.0039 18.61 13.0039C18.8718 13.0039 19.1231 13.1065 19.31 13.2898L20.71 14.6898C20.8932 14.8767 20.9959 15.128 20.9959 15.3898C20.9959 15.6515 20.8932 15.9028 20.71 16.0898V16.0898Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 9.26996C17.005 9.18003 17.005 9.08989 17 8.99996C16.9968 7.83271 16.6533 6.69173 16.0114 5.71679C15.3696 4.74186 14.4573 3.97531 13.3863 3.51107C12.3154 3.04684 11.1322 2.90506 9.98191 3.10312C8.83159 3.30118 7.76401 3.83048 6.90998 4.62616C6.05595 5.42184 5.45255 6.44935 5.17371 7.58281C4.89487 8.71627 4.9527 9.90645 5.34012 11.0075C5.72753 12.1086 6.42771 13.0728 7.35486 13.7819C8.28201 14.4911 9.39587 14.9144 10.56 15"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 21C4.55 20.63 3 19 3 19V18C3.00351 16.9406 3.34339 15.9098 3.97065 15.0561C4.5979 14.2023 5.48009 13.5699 6.49 13.25"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
