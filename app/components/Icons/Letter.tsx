export default function Letter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.28628 2.70834H11.7136C13.2451 2.70832 14.4581 2.70831 15.4075 2.83595C16.3845 2.96731 17.1753 3.24407 17.7989 3.86771C18.4226 4.49134 18.6993 5.28213 18.8307 6.25915C18.9583 7.2085 18.9583 8.42153 18.9583 9.95299V10.047C18.9583 11.5785 18.9583 12.7915 18.8307 13.7409C18.6993 14.7179 18.4226 15.5087 17.7989 16.1323C17.1753 16.7559 16.3845 17.0327 15.4075 17.1641C14.4581 17.2917 13.2451 17.2917 11.7136 17.2917H8.28628C6.75482 17.2917 5.54179 17.2917 4.59244 17.1641C3.61542 17.0327 2.82463 16.7559 2.201 16.1323C1.57736 15.5087 1.3006 14.7179 1.16924 13.7409C1.0416 12.7915 1.04161 11.5785 1.04163 10.047V9.95299C1.04161 8.42152 1.0416 7.2085 1.16924 6.25915C1.3006 5.28213 1.57736 4.49134 2.201 3.86771C2.82463 3.24407 3.61542 2.96731 4.59244 2.83595C5.54179 2.70831 6.75481 2.70832 8.28628 2.70834ZM4.759 4.0748C3.92059 4.18752 3.43755 4.39891 3.08488 4.75159C2.7322 5.10426 2.52081 5.5873 2.40809 6.42571C2.29295 7.2821 2.29163 8.41099 2.29163 10C2.29163 11.589 2.29295 12.7179 2.40809 13.5743C2.52081 14.4127 2.7322 14.8957 3.08488 15.2484C3.43755 15.6011 3.92059 15.8125 4.759 15.9252C5.61539 16.0403 6.74428 16.0417 8.33329 16.0417H11.6666C13.2556 16.0417 14.3845 16.0403 15.2409 15.9252C16.0793 15.8125 16.5624 15.6011 16.915 15.2484C17.2677 14.8957 17.4791 14.4127 17.5918 13.5743C17.707 12.7179 17.7083 11.589 17.7083 10C17.7083 8.41099 17.707 7.2821 17.5918 6.42571C17.4791 5.5873 17.2677 5.10426 16.915 4.75159C16.5624 4.39891 16.0793 4.18752 15.2409 4.0748C14.3845 3.95966 13.2556 3.95834 11.6666 3.95834H8.33329C6.74428 3.95834 5.61539 3.95966 4.759 4.0748ZM4.51982 6.26655C4.7408 6.00138 5.1349 5.96555 5.40007 6.18653L7.19915 7.68576C7.97662 8.33365 8.5164 8.78202 8.97211 9.07511C9.41325 9.35883 9.7124 9.45407 9.99996 9.45407C10.2875 9.45407 10.5867 9.35883 11.0278 9.07511C11.4835 8.78202 12.0233 8.33365 12.8008 7.68576L14.5998 6.18653C14.865 5.96555 15.2591 6.00138 15.4801 6.26655C15.7011 6.53173 15.6652 6.92583 15.4001 7.14681L13.5697 8.67215C12.831 9.28769 12.2324 9.7866 11.704 10.1264C11.1536 10.4804 10.6175 10.7041 9.99996 10.7041C9.3824 10.7041 8.84635 10.4804 8.29594 10.1264C7.76756 9.78661 7.16889 9.2877 6.43026 8.67216L4.59984 7.14681C4.33467 6.92583 4.29884 6.53173 4.51982 6.26655Z"
      />
    </svg>
  );
}
