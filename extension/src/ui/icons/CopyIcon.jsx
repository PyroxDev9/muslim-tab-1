export default function NextIcon(props) {
  return (
    <svg
      width={props.size || '1em'}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        opacity='0.4'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.126 8.78058C17.6428 8.75034 17.0299 8.75 16.1668 8.75V7.25L16.1918 7.25C17.0243 7.25 17.6841 7.24999 18.2197 7.28351C18.7665 7.31774 19.2337 7.38899 19.6733 7.55445C20.9535 8.03628 21.9638 9.04662 22.4457 10.3268C22.6111 10.7664 22.6824 11.2336 22.7166 11.7805C22.7501 12.316 22.7501 12.9758 22.7501 13.8083V13.8333V15.6V15.633C22.7501 16.7251 22.7501 17.5906 22.6931 18.2883C22.6348 19.0017 22.5132 19.6053 22.2324 20.1565C21.777 21.0502 21.0503 21.7769 20.1566 22.2323C19.6054 22.5131 19.0018 22.6347 18.2884 22.693C17.5908 22.75 16.7253 22.75 15.6331 22.75H15.6001H13.8335H13.8084C12.9759 22.75 12.3161 22.75 11.7806 22.7165C11.2337 22.6823 10.7665 22.611 10.3269 22.4456C9.04674 21.9637 8.0364 20.9534 7.55457 19.6732C7.38911 19.2336 7.31786 18.7664 7.28363 18.2195C7.25012 17.684 7.25012 17.0242 7.25012 16.1917L7.25012 16.1667H8.75012C8.75012 17.0298 8.75046 17.6427 8.7807 18.1258C8.81057 18.603 8.86751 18.9032 8.95843 19.1448C9.2881 20.0207 9.97939 20.712 10.8553 21.0417C11.0969 21.1326 11.3971 21.1896 11.8743 21.2194C12.3574 21.2497 12.9703 21.25 13.8335 21.25H15.6001C16.7326 21.25 17.5369 21.2494 18.1662 21.198C18.7869 21.1473 19.1711 21.0509 19.4756 20.8958C20.0871 20.5842 20.5843 20.087 20.8959 19.4755C21.051 19.171 21.1474 18.7867 21.1981 18.1661C21.2495 17.5367 21.2501 16.7325 21.2501 15.6V13.8333C21.2501 12.9702 21.2498 12.3573 21.2195 11.8742C21.1897 11.397 21.1327 11.0968 21.0418 10.8552C20.7121 9.97926 20.0209 9.28798 19.1449 8.95831C18.9034 8.86738 18.6031 8.81045 18.126 8.78058Z'
        fill={props.color || '#fff'}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.36712 1.25L8.40012 1.25H9.60012L9.63312 1.25C10.7253 1.24999 11.5908 1.24999 12.2884 1.30699C13.0018 1.36527 13.6054 1.48688 14.1566 1.76772C15.0503 2.22312 15.777 2.94978 16.2324 3.84355C16.5132 4.39472 16.6348 4.99835 16.6931 5.71173C16.7501 6.40935 16.7501 7.27484 16.7501 8.36698V8.4V9.6V9.63302C16.7501 10.7252 16.7501 11.5906 16.6931 12.2883C16.6348 13.0017 16.5132 13.6053 16.2324 14.1565C15.777 15.0502 15.0503 15.7769 14.1566 16.2323C13.6054 16.5131 13.0018 16.6347 12.2884 16.693C11.5908 16.75 10.7253 16.75 9.63314 16.75H9.60012H8.40012H8.3671C7.27497 16.75 6.40947 16.75 5.71186 16.693C4.99847 16.6347 4.39484 16.5131 3.84367 16.2323C2.9499 15.7769 2.22324 15.0502 1.76784 14.1565C1.487 13.6053 1.3654 13.0017 1.30711 12.2883C1.25011 11.5906 1.25012 10.7251 1.25012 9.633L1.25012 9.6V8.4L1.25012 8.367C1.25012 7.27486 1.25011 6.40936 1.30711 5.71173C1.3654 4.99835 1.487 4.39472 1.76784 3.84355C2.22324 2.94978 2.9499 2.22312 3.84367 1.76772C4.39484 1.48688 4.99847 1.36527 5.71186 1.30699C6.40948 1.24999 7.27498 1.24999 8.36712 1.25ZM5.834 2.80201C5.21338 2.85271 4.82913 2.94909 4.52465 3.10423C3.91313 3.41582 3.41594 3.913 3.10435 4.52453C2.94921 4.829 2.85284 5.21325 2.80213 5.83388C2.75071 6.46327 2.75012 7.26752 2.75012 8.4V9.6C2.75012 10.7325 2.75071 11.5367 2.80213 12.1661C2.85284 12.7867 2.94921 13.171 3.10435 13.4755C3.41594 14.087 3.91313 14.5842 4.52465 14.8958C4.82913 15.0509 5.21338 15.1473 5.834 15.198C6.46339 15.2494 7.26764 15.25 8.40012 15.25H9.60012C10.7326 15.25 11.5369 15.2494 12.1662 15.198C12.7869 15.1473 13.1711 15.0509 13.4756 14.8958C14.0871 14.5842 14.5843 14.087 14.8959 13.4755C15.051 13.171 15.1474 12.7867 15.1981 12.1661C15.2495 11.5367 15.2501 10.7325 15.2501 9.6V8.4C15.2501 7.26752 15.2495 6.46327 15.1981 5.83388C15.1474 5.21325 15.051 4.829 14.8959 4.52453C14.5843 3.913 14.0871 3.41582 13.4756 3.10423C13.1711 2.94909 12.7869 2.85271 12.1662 2.80201C11.5369 2.75058 10.7326 2.75 9.60012 2.75H8.40012C7.26764 2.75 6.46339 2.75058 5.834 2.80201Z'
        fill={props.color || '#fff'}
      />
    </svg>
  );
}
