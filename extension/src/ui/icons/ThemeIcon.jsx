export default function ThemeIcon(props) {
  return (
    <svg
      width={props.size || '1em'}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M16.1972 5.80281L18 4.00003C18.5523 3.44774 19.4477 3.44774 20 4.00003C20.5523 4.55231 20.5523 5.44774 20 6.00003L18.1972 7.8028C17.3626 8.63743 16.9453 9.05475 16.4342 9.33181L16.3966 9.35194C15.8825 9.62353 15.3038 9.73927 14.1464 9.97075L14 10L14.0293 9.85366L14.0293 9.85364C14.2608 8.69623 14.3765 8.11752 14.6481 7.60348L14.6682 7.56587C14.9453 7.05475 15.3626 6.63744 16.1972 5.80281ZM5 17L6.67157 15.3285C8.00491 13.9951 8.67157 13.3285 9.5 13.3285C10.3284 13.3285 10.9951 13.9951 12.3284 15.3285L14 17L14.1716 16.8285C15.5049 15.4951 16.1716 14.8285 17 14.8285C17.8284 14.8285 18.4951 15.4951 19.8284 16.8285L21 18C20.9156 18.2532 20.8734 18.3797 20.8283 18.492C20.2519 19.9258 18.9012 20.8993 17.3588 20.9927C17.238 21 17.1046 21 16.8377 21H7.19258C5.56636 21 4.10397 20.0099 3.5 18.5L5 17Z'
        fill={props.color || '#fff'}
        fillOpacity='0.15'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        fill={props.color || '#fff'}
        d='M10.9436 2.25H11H12C12.4142 2.25 12.75 2.58579 12.75 3C12.75 3.41421 12.4142 3.75 12 3.75H11C9.09318 3.75 7.73851 3.75159 6.71085 3.88976C5.70476 4.02502 5.12511 4.27869 4.7019 4.7019C4.27869 5.12511 4.02502 5.70476 3.88976 6.71085C3.75159 7.73851 3.75 9.09318 3.75 11V13C3.75 14.7777 3.75138 16.0755 3.86353 17.0758L4.46967 16.4697L6.14124 14.7981L6.17801 14.7613C6.81331 14.126 7.34307 13.5962 7.82019 13.2322C8.32379 12.8479 8.85587 12.5784 9.5 12.5784C10.1441 12.5784 10.6762 12.8479 11.1798 13.2322C11.6569 13.5962 12.1867 14.126 12.822 14.7613L12.822 14.7613L12.8588 14.7981L14.0003 15.9396C14.496 15.4467 14.9261 15.0329 15.3202 14.7322C15.8238 14.3479 16.3559 14.0784 17 14.0784C17.6441 14.0784 18.1762 14.3479 18.6798 14.7322C19.128 15.0741 19.6227 15.5624 20.2077 16.1471C20.2493 15.2994 20.25 14.2727 20.25 13V12C20.25 11.5858 20.5858 11.25 21 11.25C21.4142 11.25 21.75 11.5858 21.75 12V13V13.0564V13.0565C21.75 14.8942 21.75 16.3498 21.5969 17.489C21.4392 18.6614 21.1071 19.6104 20.3588 20.3588C19.6104 21.1071 18.6614 21.4392 17.489 21.5969C16.3498 21.75 14.8942 21.75 13.0565 21.75H13.0564H13H11H10.9436H10.9435C9.1058 21.75 7.65018 21.75 6.51098 21.5969C5.33856 21.4392 4.38961 21.1071 3.64124 20.3588C2.89288 19.6104 2.56076 18.6614 2.40313 17.489C2.24997 16.3498 2.24998 14.8942 2.25 13.0564V13V11V10.9436C2.24998 9.10582 2.24997 7.65019 2.40313 6.51098C2.56076 5.33856 2.89288 4.38961 3.64124 3.64124C4.38961 2.89288 5.33856 2.56076 6.51098 2.40313C7.65019 2.24997 9.10582 2.24998 10.9436 2.25ZM4.7019 19.2981C4.54709 19.1433 4.41496 18.9675 4.30302 18.7576L5.53033 17.5303L7.2019 15.8588C7.88356 15.1771 8.34258 14.7203 8.73006 14.4247C9.10023 14.1423 9.3157 14.0784 9.5 14.0784C9.6843 14.0784 9.89977 14.1423 10.2699 14.4247C10.6574 14.7203 11.1164 15.1771 11.7981 15.8588L13.4697 17.5303L16.1471 20.2077C15.2994 20.2493 14.2727 20.25 13 20.25H11C9.09318 20.25 7.73851 20.2484 6.71085 20.1102C5.70476 19.975 5.12511 19.7213 4.7019 19.2981ZM19.2981 19.2981C18.9917 19.6045 18.6034 19.822 18.0307 19.97L18.0303 19.9697L15.0611 17.0004C15.5523 16.5123 15.9149 16.1652 16.2301 15.9247C16.6002 15.6423 16.8157 15.5784 17 15.5784C17.1843 15.5784 17.3998 15.6423 17.7699 15.9247C18.1574 16.2203 18.6164 16.6771 19.2981 17.3588L19.9697 18.0303L19.97 18.0307C19.822 18.6034 19.6045 18.9917 19.2981 19.2981ZM18.5303 4.53033C18.7897 4.27094 19.2103 4.27094 19.4697 4.53033C19.7291 4.78972 19.7291 5.21028 19.4697 5.46967L17.6669 7.27245C16.8019 8.13741 16.47 8.45925 16.0767 8.67242L16.0462 8.68877C15.7807 8.82907 15.4897 8.91919 14.9641 9.03587C15.0808 8.51031 15.1709 8.21935 15.3112 7.95381L15.3276 7.92326C15.5407 7.53001 15.8626 7.19807 16.7276 6.33311L18.5303 4.53033ZM20.5303 3.46967C19.6852 2.62449 18.3148 2.62449 17.4697 3.46967L15.6669 5.27245L15.5879 5.35141L15.5879 5.35141C14.8288 6.11019 14.3385 6.60028 14.0089 7.20843L13.985 7.25309C13.6618 7.86472 13.526 8.54452 13.3157 9.59703L13.2938 9.70654L13.2646 9.85291C13.2154 10.0988 13.2924 10.353 13.4697 10.5303C13.647 10.7076 13.9012 10.7846 14.1471 10.7354L14.2935 10.7062L14.403 10.6843C15.4555 10.474 16.1353 10.3382 16.7469 10.015L16.7916 9.99114C17.3997 9.66148 17.8898 9.17119 18.6486 8.41209L18.7276 8.33311L20.5303 6.53033C21.3755 5.68515 21.3755 4.31485 20.5303 3.46967Z'
      />
    </svg>
  );
}
